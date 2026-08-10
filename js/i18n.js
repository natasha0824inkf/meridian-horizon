/**
 * Meridian Horizon - Internationalisation (EN / FR)
 *
 * Preferences are saved to localStorage so they survive page navigation.
 * Keys marked with data-i18n="key" in the HTML are replaced on load.
 * Keys whose French value contains HTML tags use innerHTML; others use textContent.
 *
 * To add a new language: duplicate the 'fr' block, change the language code,
 * add a button in components.js, and add the new lang code to LANGS below.
 */

(function () {
  'use strict';

  const LANGS       = ['en', 'fr'];
  const STORAGE_KEY = 'mh-lang';
  const DEFAULT     = 'en';

  /* ================================================================
     TRANSLATIONS
     ================================================================ */
  const T = {
    fr: {
      /* --- Navigation --- */
      'nav-home':       'Accueil',
      'nav-about':      'À propos',
      'nav-services':   'Services',
      'nav-industries': 'Secteurs',
      'nav-why':        'Pourquoi nous',
      'nav-partners':   'Partenaires',
      'nav-contact':    'Contact',
      'nav-cta':        'Nous contacter',

      /* --- Footer --- */
      'footer-tagline':      'Votre partenaire de confiance pour la création d\'entreprise, la structuration corporate et le développement stratégique aux EAU et à l\'international.',
      'footer-quick-links':  'Liens rapides',
      'footer-company-col':  'Entreprise',
      'footer-contact-col':  'Contact',
      'footer-link-home':    'Accueil',
      'footer-link-about':   'À propos',
      'footer-link-services':'Services',
      'footer-link-industries':'Secteurs',
      'footer-link-why':     'Pourquoi nous',
      'footer-link-partners':'Partenaires',
      'footer-link-contact': 'Contact',

      /* --- Breadcrumbs --- */
      'bread-about':     'À propos',
      'bread-services':  'Services',
      'bread-industries':'Secteurs',
      'bread-why':       'Pourquoi nous choisir',
      'bread-partners':  'Partenaires',
      'bread-contact':   'Contact',
      'bread-privacy':   'Politique de confidentialité',
      'bread-terms':     'Conditions générales',

      /* ================================================================
         HOME PAGE
         ================================================================ */
      'home-hero-eyebrow': 'Courtage commercial &amp; conseil aux EAU',
      'home-hero-h1':      'Votre passerelle vers les affaires aux Émirats et au-delà',
      'home-hero-lead':    'Nous accompagnons entrepreneurs, PME et investisseurs internationaux dans la <strong>création d\'entreprise</strong>, la <strong>structuration corporate</strong>, les <strong>introductions bancaires</strong> et les <strong>partenariats stratégiques</strong> grâce à un réseau de professionnels de confiance.',
      'home-hero-cta1':    'Découvrir nos services',
      'home-hero-cta2':    'Nous contacter',

      'home-services-eyebrow': 'Nos prestations',
      'home-services-h2':      'Des services complets pour votre activité',
      'home-services-view-all':'Voir tous les services',

      'home-s1-title': 'Courtage commercial',
      'home-s1-desc':  'Mise en relation d\'acheteurs, vendeurs et investisseurs dans le cadre de transactions commerciales, avec discrétion et accompagnement professionnel.',
      'home-s2-title': 'Création d\'entreprise',
      'home-s2-desc':  'Accompagnement complet pour l\'établissement de sociétés sur le continent émirien, en zones franches ou à l\'international, de la sélection de la structure jusqu\'à l\'obtention de la licence.',
      'home-s3-title': 'Structuration corporate',
      'home-s3-desc':  'Conseil stratégique sur les structures de holding, les arrangements actionnariaux et les cadres de gouvernance adaptés à vos objectifs.',
      'home-s4-title': 'Introductions bancaires',
      'home-s4-desc':  'Facilitation des introductions auprès d\'établissements bancaires aux EAU et à l\'international pour l\'ouverture de comptes professionnels et personnels.',
      'home-s5-title': 'Développement international',
      'home-s5-desc':  'Expansion de votre présence commerciale vers de nouveaux marchés grâce à notre réseau mondial de conseillers et partenaires commerciaux.',
      'home-s6-title': 'Partenariats stratégiques',
      'home-s6-desc':  'Identification, structuration et facilitation d\'alliances stratégiques et de coentreprises créatrices de valeur à long terme.',

      'home-stat1-label': 'Agréé &amp; basé aux EAU',
      'home-stat2-label': 'Services principaux',
      'home-stat3-label': 'Secteurs accompagnés',
      'home-stat4-label': 'Réseau international',

      'home-about-eyebrow': 'À propos de Meridian Horizon',
      'home-about-h2':      'Un cabinet fondé sur la confiance et les relations',
      'home-about-p1':      'Meridian Horizon Commercial Brokers LLC est un cabinet de courtage commercial et de conseil aux entreprises basé aux Émirats arabes unis. Nous accompagnons entrepreneurs, PME et investisseurs internationaux dans leur développement aux EAU et à l\'international.',
      'home-about-p2':      'Notre force réside dans notre <strong>réseau</strong> — un écosystème sélectionné de professionnels du droit, de la finance, du corporate et du conseil, avec lesquels nous collaborons pour offrir un accompagnement de bout en bout à nos clients.',
      'home-v1-title':      'Une approche fondée sur la confiance',
      'home-v1-desc':       'Nous travaillons dans la durée, pas ponctuellement. Votre succès est notre engagement continu.',
      'home-v2-title':      'Discrétion professionnelle',
      'home-v2-desc':       'La confidentialité et l\'intégrité sont au cœur de chaque mission client.',
      'home-v3-title':      'Accompagnement complet',
      'home-v3-desc':       'De la consultation initiale à l\'exécution, nous vous guidons à chaque étape.',
      'home-about-cta':     'En savoir plus',

      'home-why-eyebrow': 'Nos atouts',
      'home-why-h2':      'Ce qui distingue Meridian Horizon',
      'home-f1-title':    'Réseau professionnel de confiance',
      'home-f1-desc':     'Accès à un écosystème vérifié de conseillers juridiques, bancaires, d\'auditeurs et de prestataires de services corporate aux EAU et à l\'international.',
      'home-f2-title':    'Expertise des EAU',
      'home-f2-desc':     'Connaissance approfondie et actualisée des structures continentales et des zones franches, des exigences bancaires et du cadre réglementaire — appliquée concrètement à votre situation.',
      'home-f3-title':    'Priorité aux relations',
      'home-f3-desc':     'Notre modèle repose sur des relations pérennes avec nos clients et nos partenaires. Cet alignement d\'intérêts garantit notre investissement dans les résultats, pas seulement les introductions.',
      'home-f4-title':    'Portée internationale',
      'home-f4-desc':     'Au-delà des EAU, notre réseau couvre les marchés clés à l\'international, permettant des structurations transfrontalières et des expansions ciblées.',
      'home-f5-title':    'Orienté résultats',
      'home-f5-desc':     'Notre valeur se mesure aux résultats concrets : <strong>licences obtenues</strong>, <strong>comptes ouverts</strong>, <strong>partenariats conclus</strong>, transactions finalisées.',
      'home-f6-title':    'Confidentialité totale',
      'home-f6-desc':     'Toutes les missions clients sont traitées avec le plus haut niveau de discrétion. Vos informations restent protégées tout au long de l\'engagement.',

      'home-cta-h2': 'Prêt à créer ou développer votre activité aux EAU ?',
      'home-cta-p':  'Parlez à notre équipe pour découvrir comment nous pouvons vous aider.',
      'home-cta-btn':'Nous contacter',

      /* ================================================================
         ABOUT PAGE
         ================================================================ */
      'about-hero-h1': 'À propos de Meridian Horizon',
      'about-hero-p':  'Un cabinet de courtage commercial et de conseil aux entreprises basé aux Émirats arabes unis, fondé sur des relations professionnelles et un engagement envers le succès à long terme de ses clients.',

      'about-who-eyebrow': 'Qui sommes-nous',
      'about-who-h2':      'Un partenaire de confiance pour les affaires aux EAU',
      'about-who-p1':      'Meridian Horizon Commercial Brokers LLC est un cabinet de courtage commercial et de conseil aux entreprises basé aux Émirats arabes unis. Nous accompagnons entrepreneurs, PME et investisseurs internationaux tout au long du cycle des affaires aux EAU — de la création d\'entreprise jusqu\'à la banque, la structuration, l\'approvisionnement et les partenariats stratégiques.',
      'about-who-p2':      'Notre approche est avant tout <strong>consultative</strong>. Avant de recommander une structure, une introduction ou un partenaire, nous prenons le temps de comprendre votre activité, vos objectifs et votre calendrier. Le résultat : des conseils et des connexions genuinement adaptés à votre situation.',
      'about-who-p3':      'Nous opérons via un réseau de partenaires professionnels — juristes, banquiers, comptables et spécialistes réglementaires — que nous avons sélectionnés et avec lesquels nous collaborons régulièrement. Cela nous permet d\'offrir un accompagnement de bout en bout sans jamais compromettre la qualité.',

      'about-mission-eyebrow': 'Notre mission',
      'about-mission-h2':      'Ce qui nous anime',
      'about-mission-p1':      'Être le cabinet de courtage commercial le plus fiable des EAU — celui vers lequel les entreprises et les investisseurs reviennent et qu\'ils recommandent en toute confiance, grâce à la qualité de nos introductions, à l\'intégrité de nos conseils et aux résultats que nous contribuons à créer.',
      'about-mission-p2':      'Nous croyons que les meilleures relations commerciales se fondent sur la transparence, le respect des engagements et un véritable alignement des intérêts. Chaque mission que nous prenons en charge, nous sommes prêts à la défendre.',

      'about-approach-eyebrow': 'Notre approche',
      'about-approach-h2':      'Comment nous travaillons',
      'about-v1-title':         'Écouter d\'abord',
      'about-v1-desc':          'Chaque mission commence par une compréhension approfondie de votre activité, de vos objectifs et de vos contraintes.',
      'about-v2-title':         'Conseiller concrètement',
      'about-v2-desc':          'Nos recommandations sont ancrées dans le réalisable dans le contexte des EAU — pas des scénarios idéaux théoriques.',
      'about-v3-title':         'Connecter avec discernement',
      'about-v3-desc':          'Les introductions sont faites lorsque nous sommes confiants dans l\'adéquation des deux côtés. Nous protégeons la qualité de notre réseau.',
      'about-v4-title':         'Assurer le suivi',
      'about-v4-desc':          'Nous restons disponibles et impliqués tout au long du processus, pas seulement au moment de l\'introduction.',

      'about-network-eyebrow': 'Notre force',
      'about-network-h2':      'Un réseau construit dans la durée',
      'about-network-p':       'Notre valeur pour les clients réside en grande partie dans qui nous connaissons et à quel point nous les connaissons bien. Notre réseau professionnel comprend des spécialistes juridiques, bancaires, comptables, réglementaires et consultatifs aux EAU et dans les principales juridictions internationales.',

      'about-n1-title': 'Juridique &amp; corporate',
      'about-n1-desc':  'Avocats qualifiés aux EAU et prestataires de services corporate couvrant la création d\'entreprise, les contrats, la conformité et la gouvernance d\'entreprise.',
      'about-n2-title': 'Banque &amp; finance',
      'about-n2-desc':  'Relations avec des gestionnaires de comptes dans des banques aux EAU et à l\'international, facilitant les introductions pour les besoins bancaires professionnels et personnels.',
      'about-n3-title': 'Conseil &amp; audit',
      'about-n3-desc':  'Comptables et auditeurs qualifiés disposant d\'une expertise spécifique aux EAU pour les obligations de reporting, la conformité TVA et la gouvernance.',
      'about-n4-title': 'Commerce &amp; logistique',
      'about-n4-desc':  'Agents d\'approvisionnement, transitaires et spécialistes de la facilitation des échanges pour les opérations d\'import-export aux EAU.',
      'about-n5-title': 'Partenaires internationaux',
      'about-n5-desc':  'Partenaires en développement des affaires en Europe, Asie, Afrique et CCG, permettant des introductions transfrontalières et un accompagnement à l\'entrée sur les marchés.',
      'about-n6-title': 'Immobilier &amp; licences',
      'about-n6-desc':  'Spécialistes de l\'immobilier commercial et des licences en zones franches pour les besoins d\'implantation et de locaux.',

      'about-cta-h2': 'Parlons de vos objectifs commerciaux',
      'about-cta-p':  'Contactez-nous pour organiser une consultation initiale.',

      /* ================================================================
         SERVICES PAGE
         ================================================================ */
      'services-hero-h1': 'Nos services',
      'services-hero-p':  'Une gamme complète de services de courtage commercial et de conseil, conçus pour aider entrepreneurs, PME et investisseurs internationaux à s\'établir, se structurer et se développer aux EAU et au-delà.',

      'services-s1-title': 'Courtage commercial',
      'services-s1-desc':  'Nous facilitons les transactions commerciales entre acheteurs, vendeurs, investisseurs et opérateurs. Notre rôle est d\'identifier les contreparties qualifiées, de faciliter les introductions et d\'accompagner les négociations — avec la discrétion et le professionnalisme qu\'exige le marché des EAU.',
      'services-s2-title': 'Création d\'entreprise - EAU &amp; international',
      'services-s2-desc':  'Accompagnement de bout en bout pour la création de sociétés sur le continent émirien, en zones franches ou à l\'international. Nous conseillons sur la structure la plus adaptée à votre activité, puis coordonnons l\'ensemble du processus via notre réseau de partenaires agréés — des premières approbations jusqu\'à la délivrance de la licence.',
      'services-s3-title': 'Structuration corporate',
      'services-s3-desc':  'Conseil stratégique sur la meilleure organisation de votre présence corporate — holding, entité en zone franche, couche offshore ou combinaison. Nous travaillons avec des conseillers juridiques et fiscaux qualifiés pour garantir que la structure recommandée est adaptée à votre juridiction et à vos objectifs.',
      'services-s4-title': 'Introductions bancaires',
      'services-s4-desc':  '<strong>L\'ouverture d\'un compte bancaire</strong> aux EAU est l\'un des défis les plus courants. Nous facilitons les introductions auprès de gestionnaires de comptes dans des banques locales et internationales, aidant les clients à naviguer dans les exigences et à maximiser leurs chances de succès pour les comptes professionnels et personnels.',
      'services-s5-title': 'Conseil aux entreprises',
      'services-s5-desc':  'Conseil commercial pratique pour les entreprises à différents stades — de la faisabilité pré-création aux défis opérationnels, à la stratégie de croissance et à la planification d\'entrée sur le marché. Nous nous appuyons sur notre expérience directe aux EAU pour fournir des recommandations concrètes et actionnables.',
      'services-s6-title': 'Développement international des affaires',
      'services-s6-desc':  'Pour les entreprises cherchant à se développer au-delà de leur marché actuel, nous accompagnons l\'identification des opportunités, la cartographie des voies d\'entrée et la facilitation des introductions auprès de partenaires locaux crédibles. Nous travaillons avec un réseau en Europe, Asie, Afrique et CCG.',
      'services-s7-title': 'Partenariats stratégiques',
      'services-s7-desc':  'Identifier et structurer les bonnes alliances stratégiques peut transformer une entreprise. Nous aidons les clients à définir leurs besoins, identifions des candidats adaptés et accompagnons la structuration et la documentation de l\'arrangement.',
      'services-s8-title': 'Approvisionnement &amp; facilitation des échanges',
      'services-s8-desc':  'Pour les entreprises impliquées dans le commerce de marchandises, nous assistons à l\'identification de fournisseurs, aux introductions d\'approvisionnement et à l\'accompagnement logistique. Cela inclut la mise en relation d\'acheteurs avec des fabricants, agents et distributeurs pour les opérations d\'import-export via les EAU.',
      'services-s9-title': 'Références &amp; solutions corporate',
      'services-s9-desc':  'Pour les prestataires professionnels dont les clients ont besoin d\'un accompagnement lié aux EAU, nous proposons un programme de parrainage structuré. Nous offrons également des solutions corporate pour les entreprises nécessitant un accompagnement continu ou par projet.',

      'services-cta-h2': 'Vous ne savez pas quel service vous convient ?',
      'services-cta-p':  'Contactez-nous et nous vous aiderons à identifier le bon point de départ.',
      'services-cta-btn':'Parlons-en',

      /* ================================================================
         INDUSTRIES PAGE
         ================================================================ */
      'industries-hero-h1': 'Secteurs que nous accompagnons',
      'industries-hero-p':  'Meridian Horizon intervient dans un large éventail de secteurs, apportant une connaissance pertinente du marché et des connexions professionnelles spécifiques à chaque mission.',

      'industries-eyebrow': 'Notre couverture sectorielle',
      'industries-h2':      'Où nous intervenons',

      'industries-i1-title': 'Commerce &amp; logistique',
      'industries-i1-desc':  'Accompagnement des importateurs, exportateurs, opérateurs de fret et entreprises de distribution pour la création, l\'approvisionnement et les introductions de partenaires dans le couloir commercial des EAU.',
      'industries-i2-title': 'Technologie &amp; innovation',
      'industries-i2-desc':  'Aide aux entreprises technologiques et aux startups pour l\'entrée sur le marché des EAU, la sélection de zones franches, la banque et les partenariats stratégiques avec des opérateurs régionaux.',
      'industries-i3-title': 'Immobilier &amp; construction',
      'industries-i3-desc':  'Mise en relation d\'investisseurs, promoteurs et opérateurs du marché immobilier des EAU avec le soutien juridique, financier et réglementaire pertinent.',
      'industries-i4-title': 'Services financiers',
      'industries-i4-desc':  'Accompagnement des sociétés de services financiers pour les exigences de licence aux EAU, les introductions bancaires et la structuration corporate pour les entités réglementées par le DIFC et l\'ADGM.',
      'industries-i5-title': 'Hôtellerie &amp; tourisme',
      'industries-i5-desc':  'Assistance aux investisseurs dans l\'hôtellerie, les groupes de restauration et les opérateurs touristiques pour la création, l\'obtention de licences et les introductions de partenaires aux EAU.',
      'industries-i6-title': 'Santé &amp; pharmacie',
      'industries-i6-desc':  'Accompagnement des entreprises de santé et de pharmacie pour la navigation réglementaire aux EAU, les partenariats de distribution et l\'entrée sur le marché de santé du CCG.',
      'industries-i7-title': 'Industrie &amp; manufacture',
      'industries-i7-desc':  'Mise en relation des fabricants et opérateurs industriels avec les zones industrielles des EAU, les canaux d\'approvisionnement et les partenaires de chaîne logistique pour la production et la distribution régionales.',
      'industries-i8-title': 'Services professionnels',
      'industries-i8-desc':  'Assistance aux cabinets juridiques, sociétés de conseil et entreprises d\'advisory pour l\'entrée sur le marché des EAU, les exigences réglementaires et les accords de partenariat.',

      'industries-note-eyebrow': 'Votre secteur n\'est pas listé ?',
      'industries-note-h2':      'Nous intervenons dans de nombreux secteurs',
      'industries-note-p':       'Les secteurs ci-dessus représentent nos domaines d\'intervention les plus courants, mais nos services s\'étendent à tout secteur commercial opérant aux EAU. Si votre secteur n\'est pas listé, contactez-nous pour discuter de la façon dont nous pouvons vous aider.',
      'industries-note-btn':     'Nous contacter',

      /* ================================================================
         WHY CHOOSE US PAGE
         ================================================================ */
      'why-hero-h1': 'Pourquoi Meridian Horizon',
      'why-hero-p':  'Dans un marché où les introductions et les conseils abondent, ce qui compte c\'est en qui vous pouvez avoir confiance et qui tient ses engagements. Voici ce qui nous différencie.',

      'why-d1-title': 'Réseau professionnel de confiance',
      'why-d1-desc':  'Notre réseau est construit sur des relations de travail directes — pas des annuaires ou des listes de parrainage. Chaque professionnel que nous présentons a été validé par l\'expérience, et nous restons responsables de la qualité de ces introductions.',
      'why-d2-title': 'Expertise approfondie des EAU',
      'why-d2-desc':  'Nous disposons d\'une connaissance directe et actuelle de l\'environnement des affaires aux EAU — les différences entre les zones franches, ce que les banques recherchent, où se situent les complexités réglementaires et comment les naviguer. Cela évite aux clients du temps et des erreurs coûteuses.',
      'why-d3-title': 'Priorité aux relations',
      'why-d3-desc':  'Nous n\'adoptons pas d\'approche transactionnelle. Notre modèle commercial dépend des relations à long terme — avec les clients et avec nos partenaires professionnels. Cet alignement d\'intérêts signifie que nous sommes genuinement investis dans les résultats.',
      'why-d4-title': 'Portée internationale',
      'why-d4-desc':  'Les EAU sont notre base, mais notre réseau s\'étend à l\'international. Pour les clients qui cherchent à s\'établir, à s\'approvisionner ou à s\'associer au-delà des frontières, nous avons les connexions pour faciliter ces échanges sur les marchés clés.',
      'why-d5-title': 'Orienté résultats',
      'why-d5-desc':  'Nous nous concentrons sur ce qui se concrétise réellement. Licences délivrées, comptes ouverts, partenariats noués, transactions finalisées. Notre valeur pour les clients se mesure en résultats.',
      'why-d6-title': 'Confidentialité totale',
      'why-d6-desc':  'Toutes les missions clients sont traitées avec le plus haut niveau de discrétion. Nous ne discutons pas des missions clients, ne partageons pas les informations clients et ne les utilisons à aucune autre fin. C\'est un élément fondamental de notre fonctionnement.',

      'why-diff-eyebrow': 'La différence',
      'why-diff-h2':      'Conseil d\'abord, introduction ensuite',
      'why-diff-p1':      'Beaucoup de cabinets de courtage et de conseil aux EAU opèrent sur un modèle volumique — faciliter le plus d\'introductions possible et laisser les clients gérer les suites. Nous travaillons différemment.',
      'why-diff-p2':      'Avant toute introduction, nous investissons du temps pour comprendre ce dont vous avez réellement besoin, si la contrepartie potentielle vous convient véritablement, et si le moment et le contexte sont appropriés. Cela nécessite plus de temps en amont, mais protège les deux parties et produit de meilleurs résultats.',
      'why-diff-p3':      'Cela protège également la qualité de notre réseau. Chaque introduction que nous faisons est le reflet de notre jugement. Nous le prenons au sérieux.',

      'why-how-eyebrow':  'Comment ça se passe concrètement',
      'why-how-h2':       'À quoi s\'attendre',
      'why-how-v1-title': 'Consultation initiale',
      'why-how-v1-desc':  'Nous commençons par une discussion approfondie de votre situation, de vos objectifs et de votre calendrier — sans frais et sans engagement.',
      'why-how-v2-title': 'Évaluation honnête',
      'why-how-v2-desc':  'Nous vous dirons clairement ce qui est réalisable, quel est le calendrier et en quoi consiste le processus — y compris les complications que nous anticipons.',
      'why-how-v3-title': 'Introductions ciblées',
      'why-how-v3-desc':  'Nous faisons des introductions lorsque nous sommes confiants dans l\'adéquation. Une introduction bien ciblée vaut plus que dix spéculatives.',
      'why-how-v4-title': 'Accompagnement continu',
      'why-how-v4-desc':  'Nous restons disponibles tout au long du processus. Si quelque chose change ou qu\'une complication survient, vous avez un interlocuteur qui connaît votre situation.',

      'why-cta-h2': 'Découvrez si nous sommes le bon partenaire pour vous',
      'why-cta-p':  'Une consultation initiale est gratuite, confidentielle et sans engagement.',
      'why-cta-btn':'Prendre rendez-vous',

      /* ================================================================
         PARTNERS PAGE
         ================================================================ */
      'partners-hero-h1': 'Notre réseau de partenaires',
      'partners-hero-p':  'La force de Meridian Horizon réside dans la profondeur et la qualité de nos relations professionnelles. Notre réseau est fondé sur la confiance, une sélection rigoureuse et des années de collaboration directe.',

      'partners-eyebrow': 'Notre réseau',
      'partners-h2':      'Partenaires professionnels dans les disciplines clés',
      'partners-intro':   'Nous maintenons des relations de travail actives avec des professionnels vérifiés dans chaque discipline dont nos clients peuvent avoir besoin. Ce ne sont pas des listes de parrainage — ce sont des partenaires avec lesquels nous travaillons régulièrement et pour lesquels nous pouvons répondre.',

      'partners-c1-label': 'Juridique &amp; corporate',
      'partners-c1-title': 'Conseil juridique',
      'partners-c1-desc':  'Avocats qualifiés aux EAU couvrant le droit des sociétés, les contrats commerciaux, la conformité réglementaire et la résolution des litiges pour les entreprises opérant aux EAU.',
      'partners-c2-label': 'Financier',
      'partners-c2-title': 'Banque &amp; finance',
      'partners-c2-desc':  'Gestionnaires de comptes dans des banques aux EAU et à l\'international, ainsi que des prestataires de financement alternatif, facilitant les introductions bancaires corporate et personnelles.',
      'partners-c3-label': 'Conformité',
      'partners-c3-title': 'Comptabilité &amp; audit',
      'partners-c3-desc':  'Comptables et auditeurs qualifiés fournissant des rapports financiers conformes aux EAU, la conformité TVA, le conseil fiscal et le soutien à la gouvernance d\'entreprise.',
      'partners-c4-label': 'Création',
      'partners-c4-title': 'Services corporate',
      'partners-c4-desc':  'Prestataires de services corporate agréés gérant l\'incorporation, le siège social enregistré, les services PRO et les exigences de conformité continues dans les différentes juridictions des EAU.',
      'partners-c5-label': 'Commerce',
      'partners-c5-title': 'Approvisionnement &amp; logistique',
      'partners-c5-desc':  'Agents d\'approvisionnement, transitaires et spécialistes de la facilitation des échanges pour les opérations d\'import-export aux EAU et depuis les EAU.',
      'partners-c6-label': 'International',
      'partners-c6-title': 'Partenaires conseil internationaux',
      'partners-c6-desc':  'Partenaires en développement des affaires et conseil en Europe, Asie, Afrique et CCG, permettant des introductions transfrontalières et un accompagnement à l\'entrée sur les marchés.',

      'partners-join-eyebrow': 'Rejoindre notre réseau',
      'partners-join-h2':      'Devenir partenaire Meridian Horizon',
      'partners-join-p1':      'Si vous êtes un prestataire de services professionnels, un conseiller d\'affaires ou un opérateur commercial souhaitant collaborer sur des missions clients, nous serions heureux d\'explorer un partenariat.',
      'partners-join-p2':      'Nous travaillons avec les partenaires sur la base de parrainage et de collaboration, et sommes sélectifs quant aux personnes que nous intégrons dans notre réseau. La qualité de la relation compte plus que le volume.',
      'partners-join-btn1':    'Exprimer votre intérêt',
      'partners-join-btn2':    'En savoir plus',

      'partners-note-eyebrow': 'Une note sur la discrétion',
      'partners-note-h2':      'Nous ne publions pas la liste de nos partenaires',
      'partners-note-p':       'Par respect pour les relations de travail que nous entretenons et pour la confidentialité attendue par nos clients, nous ne publions pas de liste nommée de cabinets ou d\'individus partenaires. Notre réseau est présenté au cas par cas, adapté aux besoins spécifiques de chaque client.',

      /* ================================================================
         CONTACT PAGE
         ================================================================ */
      'contact-hero-h1': 'Nous contacter',
      'contact-hero-p':  'Nous accueillons volontiers les demandes des entrepreneurs, investisseurs et partenaires professionnels. Toutes les consultations initiales sont confidentielles et sans engagement.',

      'contact-form-eyebrow': 'Envoyez-nous un message',
      'contact-form-h2':      'Formulaire de contact',
      'contact-label-name':   'Nom complet',
      'contact-ph-name':      'Votre nom complet',
      'contact-label-email':  'Adresse e-mail',
      'contact-ph-email':     'votre@email.com',
      'contact-label-phone':  'Téléphone / WhatsApp',
      'contact-label-subject':'Sujet',
      'contact-subj-default': 'Sélectionner un sujet',
      'contact-subj-1':       'Création d\'entreprise',
      'contact-subj-2':       'Structuration corporate',
      'contact-subj-3':       'Introduction bancaire',
      'contact-subj-4':       'Conseil aux entreprises',
      'contact-subj-5':       'Partenariat stratégique',
      'contact-subj-6':       'Approvisionnement &amp; commerce',
      'contact-subj-7':       'Demande de partenariat',
      'contact-subj-8':       'Autre',
      'contact-label-message':'Message',
      'contact-ph-message':   'Parlez-nous de votre activité et de la façon dont nous pouvons vous aider...',
      'contact-submit':       'Envoyer le message',
      'contact-privacy':      'Vos informations sont traitées conformément à notre politique de confidentialité. Nous ne partageons pas vos coordonnées avec des tiers.',

      'contact-info-eyebrow': 'Contact direct',
      'contact-info-h2':      'Nous rejoindre directement',
      'contact-label-ph-ci':  'Téléphone',
      'contact-label-wa':     'WhatsApp',
      'contact-label-email-ci':'E-mail',
      'contact-label-loc':    'Localisation',
      'contact-loc-val':      'Dubaï, Émirats arabes unis',

      'contact-wa-title': 'Vous préférez WhatsApp ?',
      'contact-wa-desc':  'La plupart de nos clients trouvent plus simple de nous contacter via WhatsApp. Envoyez-nous un message et nous vous répondrons rapidement.',
      'contact-wa-btn':   'Nous écrire sur WhatsApp',
    }
  };

  /* ================================================================
     ENGINE
     ================================================================ */

  function hasHtml(str) {
    return /<[a-z][\s\S]*>/i.test(str) || /&[a-z#][a-z0-9]*;/i.test(str);
  }

  var _enCache = null;

  function cacheEN() {
    if (_enCache) return;
    _enCache = {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        _enCache[key] = { type: 'placeholder', val: el.placeholder };
      } else if (el.tagName === 'OPTION') {
        _enCache[key] = { type: 'text', val: el.textContent };
      } else {
        _enCache[key] = { type: 'html', val: el.innerHTML };
      }
    });
  }

  function apply(lang) {
    cacheEN();
    if (lang === DEFAULT) {
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        var c = _enCache[key];
        if (!c) return;
        if (c.type === 'placeholder') { el.placeholder = c.val; }
        else if (c.type === 'text')   { el.textContent = c.val; }
        else                          { el.innerHTML = c.val; }
      });
      document.documentElement.lang = 'en';
      updateBtn('en');
      return;
    }
    var t = T[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!t[key]) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = t[key];
      } else if (hasHtml(t[key])) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });
    document.documentElement.lang = lang;
    updateBtn(lang);
  }

  function updateBtn(lang) {
    var enOpt = document.querySelector('#lang-btn .ls-en');
    var frOpt = document.querySelector('#lang-btn .ls-fr');
    if (enOpt && frOpt) {
      if (lang === 'fr') {
        frOpt.classList.add('ls-active');
        enOpt.classList.remove('ls-active');
      } else {
        enOpt.classList.add('ls-active');
        frOpt.classList.remove('ls-active');
      }
    }
    var btn = document.getElementById('lang-btn');
    if (btn) btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  }

  function currentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT;
  }

  function toggle() {
    const next = currentLang() === 'fr' ? 'en' : 'fr';
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }

  /* ================================================================
     THEME (DARK / LIGHT)
     ================================================================ */

  const THEME_KEY = 'mh-theme';

  function currentTheme() {
    return localStorage.getItem(THEME_KEY) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-btn');
    if (!btn) return;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function toggleTheme() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  /* ================================================================
     INIT
     ================================================================ */

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(currentTheme());

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    apply(currentLang());

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.addEventListener('click', toggle);
  });

})();
