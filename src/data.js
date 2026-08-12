export const audiences = [
  'Électriciens',
  'Agents de maintenance',
  'Techniciens',
  'Personnels de production',
  'Gardiens',
  'Agents d’entretien',
  'Intervenants non-électriciens à proximité d’installations électriques',
]

export const benefits = [
  { icon: 'shield', title: 'Sécurité des salariés', text: 'Développer les bons réflexes face au risque électrique et prévenir les situations dangereuses.' },
  { icon: 'document', title: 'Conformité réglementaire', text: 'Accompagner l’employeur dans le respect de ses obligations de prévention et de formation.' },
  { icon: 'trend', title: 'Réduction des risques', text: 'Mieux identifier les dangers pour limiter les accidents et les incidents liés à l’électricité.' },
  { icon: 'target', title: 'Adaptation au poste réel', text: 'Relier les apprentissages aux tâches, aux équipements et à l’environnement de vos équipes.' },
]

export const trainings = [
    {
    id: 'formation-h0-b0',
    title: 'H0, B0',
    summary: 'Formation préparatoire à l’habilitation électrique pour les travaux d’ordre non électrique en environnement BT et/ou HT.',
    audience: 'Personnel non électricien amené à accéder à des locaux réservés aux électriciens et à effectuer des travaux d’ordre non électrique dans un environnement comportant des installations ou ouvrages en Basse et/ou Haute Tension.',
    objectives: [
      'Identifier la présence d’un risque électrique et mettre en œuvre les mesures de prévention adaptées.',
      'Identifier les domaines de tension, les zones d’environnement, les protections collectives et la signalisation.',
      'Se positionner dans son rôle d’exécutant non-électricien habilité H0V/B0, appliquer les instructions reçues et signaler toute situation imprévue.',
    ],
    prerequisites: 'Aucune connaissance préalable en électricité n’est requise.',
    duration: 'Initiale : 7 h (1 jour) — Recyclage : 7 h (1 jour)',
    methods: 'Diaporamas et quiz, études de cas, mises en situation pratiques, jeux de rôle et partage d’expériences.',
    evaluation: 'QCM de validation des acquis et évaluation pratique.',
    programFile: 'Programme_H0_B0.docx',
  },
    {
    id: 'formation-bs-be-manoeuvre',
    title: 'BS, BE Manœuvre',
    summary: 'Formation préparatoire à l’habilitation électrique pour les interventions élémentaires et les manœuvres en BT/TBT.',
    audience: 'Personnel non électricien chargé de réaliser des interventions élémentaires en Basse Tension et/ou des manœuvres d’exploitation, de consignation ou d’urgence sur des installations BT ou TBT.',
    objectives: [
      'Analyser une situation de travail, identifier les risques électriques et appliquer les mesures de prévention adaptées.',
      'Reconnaître les zones à risque, les symboles de sécurité et les équipements électriques.',
      'Réaliser des interventions élémentaires en Basse Tension et les manœuvres autorisées dans le respect des prescriptions réglementaires.',
    ],
    prerequisites: 'Connaissances élémentaires en électricité et connaissance des matériels et des opérations confiées.',
    duration: 'Initiale : 14 h (2 jours) — Recyclage : 10 h 30 (1,5 jour)',
    methods: 'Diaporamas et quiz, études de cas, mises en situation pratiques, jeux de rôle et partage d’expériences.',
    evaluation: 'QCM de validation des acquis et évaluation pratique.',
    programFile: 'Programme_BS_BE_Manoeuvre.docx',
  },
  {
    id: 'formation-b2v-br-bc-h0-b0',
    title: 'B2V, BR, BC, H0, B0',
    summary: 'Formation préparatoire à l’habilitation électrique conformément à la norme NF C 18-510.',
    audience: 'Personnel électricien réalisant des travaux, des interventions et des consignations en Basse Tension, amené à accéder à des locaux réservés aux électriciens comportant des équipements Haute Tension.',
    objectives: [
      'Analyser une situation de travail, identifier les risques électriques et appliquer les mesures de prévention adaptées.',
      'Reconnaître les zones à risque, les symboles de sécurité et les équipements électriques.',
      'Réaliser des travaux hors tension BT, des interventions générales BT et des consignations BT dans le respect des prescriptions réglementaires.',
    ],
    prerequisites: 'Compétences en électricité dans le domaine de la BT, issues d’une formation ou d’une pratique professionnelle. Savoir identifier les appareillages et équipements électriques et lire un schéma électrique.',
    duration: 'Initiale : 21 h (3 jours) — Recyclage : 10 h 30 (1,5 jour)',
    methods: 'Diaporamas et quiz, études de cas, mises en situation pratiques, jeux de rôle et partage d’expériences.',
    evaluation: 'QCM de validation des acquis et évaluation pratique.',
    programFile: 'Programme_B2V_BR_BC_H0_B0.docx',
  },
  {
    id: 'formation-b2v-br-bc-h2v-hc-b0-h0',
    title: 'B2V, BR, BC, H2V, HC, H0, B0',
    summary: 'Formation préparatoire aux habilitations électriques Basse Tension et Haute Tension conformément à la norme NF C 18-510.',
    audience: 'Personnel électricien réalisant des travaux, des interventions et des consignations en Basse Tension, ainsi que des travaux hors tension et des consignations sur des ouvrages ou installations en Haute Tension.',
    objectives: [
      'Analyser une situation de travail, identifier les risques électriques et appliquer les mesures de prévention adaptées.',
      'Reconnaître les zones à risque, les symboles de sécurité et les équipements électriques.',
      'Réaliser des travaux hors tension BT/HTA, des interventions générales BT et des consignations BT/HTA dans le respect des prescriptions réglementaires.',
    ],
    prerequisites: 'Compétences en électricité dans les domaines BT et HTA, issues d’une formation ou d’une pratique professionnelle. Savoir identifier les appareillages et équipements électriques et lire un schéma électrique.',
    duration: 'Initiale : 28 h (4 jours) — Recyclage : 14 h (2 jours)',
    methods: 'Diaporamas, études de cas, mises en situation pratiques et partage d’expériences, sur plateau technique électrique et cellules HTA du client.',
    evaluation: 'QCM de validation des acquis et évaluation pratique.',
    programFile: 'Programme_B2V_BR_BC_H2V_HC_B0_H0.docx',
  },


]

export const contactDetails = [
  /*{ label: 'Téléphone', value: '06 72 60 90 05', icon: 'phone' },*/
  { label: 'Email', value: 'contact@pklformation.fr', icon: 'mail' },
  { label: 'Zone d’intervention', value: 'Marseille & alentours', icon: 'pin' },
]
