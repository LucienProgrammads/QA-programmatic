/**
 * BANQUE DE QUESTIONS DU QUIZ PROGRAMMATIQUE
 * 
 * Pour modifier, ajouter ou supprimer des questions :
 * - id : identifiant unique (1, 2, 3...)
 * - module : nom exact du module (ex: "Écosystème programmatique", "Ciblage & audiences", etc.)
 * - question : texte de la question posée
 * - options : tableau des 4 choix possibles
 * - correct : index du bon choix (0 pour le 1er, 1 pour le 2e, 2 pour le 3e, 3 pour le 4e)
 * - explanation : explication pédagogique affichée lors du compte-rendu final
 */

const ALL_QUESTIONS = [
  {
    id: 1,
    module: "Écosystème programmatique",
    question: "Dans l'écosystème programmatique, quelle est la fonction principale d'une SSP (Supply-Side Platform) lors de la mise aux enchères d'une impression ?",
    options: [
      "Agréger l'inventaire des éditeurs et maximiser leur yield",
      "Gérer et optimiser les budgets des annonceurs",
      "Héberger et auditer les créatives dynamiques",
      "Mesurer la conversion post-clic sur le site marchand"
    ],
    correct: 0,
    explanation: "La SSP (Supply-Side Platform) permet aux éditeurs d'automatiser la mise en vente de leurs espaces et d'optimiser leurs revenus (yield management)."
  },
  {
    id: 2,
    module: "Écosystème programmatique",
    question: "Quel type de transaction programmatique engage à la fois l'acheteur sur un volume d'impressions précis et l'éditeur sur un prix fixe réservé ?",
    options: [
      "Open Auction (Enchères ouvertes)",
      "Private Marketplace (PMP)",
      "Preferred Deal",
      "Programmatic Guaranteed"
    ],
    correct: 3,
    explanation: "Le Programmatic Guaranteed (PG) garantit à la fois le volume d'impressions (réservation stricte) et un CPM fixe négocié à l'avance."
  },
  {
    id: 3,
    module: "Ciblage & audiences",
    question: "Dans une stratégie de prospection en haut de funnel sans cookies tiers, quel levier d'audience est le plus pertinent ?",
    options: [
      "Le ciblage contextuel avancé",
      "Le remarketing des paniers abandonnés",
      "L'exclusion des clients 1st party existants",
      "Une audience similaire basée sur la liste d'acheteurs récents"
    ],
    correct: 0,
    explanation: "Le ciblage contextuel analyse la thématique de la page visitée en temps réel et ne dépend d'aucun traceur ni identifiant tiers."
  },
  {
    id: 4,
    module: "Ciblage & audiences",
    question: "Quel est l'impact direct de la configuration d'un frequency capping au niveau d'un line item en DSP ?",
    options: [
      "Restreindre le nombre d'expositions publicitaires par internaute",
      "Augmenter systématiquement l'enchère maximale en fin de journée",
      "Garantir un taux de visibilité minimum de 70%",
      "Bloquer la diffusion sur les appareils mobiles"
    ],
    correct: 0,
    explanation: "Le frequency capping (limitation de la fréquence) limite le nombre de fois où un utilisateur unique voit une publicité sur une période donnée."
  },
  {
    id: 5,
    module: "Formats & créas",
    question: "Quel format publicitaire est le plus adapté pour générer de l'engagement qualifié en milieu de funnel (Considération) avec une forte immersion de marque ?",
    options: [
      "Format vidéo Outstream ou Native interactif",
      "Bannière display classique 300x250 statique",
      "Tag d'audit invisible 1x1",
      "Notification push sponsorisée"
    ],
    correct: 0,
    explanation: "La vidéo outstream ou le format interactif captive l'attention au cœur du contenu éditorial pour travailler la considération."
  },
  {
    id: 6,
    module: "Formats & créas",
    question: "Lors du contrôle qualité (QA) d'une créative HTML5 pour du Display programmatique, quelle anomalie technique justifie un refus de conformité ?",
    options: [
      "L'utilisation d'une balise clickTag codée en dur vers une URL fixe",
      "Le respect du poids limite initial compressé (ex: < 150 Ko)",
      "L'intégration d'un bouton call-to-action animé",
      "L'utilisation de polices web Google Fonts sécurisées (HTTPS)"
    ],
    correct: 0,
    explanation: "L'ad server et le DSP doivent pouvoir injecter dynamiquement l'URL de tracking de clic. Coder une redirection fixe en dur empêche le bon fonctionnement du tracking."
  },
  {
    id: 7,
    module: "Tracking & mesure",
    question: "Quelle est la différence fondamentale entre un tag Floodlight (ad server) et un paramètre UTM standard ?",
    options: [
      "Le tag Floodlight permet la déduplication et l'attribution post-view au sein de l'ad server",
      "L'UTM permet de mesurer les impressions publicitaires sans clic",
      "Le Floodlight ne fonctionne que sur les campagnes search payantes",
      "L'UTM stocke un cookie sécurisé sur le navigateur pour 30 jours"
    ],
    correct: 0,
    explanation: "Les UTM sont de simples paramètres d'URL lus lors d'une session suite à un clic. Le tag Floodlight (CM360/DV360) permet de comptabiliser conversions post-clic et post-view."
  },
  {
    id: 8,
    module: "Tracking & mesure",
    question: "Dans quel cas une conversion est-elle qualifiée d'attribution « post-view » (ou post-impression) ?",
    options: [
      "L'internaute a été exposé à une impression puis a converti ultérieurement sans avoir cliqué",
      "L'internaute a cliqué sur la bannière puis a acheté sous 24 heures",
      "La conversion provient d'un trafic direct sans aucun contact publicitaire",
      "La vidéo a été vue à 100% sans générer de visite sur le site"
    ],
    correct: 0,
    explanation: "Une conversion post-view intervient lorsqu'un internaute a vu l'annonce, ne clique pas, mais réalise ultérieurement une conversion dans le délai de la fenêtre d'attribution."
  },
  {
    id: 9,
    module: "Privacy, brand safety & qualité",
    question: "En Europe (RGPD), quel est l'impact direct du Transparency and Consent Framework (TCF v2.2) sur la diffusion d'une campagne programmatique ?",
    options: [
      "Il conditionne la transmission de la chaîne de consentement (TC String) dans l'appel d'offre aux DSP",
      "Il impose un prix plancher fixe sur l'ensemble des enchères RTB",
      "Il supprime automatiquement les formats vidéo non skippables",
      "Il interdit formellement l'utilisation de tout ciblage géographique"
    ],
    correct: 0,
    explanation: "La chaîne TC String certifiée par le TCF informe le DSP et l'ad server des finalités et des fournisseurs autorisés par l'utilisateur."
  },
  {
    id: 10,
    module: "Privacy, brand safety & qualité",
    question: "Dans le cadre de la brand safety et du filtrage de l'inventaire, quelle solution permet d'éviter la diffusion sur des articles traitant de catastrophes naturelles ?",
    options: [
      "L'utilisation de listes d'exclusion de mots-clés et de segments contextuels négatifs",
      "L'augmentation du frequency capping journalier",
      "L'activation du ciblage par langue uniquement",
      "Le passage exclusif en mode Open Auction"
    ],
    correct: 0,
    explanation: "Les listes d'exclusion thématiques et la brand safety sémantique préventive évitent d'associer la marque à des contenus dégradants ou anxiogènes."
  }
];
