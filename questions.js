/**
 * BANQUE DE QUESTIONS - QUIZ PROGRAMMATIQUE MODULAIRE
 * 5 modules x 5 questions = 25 questions
 */

window.ALL_QUESTIONS = [
  // ==========================================
  // MODULE 1 : Écosystème programmatique (5 questions)
  // ==========================================
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
    correct: 0
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
    correct: 3
  },
  {
    id: 3,
    module: "Écosystème programmatique",
    question: "Quelle est la principale différence entre une enchère au premier prix (First-Price Auction) et au second prix (Second-Price Auction) ?",
    options: [
      "Au premier prix, l'acheteur paie le montant exact de son offre ; au second prix, il paie l'offre immédiatement inférieure + 0,01 €",
      "Le premier prix est réservé exclusivement aux formats vidéo",
      "Le second prix ne s'applique que dans le cadre des Preferred Deals",
      "Au premier prix, l'éditeur ne perçoit aucune commission de la part du SSP"
    ],
    correct: 0
  },
  {
    id: 4,
    module: "Écosystème programmatique",
    question: "Dans le protocole OpenRTB, que représente la requête 'bid request' envoyée par la SSP au DSP ?",
    options: [
      "L'opportunité d'enchérir sur une impression disponible avec les métadonnées de l'utilisateur et de la page",
      "La facture mensuelle consolidée des impressions délivrées",
      "La notification confirmant que la créative a été validée par l'ad server",
      "L'ordre de virement bancaire entre l'annonceur et l'éditeur"
    ],
    correct: 0
  },
  {
    id: 5,
    module: "Écosystème programmatique",
    question: "Quel rôle joue le Header Bidding par rapport au modèle traditionnel en cascade (Waterfall) ?",
    options: [
      "Il permet à plusieurs SSPs d'enchérir simultanément et équitablement avant l'appel à l'ad server primaire",
      "Il empêche les DSPs d'accéder aux cookies 1st party des éditeurs",
      "Il supprime totalement le besoin d'un ad server pour l'éditeur",
      "Il force l'achat d'espaces display uniquement en programmatique garanti"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 2 : Ciblage & audiences (5 questions)
  // ==========================================
  {
    id: 6,
    module: "Ciblage & audiences",
    question: "Dans une stratégie de prospection en haut de funnel sans cookies tiers, quel levier d'audience est le plus pertinent ?",
    options: [
      "Le ciblage contextuel sémantique avancé",
      "Le remarketing des paniers abandonnés",
      "L'exclusion des clients 1st party existants uniquement",
      "Une audience similaire basée sur la liste d'acheteurs récents via cookies tiers"
    ],
    correct: 0
  },
  {
    id: 7,
    module: "Ciblage & audiences",
    question: "Quel est l'impact direct de la configuration d'un frequency capping au niveau d'un line item en DSP ?",
    options: [
      "Restreindre le nombre d'expositions publicitaires par internaute unique sur une fenêtre de temps donnée",
      "Augmenter systématiquement l'enchère maximale en fin de journée",
      "Garantir un taux de visibilité minimum de 70% sur l'inventaire acheté",
      "Bloquer la diffusion sur les appareils mobiles connectés en Wi-Fi"
    ],
    correct: 0
  },
  {
    id: 8,
    module: "Ciblage & audiences",
    question: "Comment définit-on une audience 'First-Party' (1st party data) dans une stratégie programmatique ?",
    options: [
      "Les données collectées directement par la marque auprès de ses propres clients et visiteurs (CRM, site, app)",
      "Les segments d'audience achetés auprès de courtiers de données externes (data brokers)",
      "Les listes d'exclusion de mots-clés fournies par les régies publicitaires",
      "Les profils socio-démographiques standard modélisés par le DSP"
    ],
    correct: 0
  },
  {
    id: 9,
    module: "Ciblage & audiences",
    question: "Dans le cadre d'une campagne de remarketing dynamique, quelle condition technique est indispensable côté site annonceur ?",
    options: [
      "Avoir implémenté des balises de tracking (pixels) passant dynamiquement les identifiants de produits consultés",
      "Désactiver complètement le bandeau de consentement aux cookies (CMP)",
      "Acheter obligatoirement des deals privés avec les éditeurs média",
      "Limiter la diffusion aux formats bannières 300x250 exclusivement"
    ],
    correct: 0
  },
  {
    id: 10,
    module: "Ciblage & audiences",
    question: "Quelle est la principale caractéristique d'une modélisation d'audience de type 'Lookalike' (audience similaire) ?",
    options: [
      "Elle identifie de nouveaux profils présentant des comportements et attributs similaires à un segment source (seed)",
      "Elle cible uniquement les anciens acheteurs inactifs depuis plus de 6 mois",
      "Elle diffuse l'annonce uniquement sur les moteurs de recherche payants",
      "Elle garantit un taux de conversion 100% supérieur aux audiences socio-démographiques"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 3 : Formats & créas (5 questions)
  // ==========================================
  {
    id: 11,
    module: "Formats & créas",
    question: "Quel format publicitaire est le plus adapté pour générer de l'engagement qualifié en milieu de funnel (Considération) avec une forte immersion de marque ?",
    options: [
      "Format vidéo Outstream ou Native interactif au cœur de l'article",
      "Bannière display classique 300x250 statique en bas de page",
      "Tag d'audit invisible 1x1 d'impression",
      "Notification push sponsorisée textuelle"
    ],
    correct: 0
  },
  {
    id: 12,
    module: "Formats & créas",
    question: "Lors du contrôle qualité (QA) d'une créative HTML5 pour du Display programmatique, quelle anomalie technique justifie un refus immédiat de conformité ?",
    options: [
      "L'utilisation d'une balise clickTag codée en dur vers une URL fixe sans variable dynamique",
      "Le respect d'un poids initial compressé inférieur à 150 Ko",
      "L'intégration d'une boucle d'animation limitée à 30 secondes",
      "L'appel à des polices sécurisées hébergées en HTTPS"
    ],
    correct: 0
  },
  {
    id: 13,
    module: "Formats & créas",
    question: "Quelle est la spécificité d'une vidéo publicitaire de type 'Instream' comparée à une vidéo 'Outstream' ?",
    options: [
      "L'Instream est diffusé au sein d'un lecteur vidéo existant (Pre-roll, Mid-roll, Post-roll) avec un flux de contenu vidéo",
      "L'Instream s'insère uniquement entre deux paragraphes de texte sans flux vidéo sous-jacent",
      "L'Instream ne peut jamais être skippé par l'internaute",
      "L'Instream ne requiert aucun fichier vidéo MP4 hébergé"
    ],
    correct: 0
  },
  {
    id: 14,
    module: "Formats & créas",
    question: "Que préconisent les normes IAB / Coalition for Better Ads concernant les vidéos publicitaires sur ordinateur et mobile ?",
    options: [
      "Démarrage en autoplay sans le son (muted) avec activation manuelle par l'utilisateur",
      "Lecture automatique avec le volume sonore au niveau maximal",
      "Interdiction formelle de proposer un bouton 'Fermer' avant 30 secondes",
      "Obligation d'occuper au minimum 90% de la surface de l'écran dès l'arrivée sur la page"
    ],
    correct: 0
  },
  {
    id: 15,
    module: "Formats & créas",
    question: "Quelle dimension correspond au format standard IAB 'Megabannière' (Leaderboard) très répandu en Display desktop ?",
    options: [
      "728 x 90 pixels",
      "300 x 600 pixels",
      "300 x 250 pixels",
      "160 x 600 pixels"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 4 : Tracking & mesure (5 questions)
  // ==========================================
  {
    id: 16,
    module: "Tracking & mesure",
    question: "Quelle est la différence fondamentale entre un tag Floodlight (ad server) et un paramètre UTM standard ?",
    options: [
      "Le tag Floodlight permet la déduplication et l'attribution post-view au sein de l'ad server, contrairement à l'UTM",
      "L'UTM permet de mesurer les impressions publicitaires sans aucun clic",
      "Le Floodlight ne fonctionne que sur les campagnes payantes du Search Google",
      "L'UTM dépose un cookie tiers sécurisé sur le navigateur pour 90 jours"
    ],
    correct: 0
  },
  {
    id: 17,
    module: "Tracking & mesure",
    question: "Dans quel cas précis une conversion est-elle qualifiée d'attribution 'post-view' (ou post-impression) ?",
    options: [
      "L'internaute a été exposé à une impression publicitaire, n'a pas cliqué, mais a converti sur le site dans la fenêtre d'attribution",
      "L'internaute a cliqué sur la bannière puis a validé un achat sous 24 heures",
      "La conversion provient exclusivement d'une recherche naturelle sur Google",
      "La vidéo publicitaire a été visionnée à 100% sans générer de visite sur le site"
    ],
    correct: 0
  },
  {
    id: 18,
    module: "Tracking & mesure",
    question: "Selon la norme IAB / MRC, à quelle condition une impression Display desktop est-elle considérée comme 'visible' (Viewable) ?",
    options: [
      "Au moins 50% de la surface de la bannière est visible à l'écran pendant au moins 1 seconde continue",
      "100% de la surface est visible pendant 3 secondes consécutives",
      "La bannière a généré au moins un clic valide de la part de l'utilisateur",
      "La page a été chargée entièrement jusqu'au pied de page (footer)"
    ],
    correct: 0
  },
  {
    id: 19,
    module: "Tracking & mesure",
    question: "Quel est l'objectif principal d'un modèle d'attribution algorithmique (Data-Driven Attribution) par rapport au modèle 'Dernier Clic' (Last Interaction) ?",
    options: [
      "Répartir équitablement la valeur de la conversion entre chaque point de contact du parcours d'achat selon son influence réelle",
      "Attribuer 100% de la valeur de la vente à la toute première bannière vue",
      "Ignorer complètement les clics pour ne mesurer que les impressions d'arrière-plan",
      "Supprimer l'obligation de poser des tags de tracking sur les pages de paiement"
    ],
    correct: 0
  },
  {
    id: 20,
    module: "Tracking & mesure",
    question: "Que mesure le KPI 'VTR' (View-Through Rate) dans une campagne vidéo programmatique ?",
    options: [
      "Le ratio entre le nombre de vidéos complétées (à 100%) et le nombre d'impressions servies",
      "Le taux de clics généré par seconde de lecture",
      "Le coût moyen facturé par visiteur unique sur le site web",
      "Le pourcentage de vidéos lancées avec le son activé"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 5 : Privacy, brand safety & qualité (5 questions)
  // ==========================================
  {
    id: 21,
    module: "Privacy, brand safety & qualité",
    question: "En Europe (RGPD), quel est l'impact direct du Transparency and Consent Framework (TCF v2.2) sur la diffusion d'une campagne programmatique ?",
    options: [
      "Il conditionne la transmission de la chaîne de consentement (TC String) dans l'appel d'offre aux DSP et vendors autorisés",
      "Il impose un prix plancher fixe sur l'ensemble des enchères RTB ouvertes",
      "Il supprime automatiquement les formats publicitaires vidéo non skippables",
      "Il interdit formellement l'utilisation de tout ciblage géographique par pays"
    ],
    correct: 0
  },
  {
    id: 22,
    module: "Privacy, brand safety & qualité",
    question: "Dans le cadre de la brand safety et du filtrage d'inventaire, quelle solution permet d'éviter la diffusion sur des articles traitant de sujets sensibles ou anxiogènes ?",
    options: [
      "L'utilisation de listes d'exclusion de mots-clés sémantiques et de segments contextuels négatifs (Brand Suitability)",
      "L'augmentation du frequency capping journalier par internaute",
      "Le ciblage exclusif des réseaux sociaux privés",
      "Le passage obligatoire en enchères au second prix"
    ],
    correct: 0
  },
  {
    id: 23,
    module: "Privacy, brand safety & qualité",
    question: "Quel fichier public placé à la racine du domaine d'un éditeur (ex: site.com/ads.txt) certifie les vendeurs autorisés à commercialiser son inventaire ?",
    options: [
      "ads.txt (Authorized Digital Sellers)",
      "robots.txt",
      "sitemap.xml",
      "sellers.json"
    ],
    correct: 0
  },
  {
    id: 24,
    module: "Privacy, brand safety & qualité",
    question: "Quelle
