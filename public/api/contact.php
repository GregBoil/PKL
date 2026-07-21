<?php
declare(strict_types=1);

const RECIPIENT_EMAIL = 'contact@pklformation.fr';
const SENDER_EMAIL = 'contact@pklformation.fr';
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 3000;

function json_response(int $status, bool $success, string $message, array $errors = []): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');

    echo json_encode([
        'success' => $success,
        'message' => $message,
        'errors' => $errors,
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

function get_payload(): array
{
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';

    if (stripos($contentType, 'application/json') !== false) {
        $rawBody = file_get_contents('php://input');
        $payload = json_decode($rawBody ?: '', true);

        if (!is_array($payload)) {
            json_response(400, false, 'Le format de la demande est invalide.');
        }

        return $payload;
    }

    return $_POST;
}

function clean_text($value, int $maxLength = MAX_FIELD_LENGTH): string
{
    $text = is_string($value) ? $value : '';
    $text = trim(strip_tags($text));
    $text = preg_replace('/[^\P{C}\t\n\r]/u', '', $text) ?? '';

    return substr($text, 0, $maxLength);
}

function clean_header_text($value, int $maxLength = MAX_FIELD_LENGTH): string
{
    $text = clean_text($value, $maxLength);

    return str_replace(["\r", "\n"], ' ', $text);
}

function required_error(string $value, string $label): ?string
{
    return $value === '' ? "Le champ {$label} est obligatoire." : null;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, false, 'Méthode non autorisée.');
}

$payload = get_payload();

if (clean_text($payload['website'] ?? '') !== '') {
    json_response(400, false, 'La demande a été refusée.');
}

$name = clean_header_text($payload['name'] ?? '');
$company = clean_text($payload['company'] ?? '');
$email = clean_header_text($payload['email'] ?? '');
$phone = clean_header_text($payload['phone'] ?? '');
$training = clean_text($payload['training'] ?? 'À définir ensemble');
$participants = clean_header_text($payload['participants'] ?? '');
$location = clean_text($payload['location'] ?? '');
$message = clean_text($payload['message'] ?? '', MAX_MESSAGE_LENGTH);

$errors = [];

foreach ([
    'name' => required_error($name, 'nom / prénom'),
    'company' => required_error($company, 'entreprise'),
    'email' => required_error($email, 'email'),
    'message' => required_error($message, 'message'),
] as $field => $error) {
    if ($error !== null) {
        $errors[$field] = $error;
    }
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'L’adresse e-mail est invalide.';
}

if ($participants !== '' && !preg_match('/^[0-9]{1,4}$/', $participants)) {
    $errors['participants'] = 'Le nombre de personnes est invalide.';
}

if ($errors !== []) {
    json_response(422, false, 'Certains champs sont invalides.', $errors);
}

$sentAt = new DateTimeImmutable('now', new DateTimeZone('Europe/Paris'));
$subject = 'Nouvelle demande de contact PKL Formation';

$body = implode("\n", [
    'Nouvelle demande envoyée depuis le site PKL Formation.',
    '',
    'Date d’envoi : ' . $sentAt->format('d/m/Y à H:i'),
    '',
    'Nom / prénom : ' . $name,
    'Entreprise : ' . $company,
    'Adresse e-mail : ' . $email,
    'Téléphone : ' . ($phone !== '' ? $phone : 'Non renseigné'),
    'Formation demandée : ' . ($training !== '' ? $training : 'À définir ensemble'),
    'Nombre de personnes : ' . ($participants !== '' ? $participants : 'Non renseigné'),
    'Ville / lieu de formation : ' . ($location !== '' ? $location : 'Non renseigné'),
    '',
    'Message :',
    $message,
]);

$headers = [
    'From: PKL Formation <' . SENDER_EMAIL . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . phpversion(),
];

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$additionalParams = '-f' . SENDER_EMAIL;
$sent = @mail(RECIPIENT_EMAIL, $encodedSubject, $body, implode("\r\n", $headers), $additionalParams);

if (!$sent) {
    json_response(500, false, 'Le message n’a pas pu être envoyé. Veuillez réessayer ou nous contacter directement par e-mail.');
}

json_response(200, true, 'Votre demande a bien été envoyée.');
