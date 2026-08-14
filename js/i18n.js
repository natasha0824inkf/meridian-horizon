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

  const LANGS       = ['en', 'fr', 'ar'];
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
      'nav-insights':   'Blog',
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
      'footer-link-insights':'Blog',
      'footer-link-why':     'Pourquoi nous',
      'footer-link-partners':'Partenaires',
      'footer-link-contact': 'Contact',

      /* --- Breadcrumbs --- */
      'bread-about':     'À propos',
      'bread-services':  'Services',
      'bread-industries':'Secteurs',
      'bread-why':       'Pourquoi nous choisir',
      'bread-partners':  'Partenaires',
      'bread-insights':  'Blog',
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
      'why-d1-desc':  'Notre réseau est construit sur des <strong>relations de travail directes</strong> — pas des annuaires ou des listes de parrainage. Chaque professionnel que nous présentons a été <strong>validé par l\'expérience</strong>, et nous restons responsables de la qualité de ces introductions.',
      'why-d2-title': 'Expertise approfondie des EAU',
      'why-d2-desc':  'Nous disposons d\'une <strong>connaissance directe et actuelle</strong> de l\'environnement des affaires aux EAU — les différences entre les zones franches, ce que les banques recherchent, où se situent les complexités réglementaires et <strong>comment les naviguer</strong>. Cela évite aux clients du temps et des erreurs coûteuses.',
      'why-d3-title': 'Priorité aux relations',
      'why-d3-desc':  'Nous n\'adoptons pas d\'approche transactionnelle. Notre modèle commercial dépend des <strong>relations à long terme</strong> — avec les clients et avec nos partenaires professionnels. Cet alignement d\'intérêts signifie que nous sommes <strong>genuinement investis dans les résultats</strong>.',
      'why-d4-title': 'Portée internationale',
      'why-d4-desc':  'Les EAU sont notre base, mais notre réseau s\'étend à l\'international. Pour les clients qui cherchent à s\'établir, à s\'approvisionner ou à s\'associer au-delà des frontières, nous avons les connexions pour faciliter ces échanges sur les marchés clés.',
      'why-d5-title': 'Orienté résultats',
      'why-d5-desc':  'Nous nous concentrons sur ce qui se concrétise réellement. <strong>Licences délivrées</strong>, <strong>comptes ouverts</strong>, <strong>partenariats noués</strong>, transactions finalisées. Notre valeur pour les clients se mesure en résultats.',
      'why-d6-title': 'Confidentialité totale',
      'why-d6-desc':  'Toutes les missions clients sont traitées avec le <strong>plus haut niveau de discrétion</strong>. Nous ne discutons pas des missions clients, ne partageons pas les informations clients et ne les utilisons à aucune autre fin. C\'est un <strong>élément fondamental de notre fonctionnement</strong>.',

      'why-diff-eyebrow': 'La différence',
      'why-diff-h2':      'Conseil d\'abord, introduction ensuite',
      'why-diff-p1':      'Beaucoup de cabinets de courtage et de conseil aux EAU opèrent sur un <strong>modèle volumique</strong> — faciliter le plus d\'introductions possible et laisser les clients gérer les suites. Nous travaillons différemment.',
      'why-diff-p2':      'Avant toute introduction, nous investissons du temps pour comprendre <strong>ce dont vous avez réellement besoin</strong>, si la contrepartie potentielle vous convient véritablement, et si le moment et le contexte sont appropriés. Cela nécessite plus de temps en amont, mais <strong>protège les deux parties</strong> et produit de meilleurs résultats.',
      'why-diff-p3':      'Cela protège également la qualité de notre réseau. Chaque introduction que nous faisons est <strong>le reflet de notre jugement</strong>. Nous le prenons au sérieux.',

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

      /* ================================================================
         INSIGHTS / BLOG
         ================================================================ */
      'blog-hero-h1':    'Actualités &amp; Ressources',
      'blog-hero-p':     'Perspectives pratiques sur la création d\'entreprise aux EAU, les exigences bancaires, la structuration corporate et le développement commercial international.',
      'blog-eyebrow':    'Nos articles',
      'blog-h2':         'Dernières publications',
      'blog-cta-h2':     'Une question sur la création d\'entreprise aux EAU ?',
      'blog-cta-p':      'Notre équipe est disponible pour une consultation initiale confidentielle et sans engagement.',
      'blog-cta-btn':    'Nous contacter',

      /* --- Home inline CTAs --- */
      'home-f1-cta': 'Notre réseau de partenaires',
      'home-f2-cta': 'Guide : continent vs zone franche',
      'home-f3-cta': 'Comment nous travaillons',
      'home-f4-cta': 'Les secteurs que nous accompagnons',
      'home-f5-cta': 'Notre offre complète de services',
      'home-f6-cta': 'Pourquoi nous choisir',

      /* --- UAE stats band --- */
      'home-stat-zones':      'Zones franches aux EAU',
      'home-stat-ownership':  'Propriété étrangère à 100%',
      'home-stat-tax-treaty': 'Pays avec traité fiscal',
      'home-stat-corp-tax':   'Taux d\'imposition des sociétés',
    },

    ar: {
      /* --- Navigation --- */
      'nav-home':       'الرئيسية',
      'nav-about':      'من نحن',
      'nav-services':   'خدماتنا',
      'nav-industries': 'القطاعات',
      'nav-why':        'لماذا نحن',
      'nav-partners':   'شركاؤنا',
      'nav-insights':   'المدونة',
      'nav-contact':    'اتصل بنا',
      'nav-cta':        'تواصل معنا',

      /* --- Footer --- */
      'footer-tagline':        'شريكك الموثوق لتأسيس الشركات والهيكلة المؤسسية والتطوير التجاري الاستراتيجي في الإمارات وعلى المستوى الدولي.',
      'footer-quick-links':    'روابط سريعة',
      'footer-company-col':    'الشركة',
      'footer-contact-col':    'التواصل',
      'footer-link-home':      'الرئيسية',
      'footer-link-about':     'من نحن',
      'footer-link-services':  'خدماتنا',
      'footer-link-industries':'القطاعات',
      'footer-link-insights':  'المدونة',
      'footer-link-why':       'لماذا نحن',
      'footer-link-partners':  'شركاؤنا',
      'footer-link-contact':   'اتصل بنا',

      /* --- Breadcrumbs --- */
      'bread-about':     'من نحن',
      'bread-services':  'الخدمات',
      'bread-industries':'القطاعات',
      'bread-why':       'لماذا نحن',
      'bread-partners':  'الشركاء',
      'bread-insights':  'المدونة',
      'bread-contact':   'اتصل بنا',
      'bread-privacy':   'سياسة الخصوصية',
      'bread-terms':     'الشروط والأحكام',

      /* ================================================================
         HOME PAGE
         ================================================================ */
      'home-hero-eyebrow': 'وساطة تجارية ومشورة في الإمارات العربية المتحدة',
      'home-hero-h1':      'بوابتك للأعمال في الإمارات وما وراءها',
      'home-hero-lead':    'نساعد رواد الأعمال والشركات الصغيرة والمتوسطة والمستثمرين الدوليين في <strong>تأسيس الشركات</strong> و<strong>الهيكلة المؤسسية</strong> و<strong>التمهيد البنكي</strong> و<strong>الشراكات الاستراتيجية</strong> من خلال شبكة من المختصين الموثوقين.',
      'home-hero-cta1':    'اكتشف خدماتنا',
      'home-hero-cta2':    'تواصل معنا',

      'home-services-eyebrow': 'ما نقدمه',
      'home-services-h2':      'خدمات شاملة لأعمالك',
      'home-services-view-all':'جميع الخدمات',

      'home-s1-title': 'الوساطة التجارية',
      'home-s1-desc':  'ربط المشترين والبائعين والمستثمرين في إطار الصفقات التجارية بسرية تامة ومرافقة مهنية.',
      'home-s2-title': 'تأسيس الشركات',
      'home-s2-desc':  'مرافقة شاملة لإنشاء الشركات في البر الرئيسي الإماراتي أو المناطق الحرة أو على المستوى الدولي، من اختيار الهيكل المناسب حتى الحصول على الترخيص.',
      'home-s3-title': 'الهيكلة المؤسسية',
      'home-s3-desc':  'مشورة استراتيجية حول هياكل الشركات القابضة وترتيبات المساهمين وأطر الحوكمة الملائمة لأهدافك.',
      'home-s4-title': 'التمهيد البنكي',
      'home-s4-desc':  'تيسير التواصل مع المسؤولين في البنوك الإماراتية والدولية لفتح الحسابات التجارية والشخصية.',
      'home-s5-title': 'التطوير الدولي',
      'home-s5-desc':  'توسيع حضورك التجاري نحو أسواق جديدة عبر شبكتنا العالمية من المستشارين والشركاء التجاريين.',
      'home-s6-title': 'الشراكات الاستراتيجية',
      'home-s6-desc':  'تحديد وهيكلة وتيسير التحالفات الاستراتيجية والمشاريع المشتركة التي تضيف قيمة على المدى الطويل.',

      'home-stat1-label': 'مرخص ومقيم في الإمارات',
      'home-stat2-label': 'خدمات رئيسية',
      'home-stat3-label': 'قطاعات مدعومة',
      'home-stat4-label': 'شبكة دولية',

      'home-about-eyebrow': 'عن ميريديان هورايزون',
      'home-about-h2':      'شركة مبنية على الثقة والعلاقات',
      'home-about-p1':      'ميريديان هورايزون للوساطة التجارية ش.ذ.م.م شركة وساطة تجارية ومشورة أعمال مقرها الإمارات. نرافق رواد الأعمال والشركات الصغيرة والمتوسطة والمستثمرين الدوليين في مسيرتهم التجارية بالإمارات وخارجها.',
      'home-about-p2':      'قوتنا تكمن في <strong>شبكتنا</strong> — نظام بيئي مُختار من المختصين في القانون والتمويل والشؤون المؤسسية والاستشارات، نتعاون معهم لتقديم مرافقة متكاملة.',
      'home-v1-title':      'نهج قائم على الثقة',
      'home-v1-desc':       'نعمل على المدى الطويل لا بصفة عرضية. نجاحك هو التزامنا المستمر.',
      'home-v2-title':      'السرية المهنية',
      'home-v2-desc':       'السرية والنزاهة في صميم كل مهمة نقوم بها.',
      'home-v3-title':      'مرافقة شاملة',
      'home-v3-desc':       'من الاستشارة الأولى حتى التنفيذ، نرشدك في كل خطوة.',
      'home-about-cta':     'اعرف أكثر',

      'home-why-eyebrow': 'مزايانا',
      'home-why-h2':      'ما يميز ميريديان هورايزون',
      'home-f1-title':    'شبكة مهنية موثوقة',
      'home-f1-desc':     'الوصول إلى منظومة مُختارة من المستشارين القانونيين والبنكيين والمدققين ومزودي الخدمات المؤسسية في الإمارات وخارجها.',
      'home-f2-title':    'خبرة متعمقة في الإمارات',
      'home-f2-desc':     'معرفة دقيقة ومحدثة بالبنية القانونية للبر الرئيسي والمناطق الحرة، ومتطلبات البنوك، والإطار التنظيمي — مطبقة عملياً على وضعك.',
      'home-f3-title':    'أولوية للعلاقات',
      'home-f3-desc':     'نموذجنا مبني على علاقات طويلة الأمد مع العملاء والشركاء. هذا التوافق في المصالح يضمن انخراطنا الحقيقي في النتائج.',
      'home-f4-title':    'انتشار دولي',
      'home-f4-desc':     'ما وراء الإمارات، تمتد شبكتنا إلى أسواق دولية رئيسية، مما يمكّن من هياكل عابرة للحدود وتوسعات موجهة.',
      'home-f5-title':    'موجه نحو النتائج',
      'home-f5-desc':     'قيمتنا تقاس بنتائج ملموسة: <strong>تراخيص مُنجزة</strong>، <strong>حسابات مفتوحة</strong>، <strong>شراكات مبرمة</strong>، صفقات مكتملة.',
      'home-f6-title':    'سرية تامة',
      'home-f6-desc':     'تُعالَج جميع مهام العملاء بأعلى مستوى من السرية. معلوماتك محمية طوال فترة التعاون.',

      'home-cta-h2': 'مستعد لإنشاء أو تطوير أعمالك في الإمارات؟',
      'home-cta-p':  'تحدث مع فريقنا لمعرفة كيف يمكننا مساعدتك.',
      'home-cta-btn':'تواصل معنا',

      /* ================================================================
         ABOUT PAGE
         ================================================================ */
      'about-hero-h1': 'عن ميريديان هورايزون',
      'about-hero-p':  'شركة وساطة تجارية ومشورة أعمال مقرها الإمارات، مبنية على العلاقات المهنية والالتزام بالنجاح البعيد المدى لعملائها.',

      'about-who-eyebrow': 'من نحن',
      'about-who-h2':      'شريك موثوق للأعمال في الإمارات',
      'about-who-p1':      'ميريديان هورايزون للوساطة التجارية ش.ذ.م.م شركة وساطة تجارية ومشورة أعمال مقرها الإمارات. نرافق رواد الأعمال والشركات الصغيرة والمتوسطة والمستثمرين الدوليين في دورة حياة الأعمال بالإمارات كاملة — من التأسيس حتى البنكية والهيكلة والتوريد والشراكات الاستراتيجية.',
      'about-who-p2':      'نهجنا استشاري في المقام الأول. قبل أن نوصي بأي هيكل أو تمهيد أو شريك، نخصص وقتاً لفهم أعمالك وأهدافك وجدولك الزمني. النتيجة: مشورة وتواصل مصممان فعلاً لوضعك.',
      'about-who-p3':      'نعمل عبر شبكة من الشركاء المهنيين — محامين وبنكيين ومحاسبين ومختصين تنظيميين — قمنا بانتقائهم ونتعاون معهم بانتظام، مما يتيح تقديم مرافقة شاملة دون المساس بالجودة.',

      'about-mission-eyebrow': 'مهمتنا',
      'about-mission-h2':      'ما يحركنا',
      'about-mission-p1':      'أن نكون شركة الوساطة التجارية الأكثر ثقة في الإمارات — تلك التي تعود إليها الأعمال والمستثمرون ويوصون بها بكل ثقة، بفضل جودة تواصلنا ونزاهة مشورتنا والنتائج التي نساهم في تحقيقها.',
      'about-mission-p2':      'نؤمن بأن أفضل علاقات العمل تُبنى على الشفافية والوفاء بالالتزامات والتوافق الحقيقي في المصالح. كل مهمة نتولاها، نكون مستعدين للدفاع عنها.',

      'about-approach-eyebrow': 'نهجنا',
      'about-approach-h2':      'كيف نعمل',
      'about-v1-title':         'الاستماع أولاً',
      'about-v1-desc':          'كل مهمة تبدأ بفهم عميق لأعمالك وأهدافك وقيودك.',
      'about-v2-title':         'مشورة عملية',
      'about-v2-desc':          'توصياتنا متجذرة في ما هو قابل للتحقيق في سياق الإمارات، لا في سيناريوهات مثالية نظرية.',
      'about-v3-title':         'تواصل بصيرة',
      'about-v3-desc':          'نجري التواصلات حين نكون واثقين من الملاءمة من الجانبين. نحرص على جودة شبكتنا.',
      'about-v4-title':         'المتابعة المستمرة',
      'about-v4-desc':          'نبقى متاحين ومنخرطين طوال العملية، ليس فقط لحظة التواصل.',

      'about-network-eyebrow': 'قوتنا',
      'about-network-h2':      'شبكة مبنية على مدى السنين',
      'about-network-p':       'قيمتنا للعملاء تكمن إلى حد بعيد في من نعرفه ومدى عمق تلك المعرفة. تضم شبكتنا متخصصين في القانون والبنكية والمحاسبة والتنظيم والاستشارة في الإمارات وأهم الولايات القضائية الدولية.',

      'about-n1-title': 'قانوني &amp; مؤسسي',
      'about-n1-desc':  'محامون مؤهلون في الإمارات ومزودو خدمات مؤسسية يشمل عملهم تأسيس الشركات والعقود والامتثال والحوكمة المؤسسية.',
      'about-n2-title': 'بنكي &amp; تمويلي',
      'about-n2-desc':  'علاقات مع مسؤولي حسابات في بنوك إماراتية ودولية لتيسير التمهيد البنكي للاحتياجات التجارية والشخصية.',
      'about-n3-title': 'استشاري &amp; تدقيق',
      'about-n3-desc':  'محاسبون ومدققون مؤهلون بخبرة إماراتية متخصصة في التقارير المالية وامتثال ضريبة القيمة المضافة والحوكمة.',
      'about-n4-title': 'تجارة &amp; لوجستيات',
      'about-n4-desc':  'وكلاء توريد ومتخصصون في الشحن وتيسير التجارة لعمليات الاستيراد والتصدير من وإلى الإمارات.',
      'about-n5-title': 'شركاء دوليون',
      'about-n5-desc':  'شركاء في تطوير الأعمال في أوروبا وآسيا وأفريقيا ودول الخليج لتيسير التواصل العابر للحدود ودعم الدخول إلى الأسواق.',
      'about-n6-title': 'عقارات &amp; تراخيص',
      'about-n6-desc':  'متخصصون في العقارات التجارية وتراخيص المناطق الحرة لاحتياجات التأسيس والمكاتب.',

      'about-cta-h2': 'لنتحدث عن أهدافك التجارية',
      'about-cta-p':  'تواصل معنا لترتيب استشارة أولية.',

      /* ================================================================
         SERVICES PAGE
         ================================================================ */
      'services-hero-h1': 'خدماتنا',
      'services-hero-p':  'مجموعة شاملة من خدمات الوساطة التجارية والمشورة، مصممة لمساعدة رواد الأعمال والشركات الصغيرة والمتوسطة والمستثمرين الدوليين على التأسيس والهيكلة والنمو في الإمارات وما وراءها.',

      'services-s1-title': 'الوساطة التجارية',
      'services-s1-desc':  'نيسّر المعاملات التجارية بين المشترين والبائعين والمستثمرين والمشغلين. دورنا تحديد الأطراف المؤهلة وتيسير التواصل ومصاحبة التفاوض بالسرية والمهنية التي يتطلبها سوق الإمارات.',
      'services-s2-title': 'تأسيس الشركات - الإمارات والدولي',
      'services-s2-desc':  'مرافقة شاملة لتأسيس الشركات في البر الرئيسي أو المناطق الحرة أو خارج الإمارات. نقدم المشورة حول الهيكل الأنسب لنشاطك ثم ننسق العملية كاملة عبر شركائنا المعتمدين.',
      'services-s3-title': 'الهيكلة المؤسسية',
      'services-s3-desc':  'مشورة استراتيجية حول أفضل تنظيم لحضورك المؤسسي — قابضة أو منطقة حرة أو طبقة خارجية أو مزيج منها. نعمل مع مستشارين قانونيين وضريبيين مؤهلين لضمان ملاءمة الهيكل لأهدافك.',
      'services-s4-title': 'التمهيد البنكي',
      'services-s4-desc':  '<strong>فتح حساب بنكي</strong> في الإمارات أحد أبرز التحديات الشائعة. نيسّر التواصل مع مسؤولي الحسابات في البنوك المحلية والدولية لمساعدة العملاء على التعامل مع المتطلبات وتعظيم فرص النجاح.',
      'services-s5-title': 'مشورة الأعمال',
      'services-s5-desc':  'مشورة تجارية عملية للأعمال في مراحل مختلفة — من دراسة الجدوى قبل التأسيس إلى التحديات التشغيلية واستراتيجية النمو وتخطيط دخول السوق.',
      'services-s6-title': 'تطوير الأعمال الدولية',
      'services-s6-desc':  'للأعمال الراغبة في التوسع خارج سوقها الراهن، نساعد في تحديد الفرص ورسم مسارات الدخول وتيسير التواصل مع شركاء محليين موثوقين عبر أوروبا وآسيا وأفريقيا ودول الخليج.',
      'services-s7-title': 'الشراكات الاستراتيجية',
      'services-s7-desc':  'تحديد وهيكلة التحالفات الاستراتيجية المناسبة قد يغيّر مسار الأعمال. نساعد العملاء على تحديد احتياجاتهم والمرشحين المناسبين ومصاحبة هيكلة الاتفاقية وتوثيقها.',
      'services-s8-title': 'التوريد &amp; تيسير التجارة',
      'services-s8-desc':  'للأعمال المنخرطة في تجارة السلع، نساعد في تحديد الموردين وتواصلات التوريد والدعم اللوجستي لعمليات الاستيراد والتصدير عبر الإمارات.',
      'services-s9-title': 'الإحالات &amp; الحلول المؤسسية',
      'services-s9-desc':  'لمزودي الخدمات المهنية الذين يحتاج عملاؤهم إلى دعم متعلق بالإمارات، نقدم برنامج إحالة منظم. كما نقدم حلولاً مؤسسية للأعمال التي تحتاج إلى دعم مستمر.',

      'services-cta-h2': 'لا تعرف أي الخدمات يناسبك؟',
      'services-cta-p':  'تواصل معنا وسنساعدك في تحديد نقطة الانطلاق المناسبة.',
      'services-cta-btn':'لنتحدث',

      /* ================================================================
         INDUSTRIES PAGE
         ================================================================ */
      'industries-hero-h1': 'القطاعات التي ندعمها',
      'industries-hero-p':  'تتدخل ميريديان هورايزون في طيف واسع من القطاعات موفرةً معرفة سوقية ذات صلة وتواصلات مهنية متخصصة لكل مهمة.',

      'industries-eyebrow': 'تغطيتنا القطاعية',
      'industries-h2':      'أين نتدخل',

      'industries-i1-title': 'التجارة &amp; اللوجستيات',
      'industries-i1-desc':  'دعم المستوردين والمصدرين ومشغلي الشحن وشركات التوزيع في التأسيس والتوريد وتواصلات الشركاء في ممر التجارة الإماراتي.',
      'industries-i2-title': 'التكنولوجيا &amp; الابتكار',
      'industries-i2-desc':  'مساعدة شركات التكنولوجيا والشركات الناشئة على الدخول إلى سوق الإمارات واختيار المناطق الحرة والبنكية والشراكات الاستراتيجية مع مشغلين إقليميين.',
      'industries-i3-title': 'العقارات &amp; البناء',
      'industries-i3-desc':  'ربط المستثمرين والمطورين والمشغلين في سوق العقارات الإماراتي بالدعم القانوني والمالي والتنظيمي المناسب.',
      'industries-i4-title': 'الخدمات المالية',
      'industries-i4-desc':  'مرافقة شركات الخدمات المالية في متطلبات الترخيص بالإمارات والتمهيد البنكي والهيكلة المؤسسية للكيانات المنظمة من قِبَل مركز دبي المالي العالمي وسوق أبوظبي العالمي.',
      'industries-i5-title': 'الضيافة &amp; السياحة',
      'industries-i5-desc':  'مساعدة المستثمرين في الفنادق ومجموعات المطاعم ومشغلي السياحة في التأسيس والترخيص وتواصلات الشركاء بالإمارات.',
      'industries-i6-title': 'الصحة &amp; الصيدلة',
      'industries-i6-desc':  'مرافقة شركات الصحة والصيدلة في التعامل مع المتطلبات التنظيمية بالإمارات وشراكات التوزيع والدخول إلى سوق الرعاية الصحية في دول الخليج.',
      'industries-i7-title': 'الصناعة &amp; التصنيع',
      'industries-i7-desc':  'ربط المصنعين والمشغلين الصناعيين بالمناطق الصناعية الإماراتية وقنوات التوريد وشركاء سلسلة التوريد للإنتاج والتوزيع الإقليمي.',
      'industries-i8-title': 'الخدمات المهنية',
      'industries-i8-desc':  'مساعدة المكاتب القانونية وشركات الاستشارة وأعمال المشورة على الدخول إلى سوق الإمارات والمتطلبات التنظيمية واتفاقيات الشراكة.',

      'industries-note-eyebrow': 'قطاعك غير مدرج؟',
      'industries-note-h2':      'نتدخل في قطاعات عديدة',
      'industries-note-p':       'القطاعات أعلاه تمثل مجالات تدخلنا الأكثر شيوعاً، غير أن خدماتنا تمتد لكل قطاع تجاري يعمل في الإمارات. تواصل معنا لنناقش كيف يمكننا مساعدتك.',
      'industries-note-btn':     'تواصل معنا',

      /* ================================================================
         WHY CHOOSE US PAGE
         ================================================================ */
      'why-hero-h1': 'لماذا ميريديان هورايزون',
      'why-hero-p':  'في سوق تتوفر فيه التواصلات والمشورة بوفرة، ما يهم هو من يمكنك الوثوق به ومن يفي بالتزاماته. إليك ما يميزنا.',

      'why-d1-title': 'شبكة مهنية موثوقة',
      'why-d1-desc':  'شبكتنا مبنية على <strong>علاقات عمل مباشرة</strong> لا دلائل أو قوائم إحالة. كل محترف نقدمه تم <strong>اختباره بالتجربة</strong>، ونبقى مسؤولين عن جودة تلك التواصلات.',
      'why-d2-title': 'خبرة متعمقة بالإمارات',
      'why-d2-desc':  'نمتلك <strong>معرفة مباشرة وحديثة</strong> ببيئة الأعمال الإماراتية — الفوارق بين المناطق الحرة وما تبحث عنه البنوك وأين تكمن التعقيدات التنظيمية و<strong>كيفية التعامل معها</strong>.',
      'why-d3-title': 'أولوية للعلاقات',
      'why-d3-desc':  'لا نتبع النهج المعاملاتي. نموذجنا يعتمد على <strong>علاقات طويلة الأمد</strong> مع العملاء والشركاء. هذا التوافق في المصالح يعني أننا <strong>منخرطون فعلاً في النتائج</strong>.',
      'why-d4-title': 'انتشار دولي',
      'why-d4-desc':  'الإمارات قاعدتنا لكن شبكتنا تمتد دولياً. للعملاء الراغبين في التأسيس أو التوريد أو الشراكة عبر الحدود، لدينا التواصلات اللازمة في الأسواق الرئيسية.',
      'why-d5-title': 'موجه نحو النتائج',
      'why-d5-desc':  'نركز على ما يتحقق فعلاً. <strong>تراخيص صادرة</strong>، <strong>حسابات مفتوحة</strong>، <strong>شراكات مبرمة</strong>، صفقات مكتملة. قيمتنا للعملاء تقاس بالنتائج.',
      'why-d6-title': 'سرية تامة',
      'why-d6-desc':  'جميع مهام العملاء تُعالَج بأعلى مستوى <strong>من السرية</strong>. لا نناقش مهام العملاء ولا نتشارك معلوماتهم. هذا <strong>ركيزة أساسية في أسلوب عملنا</strong>.',

      'why-diff-eyebrow': 'الفارق',
      'why-diff-h2':      'المشورة أولاً، التواصل لاحقاً',
      'why-diff-p1':      'كثير من شركات الوساطة في الإمارات تعمل على <strong>نموذج الحجم</strong> — تيسير أكبر عدد ممكن من التواصلات وإبقاء العملاء يديرون ما بعدها. نحن نعمل بشكل مختلف.',
      'why-diff-p2':      'قبل أي تواصل، نستثمر الوقت لفهم <strong>ما تحتاجه فعلاً</strong>، وما إذا كان الطرف المقابل مناسباً لك حقاً، وما إذا كان التوقيت والسياق ملائمَين. هذا <strong>يحمي الطرفين</strong> ويُنتج نتائج أفضل.',
      'why-diff-p3':      'هذا يحمي أيضاً جودة شبكتنا. كل تواصل نجريه <strong>انعكاس لحكمنا</strong>. نأخذ ذلك بجدية.',

      'why-how-eyebrow':  'كيف يجري ذلك عملياً',
      'why-how-h2':       'ما يمكن توقعه',
      'why-how-v1-title': 'الاستشارة الأولية',
      'why-how-v1-desc':  'نبدأ بنقاش معمق لوضعك وأهدافك وجدولك الزمني — بدون رسوم وبدون التزام.',
      'why-how-v2-title': 'تقييم صادق',
      'why-how-v2-desc':  'سنخبرك بوضوح بما هو قابل للتحقيق والجدول الزمني وما يتضمنه المسار، بما في ذلك التعقيدات التي نتوقعها.',
      'why-how-v3-title': 'تواصلات موجهة',
      'why-how-v3-desc':  'نجري التواصلات حين نثق بالملاءمة. تواصل واحد موجه أفضل من عشرة تواصلات تخمينية.',
      'why-how-v4-title': 'دعم مستمر',
      'why-how-v4-desc':  'نبقى متاحين طوال العملية. إن تغير شيء أو ظهر تعقيد، لديك من يعرف وضعك.',

      'why-cta-h2': 'اكتشف إن كنا الشريك المناسب لك',
      'why-cta-p':  'الاستشارة الأولية مجانية وسرية وبدون التزام.',
      'why-cta-btn':'حجز موعد',

      /* ================================================================
         PARTNERS PAGE
         ================================================================ */
      'partners-hero-h1': 'شبكة شركائنا',
      'partners-hero-p':  'قوة ميريديان هورايزون تكمن في عمق علاقاتنا المهنية وجودتها. شبكتنا مبنية على الثقة والانتقاء الدقيق وسنوات من التعاون المباشر.',

      'partners-eyebrow': 'شبكتنا',
      'partners-h2':      'شركاء مهنيون في التخصصات الرئيسية',
      'partners-intro':   'نحتفظ بعلاقات عمل نشطة مع متخصصين منتقَين في كل تخصص قد يحتاجه عملاؤنا. هؤلاء ليسوا قوائم إحالة — بل شركاء نعمل معهم بانتظام ويمكننا الوثوق بهم.',

      'partners-c1-label': 'قانوني &amp; مؤسسي',
      'partners-c1-title': 'الاستشارة القانونية',
      'partners-c1-desc':  'محامون مؤهلون في الإمارات يشمل عملهم قانون الشركات والعقود التجارية والامتثال التنظيمي وحل النزاعات للأعمال العاملة بالإمارات.',
      'partners-c2-label': 'مالي',
      'partners-c2-title': 'البنكية &amp; التمويل',
      'partners-c2-desc':  'مسؤولو علاقات في بنوك إماراتية ودولية فضلاً عن مزودي تمويل بديل لتيسير التواصلات البنكية المؤسسية والشخصية.',
      'partners-c3-label': 'امتثال',
      'partners-c3-title': 'المحاسبة &amp; التدقيق',
      'partners-c3-desc':  'محاسبون ومدققون مؤهلون يقدمون تقارير مالية متوافقة مع الإمارات وامتثال ضريبة القيمة المضافة والمشورة الضريبية ودعم الحوكمة المؤسسية.',
      'partners-c4-label': 'تأسيس',
      'partners-c4-title': 'الخدمات المؤسسية',
      'partners-c4-desc':  'مزودو خدمات مؤسسية مرخصون يتولون تأسيس الشركات والمكتب المسجل وخدمات العلاقات العامة ومتطلبات الامتثال عبر الولايات القضائية الإماراتية.',
      'partners-c5-label': 'تجارة',
      'partners-c5-title': 'التوريد &amp; اللوجستيات',
      'partners-c5-desc':  'وكلاء توريد وشركات شحن ومتخصصون في تيسير التجارة لعمليات الاستيراد والتصدير من وإلى الإمارات.',
      'partners-c6-label': 'دولي',
      'partners-c6-title': 'شركاء الاستشارة الدولية',
      'partners-c6-desc':  'شركاء في تطوير الأعمال والاستشارة في أوروبا وآسيا وأفريقيا ودول الخليج لتيسير التواصلات العابرة للحدود ودعم الدخول إلى الأسواق.',

      'partners-join-eyebrow': 'انضم إلى شبكتنا',
      'partners-join-h2':      'كن شريكاً لميريديان هورايزون',
      'partners-join-p1':      'إن كنت مزود خدمات مهنية أو مستشار أعمال أو مشغلاً تجارياً تسعى للتعاون في مهام العملاء، يسعدنا استكشاف ترتيبات الشراكة.',
      'partners-join-p2':      'نعمل مع الشركاء على أساس الإحالة والتعاون، ونكون انتقائيين في من ندمجهم في شبكتنا. جودة العلاقة أهم من الكم.',
      'partners-join-btn1':    'أبدِ اهتمامك',
      'partners-join-btn2':    'اعرف أكثر',

      'partners-note-eyebrow': 'ملاحظة حول السرية',
      'partners-note-h2':      'لا ننشر قائمة شركائنا',
      'partners-note-p':       'احتراماً لعلاقات العمل التي نحتفظ بها وللسرية التي يتوقعها عملاؤنا، لا ننشر قائمة مسماة بالشركاء. شبكتنا تُقدَّم على أساس الحاجة مكيَّفةً مع متطلبات كل عميل.',

      /* ================================================================
         CONTACT PAGE
         ================================================================ */
      'contact-hero-h1': 'اتصل بنا',
      'contact-hero-p':  'نرحب باستفسارات رواد الأعمال والمستثمرين والشركاء المهنيين. جميع الاستشارات الأولية سرية وبدون التزام.',

      'contact-form-eyebrow': 'أرسل لنا رسالة',
      'contact-form-h2':      'نموذج التواصل',
      'contact-label-name':   'الاسم الكامل',
      'contact-ph-name':      'اسمك الكامل',
      'contact-label-email':  'البريد الإلكتروني',
      'contact-ph-email':     'بريدك@مثال.com',
      'contact-label-phone':  'الهاتف / واتساب',
      'contact-label-subject':'الموضوع',
      'contact-subj-default': 'اختر موضوعاً',
      'contact-subj-1':       'تأسيس الشركات',
      'contact-subj-2':       'الهيكلة المؤسسية',
      'contact-subj-3':       'التمهيد البنكي',
      'contact-subj-4':       'مشورة الأعمال',
      'contact-subj-5':       'الشراكة الاستراتيجية',
      'contact-subj-6':       'التوريد &amp; التجارة',
      'contact-subj-7':       'طلب شراكة',
      'contact-subj-8':       'أخرى',
      'contact-label-message':'الرسالة',
      'contact-ph-message':   'أخبرنا عن أعمالك وكيف يمكننا مساعدتك...',
      'contact-submit':       'إرسال الرسالة',
      'contact-privacy':      'معلوماتك تُعالَج وفق سياسة الخصوصية. لا نتشارك بياناتك مع أطراف ثالثة.',

      'contact-info-eyebrow': 'تواصل مباشر',
      'contact-info-h2':      'تواصل معنا مباشرة',
      'contact-label-ph-ci':  'الهاتف',
      'contact-label-wa':     'واتساب',
      'contact-label-email-ci':'البريد الإلكتروني',
      'contact-label-loc':    'الموقع',
      'contact-loc-val':      'دبي، الإمارات العربية المتحدة',

      'contact-wa-title': 'تفضل واتساب؟',
      'contact-wa-desc':  'يجد معظم عملائنا أن التواصل عبر واتساب أسهل. أرسل لنا رسالة وسنرد بسرعة.',
      'contact-wa-btn':   'راسلنا على واتساب',

      /* ================================================================
         BLOG
         ================================================================ */
      'blog-hero-h1':    'المدونة &amp; الموارد',
      'blog-hero-p':     'آراء عملية حول تأسيس الشركات في الإمارات ومتطلبات البنكية والهيكلة المؤسسية والتطوير التجاري الدولي.',
      'blog-eyebrow':    'مقالاتنا',
      'blog-h2':         'آخر المنشورات',
      'blog-cta-h2':     'لديك سؤال حول الأعمال في الإمارات؟',
      'blog-cta-p':      'فريقنا متاح لاستشارة أولية سرية وبدون التزام.',
      'blog-cta-btn':    'تواصل معنا',

      /* --- Home inline CTAs --- */
      'home-f1-cta': 'شبكة شركائنا',
      'home-f2-cta': 'دليل البر الرئيسي مقابل المنطقة الحرة',
      'home-f3-cta': 'كيف نعمل',
      'home-f4-cta': 'القطاعات التي ندعمها',
      'home-f5-cta': 'نطاق خدماتنا الكامل',
      'home-f6-cta': 'لماذا تختارنا',

      /* --- UAE stats band --- */
      'home-stat-zones':      'منطقة حرة في الإمارات',
      'home-stat-ownership':  'ملكية أجنبية كاملة متاحة',
      'home-stat-tax-treaty': 'دولة في اتفاقيات تجنب الازدواج الضريبي',
      'home-stat-corp-tax':   'معدل ضريبة الشركات',
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

  var _arFontLoaded = false;
  function ensureArFont() {
    if (_arFontLoaded) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap';
    document.head.appendChild(link);
    _arFontLoaded = true;
  }

  function apply(lang) {
    cacheEN();
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    if (lang === 'ar') ensureArFont();
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
    var arOpt = document.querySelector('#lang-btn .ls-ar');
    [enOpt, frOpt, arOpt].forEach(function (el) { if (el) el.classList.remove('ls-active'); });
    var active = document.querySelector('#lang-btn .ls-' + lang);
    if (active) active.classList.add('ls-active');
    var btn = document.getElementById('lang-btn');
    if (btn) {
      var ariaMap = { en: 'Passer en français', fr: 'التبديل إلى العربية', ar: 'Switch to English' };
      btn.setAttribute('aria-label', ariaMap[lang] || 'Switch language');
    }
  }

  function currentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT;
  }

  function toggle() {
    var cur = currentLang();
    var next = cur === 'en' ? 'fr' : cur === 'fr' ? 'ar' : 'en';
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
