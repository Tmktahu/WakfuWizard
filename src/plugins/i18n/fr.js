/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import frItemTranslations from './itemTranslations/fr_items.json';

export const fr = {
  items: frItemTranslations,
  app: {
    disclaimer: 'WAKFU est un MMORPG édité par Ankama. "WakForge" est un site non-officiel sans aucun lien avec Ankama.',
    globalErrorMessage: 'There was a severe error that stopped the app from working correctly.', // NEEDS TRANSLATION
    globalErrorContact: 'Please contact Fryke on Discord ASAP with the below information.', // NEEDS TRANSLATION
  },
  sidebar: {
    charactersTab: 'Personnages',
    dataTab: 'Données',
    discordTab: 'Discord',
    githubTab: 'GitHub',
    language: 'Langage',
    english: 'Anglais',
    spanish: 'Espagnol',
    french: 'Français',
    theme: 'Thème',
    colorTheme: 'Couleur Thème',
    amakna: 'Amakna',
    bonta: 'Bonta',
    brakmar: 'Brâkmar',
    sufokia: 'Sufokia',
  },
  charactersPage: {
    title: 'Bienvenue sur Wakforge',
    description: "Si vous rencontrez le moindre problème, n'hésitez pas à contacter Fryke (fryke) sur Discord.",
    codeInputLabel: 'Code Build',
    codeInputPlaceholder: "Entrer le Build Code",
    codeInputButton: "Créer à partir d'un code",
    invalidBuildCode: 'Build Code invalide.',
    savedCharactersTitle: 'Personnages Sauvegardés',
    createNewCharacterButton: 'Créer un nouveau Personnage',
    createNewGroupButton: 'Créer nouveau groupe',
    newGroup: 'Nouveau groupe',
  },
  dataPage: {
    title: "Gestion des données de l'application",
    importDescription: 'Vous pouvez upload ici un fichier JSON pour importer des personnages.',
    selectJson: 'Sélectionner un fichier JSON',
    dragOrDrop: 'ou glisser/déposer le fichier JSON ici.',
    dataNotRecognized: 'Les données actuelles ne sont pas reconnues comme des données WakForge.',
    beforeImport: "Avant d'importer les personnages, la version de vos données sera vérifiée.",
    needsMigration:
      "Il semble que vous utilisez des données d'une ancienne version nécessitant d'être mises à jour avant d'être utilisées. Ceci est une opération sans risque et ne fera aucun changement permanent sur vos données existantes.",
    goodToGo: 'Vos données sont prêtes.',
    dataSize: 'Taille des données',
    numberOfCharacters: 'Nombre de personnages',
    noCharactersFound: 'Aucun personnage trouvé',
    operatesOffLocalstorage: 'WakForge fonctionne avec des données sauvegardées dans le navigateur via LocalStorage.',
    currentLocalstorageKey: 'La clé utilisée pour les données du LocalStorage est',
    storageLimit: 'Le LocalStorage a une taille limite de 10Mo.',
    currentStorageSize: 'Votre stockage a une taille actuelle de',
    contactForHelp: 'Si vous approchez de cette limite, merci de contacter Fryke (fryke) sur Discord.',
    warning: 'ATTENTION',
    warningMessage:
      "Éditer les données du LocalStorage directement est dangereux et peut corrompre définitivement vos données. Ne le faites qu'après avoir fait une sauvegarde et si vous savez ce que vous faites.",
    mustDownloadFirst: "Vous devez d'abort télecharger vos données",
    invalidJSON: 'JSON invalide',
    saveToLocalstorage: 'Sauvegarder dans le LocalStorage',
    downloadData: 'Télécharger les données actuelles',
    deleteAllData: 'Supprimer toutes les données',
    migrateData: 'Migrer les données',
    importCharacters: 'Importer les personnages sélectionnés',
    noDataFound: 'Aucune donnée trouvée',
  },
  characterSheet: {
    selectAClass: 'Sélectionner une classe',
    level: 'Niveau',
    buildCopyPaste: 'Vous pouvez copier-coller ce code pour partager ce build',
    buildCode: 'Code Build',
    copy: 'Copier',
    characteristics: 'Caractéristiques',
    equipment: 'Équipement',
    autoItemSolver: 'Auto Item Solver',
    runesAndSubs: 'Runes & Sublimations (WIP)',
    spellsAndPassives: 'Sorts & Passifs',
    codeDisclaimer: 'Oui, c\'est normal. Ne soyez pas inquiet.',
    codeInfo:
      'Ces caractères sont intentionnels. Pour que le code reste court, nous sommes allés vers les profondeurs obscures de l\'encodage en base2048. Contemplez la majesté de ces runes du code du Build. Puisse-t-il vous apporter l\'illumination.',

    statsDisplay: {
      ar: 'AR',
      qb: 'BQ',
      water: 'Eau',
      air: 'Air',
      earth: 'Terre',
      fire: 'Feu',
      elmentalResistances: 'Résistances Elémentaires',
      battle: 'Combat',
      criticalHit: 'Coup Critique',
      block: 'Parade',
      secondary: 'Secondaire',
      armorReceived: 'Armure reçue',
      indirectDamage: 'Dommages Indirects',
    },

    characteristicsContent: {
      points: 'Points',
      intelligence: 'Intelligence',
      barrier: 'Barrière',
      percentArmorHealthPoints: '% Points de Vie en Armure',
      strength: 'Force',
      elementalMastery: 'Maîtrise élémentaire',
      agility: 'Agilité',
      lockAndDodge: 'Tacle et Esquive',
      fortune: 'Chance',
      major: 'Majeur',
      movementPointsAndDamage: 'Point de Mouvement et dégâts',
      rangeAndDamage: 'Portée et dégâts',
      controlAndDamage: 'Contrôle et dégâts',
    },

    equipmentContent: {
      sortBy: 'Trier par',
      resultsOutOf: 'Résultats sur',
      itemsTotal: 'Items au total',
      displayStats: 'Afficher les stats',
      itemLevel: "Niveau de l'item",
      openEncyclopediaPage: "Ouvrir la page de l'encyclopédie",
      noItemsFound: "Aucun item n'a été trouvé avec ces filtres. N'hésitez pas à changer votre recherche.",
      hasRelicWarning: 'Vous avez déjà un item Relique équipé. Ce dernier sera retiré avec cette action. Êtes-vous sûr ?',
      hasEpicWarning: 'Vous avez déjà un item Epique équipé. Ce dernier sera retiré avec cette action. Êtes-vous sûr ?',
      twoHandedWeaponWarning: "Ceci est une arme à deux mains et il existe déjà un item dans le slot d'arme secondaire. Êtes-vous sûr ?",
      secondWeaponWarning: 'Vous avez une arme à deux mains équipée. Cette dernière sera retirée avec cette action. Êtes-vous sûr ?',
      relicAndTwoHandedWarning:
        "Vous avez un item dans le slot d'arme secondaire et un item Relique équipés. Ces derniers seront retirés avec cette action. Êtes-vous sûr ?",
      relicAndSecondWeaponWarning: 'Vous avez une arme à deux main et un item Relique équipés. Ces derniers seront retirés avec cette action. Êtes-vous sûr ?',
      epicAndTwoHandedWarning:
        "Vous avez un item dans le slot d'arme secondaire et un item Epique équipés. Ces derniers seront retirés avec cette action. Êtes-vous sûr ?",
      epicAndSecondWeaponWarning: 'Vous avez une arme à deux main et un item Epique équipés. Ces derniers seront retirés avec cette action. Êtes-vous sûr ?',

      itemFilters: {
        searchItems: 'Recherche Items',
        resetFilters: 'Reset Filtres',
        rarities: 'Raretés',
        all: 'Tout',
        none: 'Aucun',
        itemTypes: 'Types Item',
        showAllFilters: 'Montrer tous les filtres',
        newFilter: 'Nouveau Filtre',
        equalTo: 'Égal à',
        lessThanOrEqualTo: 'Inférieur ou égale à',
        greaterThanOrEqualTo: 'Supérieur ou égale à',
        smallToBig: 'Croissant',
        bigToSmall: 'Décroissant',
        healthPoints: 'Points de vie (PV)',
        randElemMasteryValue: 'Maîtrise élem. aléatoire',
        criticalHitChance: 'Chance Coup Critique',
        blockChance: 'Parade',
        randElemResistanceValue: 'Résis. élem. aléatoire',
        ctrlClickToSelectOne: 'CTRL-Click to select one and remove all others.',
      },
    },

    itemSolverContent: {
      numElements: 'Nombre d\'éléments',
      apTooltip: 'Combien de PA au total vous souhaitez.',
      mpTooltip: 'Combien de PM au total vous souhaitez.',
      rangeTooltip: 'Combien de PO au total vous souhaitez.',
      wakfuTooltip: 'Combien de PW au total vous souhaitez.',
      numElementsTooltip: 'Combien d\'éléments vous souhaitez sur chaque item.',
      meleeMasteryTooltip: 'La Maîtrise Mêlée doit-elle être inclue si possible ?',
      distanceMasteryTooltip: 'La Maîtrise Distance doit-elle être inclue si possible ?',
      healingMasteryTooltip: 'La Maîtrise Soin doit-elle être inclue si possible ?',
      rearMasteryTooltip: 'La Maîtrise Dos doit-elle être inclue si possible ?',
      berserkMasteryTooltip: 'La Maîtrise Berserk doit-elle être inclue si possible ?',
      poweredBy: 'Powered by',
      code: 'code',
      problemMessage: 'Il y a eu un souci avec l\'auto-solver. Si vous pensez qu\'il s\'agit d\'un bug, merci de contacter Fryke sur Discord.',
      instructions: 'Entrer vos paramètres au-dessus et cliquer sur "Générer un set d\'items".',
      ifYouNeedHelp: 'Si vous avez besoin d\'assistance, n\'hésitez pas à nous contacter sur Discord avec vos questions.',
      loadingMessage: 'Jimmy est en pleine réflexion avec ses maths... Merci de patienter...',
      loadingDisclaimer: 'N\'oubliez pas qu\'en fonction des options, celà peut prendre du temps.',
      normal: 'Normal', // NEEDS TRANSLATION
      prioritized: 'Prioritized', // NEEDS TRANSLATION
      preferNoNegatives: 'Prefer no negatives', // NEEDS TRANSLATION
      heavilyPreferNoNegatives: 'Heavily prefer no negatives', // NEEDS TRANSLATION
      targetStatsInfo: 'These are the total target stats you want for the whole build.', // NEEDS TRANSLATION
      prioritiesInfo: 'These are what priority you want the various masteries to be considered at.', // NEEDS TRANSLATION
      elementaryMasteryInfo: 'What elemental masteries should be prioritized? This will also affect the number of random element slots the solver goes for.', // NEEDS TRANSLATION
      sinbadErrorInfo: 'If you are seeing this, then please contact Keeper of Time (sinbad) on Discord with the following information.', // NEEDS TRANSLATION
      priorities: 'Priorities', // NEEDS TRANSLATION
      totalTargetStats: 'Total Target Stats', // NEEDS TRANSLATION
      apWarning: 'You are asking for at least 6 AP from items, which may be impossible.', // NEEDS TRANSLATION
      rangeForLevelWarning: 'You may be asking for more range than is possible at your level.', // NEEDS TRANSLATION
      rangeImpossibleWarning: 'You may be asking for more range than is possible.', // NEEDS TRANSLATION
      combinedApMpWarning: 'You may be asking for a combined AP+MP amount that is not possible at your level.', // NEEDS TRANSLATION
    },

    runesAndSubsContent: {
      hotkeysAndShortcuts: 'Raccourcis',
      dragAndDrop: 'Glisser-Déposer une rune pour l\'affecter.',
      dragReplace: 'Déposer une rune sur une autre pour la remplacer.',
      ctrlClick: 'CTRL-Clic sur une rune pour la remplacer.',
      shiftClick: 'SHIFT-Clic sur une rune pour la rendre blanche.',
      rightClick: 'Clic-Droit sur une rune pour plus d\'options.',
      hightlightClick: 'Sélectionner un slot et cliquer sur une rune à droite pour l\'assigner.',
      statsSummary: 'Résumé Stats',
      runeLevelTooltip: `Le niveau maximum possible d'une rune est dépendant du niveau de l'item mais pour les besoins du builder, je limite ce champs par le niveau du personnage.`,
      runeLevel: 'Niveau Rune',
      toggleWhite: 'Rendre Blanche',
      removeAllRunes: 'Enlever toutes les runes/subl.',
    },

    spellsAndPassivesContent: {
      activeSpells: 'Active Spells (WIP)', // NEEDS TRANSLATION
      activesNote:
        'Active Spells do not have any direct influence on the stats of a build, and they are very difficult to parse. We will not have them for some time.', // NEEDS TRANSLATION
      passives: 'Passives', // NEEDS TRANSLATION
      passivesNote: 'If you find any passives that do not apply their values correctly, please lets us know in the Discord.', // NEEDS TRANSLATION
    },
  },
  constants: {
    common: 'Commun',
    unusual: 'Inhabituel',
    rare: 'Rare',
    mythical: 'Mythique',
    legendary: 'Légendaire',
    relic: 'Relique',
    souvenir: 'Souvenir',
    epic: 'Épique',

    helmet: 'Casque',
    breastplate: 'Plastron',
    epaulettes: 'Épaulettes',
    boots: 'Bottes',
    amulet: 'Amulette',
    cloak: 'Cape',
    belt: 'Ceinture',
    primaryWeapon: 'Arme Principale',
    secondaryWeapon: 'Arme Secondaire',
    leftRing: 'Anneau Gauche',
    rightRing: 'Anneau Droit',
    ring: 'Anneau',
    emblem: 'Emblème',
    pet: 'Familier',
    pets: 'Familiers',
    mount: 'Monture',
    mounts: 'Montures',
    tool: 'Outil',
    torches: 'Torches',
    costumes: 'Costumes',
    sublimationScroll: 'Parchemin de Sublimation',
    enchantment: 'Rune',

    oneHandedWeapons: 'Armes à 1 main',
    twoHandedWeapons: 'Armes à 2 mains',
    wandOneHand: 'Baguette (1 main)',
    swordOneHand: 'Épée (1 main)',
    staffOneHand: 'Bâton (1 main)',
    clockHandOneHand: 'Aiguille (1 main)',
    cardsOneHand: 'Cartes (1 main)',
    swordTwoHanded: 'Épée (2 mains)',
    axeTwoHanded: 'Hache (2 mains)',
    staffTwoHanded: 'Bâton (2 mains)',
    hammerTwoHanded: 'Marteau (2 mains)',
    bowTwoHanded: 'Arc (2 mains)',
    shovelTwoHanded: 'Pelle (2 mains)',
    daggerSecondaryWeapon: 'Dague (Arme Secondaire)',
    shieldSecondaryWeapon: 'Bouclier (Arme Secondaire)',

    percentDamageInflicted: '% Dommages infligés',
    percentCriticalHit: '% Coup Critique',
    hp: 'PV',
    ap: 'PA',
    mp: 'PM',
    wp: 'PW',
    healthSteal: 'Vol de vie',
    range: 'PO',
    prospecting: 'Prospection',
    wisdom: 'Sagesse',
    control: 'Contrôle',
    percentBlock: '% Parade',
    movementPoints: 'Points de Mouvement',

    elementalMasteries: 'Maîtrises Elémentaires',
    meleeMastery: 'Maîtrise Mêlée',
    distanceMastery: 'Maîtrise Distance',
    lock: 'Tacle',
    dodge: 'Esquive',
    initiative: 'Initiative',
    forceOfWill: 'Volonté',
    criticalMastery: 'Maîtrise Critique',
    rearMastery: 'Maîtrise Dos',
    berserkMastery: 'Maîtrise Berserk',
    healingMastery: 'Maîtrise Soin',
    rearResistance: 'Résistance Dos',
    criticalResistance: 'Résistance Critique',
    actionPoints: "Points d'actions",
    wakfuPoints: 'Points Wakfu',
    elementalResistance: 'Résistance Elémentaire',
    waterResistance: 'Résistance Eau',
    earthResistance: 'Résistance Terre',
    airResistance: 'Résistance Air',
    fireResistance: 'Résistance Feu',
    level: 'Niveau',
    name: 'Nom',
    elementalMastery: 'Maîtrise élémentaire',
    waterMastery: 'Maîtrise Eau',
    earthMastery: 'Maîtrise Terre',
    airMastery: 'Maîtrise Air',
    fireMastery: 'Maîtrise Feu',

    percentArmorGiven: '% Armure donnée',
    percentArmorReceived: '% Armure reçue',
    percentHealsPerformed: '% Soins réalisés',
    percentIndirectDamageInflicted: '% Dommages indirects infligés',
    dodgeOverride: 'Ignorer l\'esquive',
    percentHealsReceived: '% Soins reçus',
    healthFromLevel: 'Points de vie par niveau',
    lockOverride: 'Ignorer le tacle',
    percentHealthPoints: '% Points de Vie',
    lockDoubled: 'Tacle Augmenté',
    dodgeFromLevel: 'Esquive par niveau',
    lockFromLevel: 'Tacle par niveau',
    percentDodge: '% Esquive',
    damageInflicted: 'Dommages Infligés',
    healsPerformed: 'Soins réalisés',
    healsReceived: 'Soins reçus',
    armorGiven: 'Armure donnée',
    healthPoints: 'Points de Vie',

    remove: 'Remove',
  },
  confirms: {
    irreversable: 'Êtes-vous sûr ? Ceci est irréversible.',
    areYouSure: 'Êtes-vous sûr ?',
    willReplaceItems: 'Êtes-vous sûr ? Ceci remplacera tous les items équipés qui sont dans les slots en conflit.',
  },
};
