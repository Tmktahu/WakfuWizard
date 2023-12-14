import esItemTranslations from './itemTranslations/es_items.json';
import esStatesTranslations from './statesTranslations/es_states.json';

export const es = {
  items: esItemTranslations,
  states: esStatesTranslations,
  app: {
    disclaimer: 'WAKFU es un MMORPG publicado por Ankama. "WakForge" es un sitio web no oficial sin ningún vínculo con Ankama.',
    globalErrorMessage: 'Se ha producido un error grave que ha detenido el correcto funcionamiento de la aplicación.',
    globalErrorContact: 'Ponte en contacto con Fryke en Discord lo antes posible con la información que aparece debajo.',
  },
  sidebar: {
    charactersTab: 'Personajes',
    dataTab: 'Datos',
    discordTab: 'Discord',
    githubTab: 'GitHub',
    language: 'Idioma',
    english: 'Inglés',
    spanish: 'Español',
    french: 'Francés',
    theme: 'Temas',
    colorTheme: 'Color del Tema',
    amakna: 'Amakna',
    bonta: 'Bonta',
    brakmar: 'Brakmar',
    sufokia: 'Sufokia',
  },
  charactersPage: {
    title: 'Bienvenido a Wakforge',
    description: 'Si encuentras cualquier problema, siéntete libre de escribirle a Fryke (fryke) en Discord. Traduccion realizada por Krieg (Discord: fl_cl)',
    codeInputLabel: 'Build Code',
    codeInputPlaceholder: 'Ingresa tu Build Code',
    codeInputButton: 'Crear desde Build Code',
    invalidBuildCode: 'Build code es inválido.',
    savedCharactersTitle: 'Personajes Guardados',
    createNewCharacterButton: 'Crea un nuevo Personaje',
    createNewGroupButton: 'Crear un Nuevo Grupo',
    newGroup: 'Nuevo Grupo',
  },
  dataPage: {
    title: 'Gestión de datos de la aplicación',
    importDescription: 'Aquí puedes cargar un archivo JSON para importar personajes.',
    selectJson: 'Selecciona el archivo JSON',
    dragOrDrop: 'O arrastra y suelta un archivo JSON aquí.',
    dataNotRecognized: 'Los datos actuales no se reconocen como datos de WakForge.',
    beforeImport: 'Antes de que puedas importar personajes, se comprobará aquí la versión de los datos importados.',
    needsMigration:
      'Parece que tus datos proceden de una versión antigua, por lo que es necesario actualizarlos antes de poder utilizarlos. Se trata de una operación segura que no modificará de forma permanente los datos existentes.',
    goodToGo: 'Tus datos están listos.',
    dataSize: 'Tamaño de los datos',
    numberOfCharacters: 'Número de personajes',
    noCharactersFound: 'No se han encontrado personajes',
    operatesOffLocalstorage: 'WakForge funciona con datos guardados localmente en tu navegador a través de LocalStorage.',
    currentLocalstorageKey: 'La clave actual para los datos de LocalStorage es',
    storageLimit: 'LocalStorage tiene un límite de tamaño de almacenamiento de 10 MB.',
    currentStorageSize: 'Su almacenamiento tiene un tamaño actual de',
    contactForHelp: 'Si alguna vez te acercas a este límite, ponte en contacto con Fryke (fryke) en Discord.',
    warning: 'ADVERTENCIA',
    warningMessage:
      'Editar sus datos directamente en LocalStorage es peligroso y podría causar daños irreparables a sus datos. Hazlo únicamente después de haber hecho una copia de seguridad y comprender qué estás haciendo.',
    mustDownloadFirst: 'Debes descargar primero una copia de seguridad de tus datos.',
    invalidJSON: 'Esto es JSON inválido',
    saveToLocalstorage: 'Guardar en LocalStorage',
    downloadData: 'Descargar los datos actuales',
    deleteAllData: 'Borrar todos los datos',
    migrateData: 'Migrar los datos',
    importCharacters: 'Importar los personajes seleccionados',
    noDataFound: 'No se han encontrado datos',
  },
  characterSheet: {
    selectAClass: 'Selecciona una Clase',
    level: 'Nivel',
    buildCopyPaste: 'Puedes copiar y pegar este código para compartir la build con otras personas',
    buildCode: 'Build Code',
    copy: 'Copiar',
    characteristics: 'Características',
    equipment: 'Equipamiento',
    autoItemSolver: 'Auto Item Solver',
    runesAndSubs: 'Engraces y Sublimaciones',
    spellsAndPassives: 'Hechizos y Pasivas',
    codeDisclaimer: 'Sí, esto es intencional. Hablamos Runico.',
    codeInfo:
      'Estos caracteres son intencionados. Para que el código fuera lo suficientemente pequeño, nos adentramos en las oscuras profundidades de la codificación base2048. Contempla la majestuosidad rúnica del código de construcción.',

    statsDisplay: {
      ar: 'AR',
      qb: 'BC',
      water: 'Agua',
      air: 'Aire',
      earth: 'Tierra',
      fire: 'Fuego',
      elmentalResistances: 'Resistencias Elementales',
      battle: 'Combate',
      criticalHit: 'Golpe Crítico',
      block: 'Anticipación',
      secondary: 'Secundario',
      armorReceived: 'Armodura Recibida',
      indirectDamage: 'Daños Indirectos',
    },

    characteristicsContent: {
      points: 'Puntos',
      intelligence: 'Inteligencia',
      barrier: 'Parapeto',
      percentArmorHealthPoints: '% de Puntos de Vida en Armadura',
      strength: 'Fuerza',
      elementalMastery: 'Dominio Elemental',
      agility: 'Agilidad',
      lockAndDodge: 'Placaje y Esquiva',
      fortune: 'Suerte',
      major: 'Mayor',
      movementPointsAndDamage: 'Puntos de Movimiento y Daños',
      rangeAndDamage: 'Alcance y Daños',
      controlAndDamage: 'Control y Daños',
    },

    equipmentContent: {
      sortBy: 'Ordenar por',
      resultsOutOf: 'Resultados de',
      itemsTotal: 'Objetos en Total',
      displayStats: 'Mostrar Stats',
      itemLevel: 'Nivel de Objeto',
      openEncyclopediaPage: 'Abrir la página de la enciclopedia',
      noItemsFound: 'No se han encontrado objetos con estos filtros. Por favor, compruebe su búsqueda.',
      hasRelicWarning: 'Ya tienes un objeto Reliquia equipado. Al hacer esto, lo quitarás. ¿Estás seguro?',
      hasEpicWarning: 'Ya tienes un objeto Épico equipado. Al hacer esto, lo quitarás. ¿Estás seguro?',
      twoHandedWeaponWarning: 'Esta es un arma a dos manos, y tienes un objeto en tu segunda ranura de arma. ¿Estás seguro?',
      secondWeaponWarning: 'Tienes un arma a dos manos equipada. Al hacer esto, te la quitaras. ¿Estás seguro?',
      relicAndTwoHandedWarning: 'Tienes un objeto en tu segunda ranura de arma y un objeto Reliquia ya equipado. Ambos serán removidos si haces esto. ¿Estás seguro?',
      relicAndSecondWeaponWarning: 'Ya tienes un arma a dos manos y un objeto Reliquia equipados. Ambos serán removidos si haces esto. ¿Estás seguro?',
      epicAndTwoHandedWarning: 'Tienes un objeto en tu segunda ranura de arma y un objeto Épico ya equipado. Ambos serán removidos si haces esto. ¿Estás seguro?',
      epicAndSecondWeaponWarning: 'Ya tienes equipados un arma a dos manos y un objeto Épico ya equipiado. Ambos serán removidos si haces esto. ¿Estás seguro?',

      itemFilters: {
        searchItems: 'Buscar Objetos',
        resetFilters: 'Reiniciar Filtros',
        rarities: 'Rarezas',
        all: 'Todos',
        none: 'Ninguno',
        itemTypes: 'Tipos de Objetos',
        showAllFilters: 'Ver todos los filtros',
        newFilter: 'Nuevo Filtro',
        equalTo: 'Igual a',
        lessThanOrEqualTo: 'Menor o igual que',
        greaterThanOrEqualTo: 'Mayor o igual que',
        smallToBig: 'De pequeño a grande',
        bigToSmall: 'De grande a pequeño',
        healthPoints: 'Puntos de Vida (PdV)',
        randElemMasteryValue: 'Dominio Elemental Aleatorio',
        criticalHitChance: 'Probabilidad de Golpe Crítico',
        blockChance: 'Porcentaje de Ancticipacion',
        randElemResistanceValue: 'Resistencia Elemental Aleatoria',
        ctrlClickToSelectOne: 'CTRL-Click to select one and remove all others.',
      },
    },

    itemSolverContent: {
      numElements: 'Número de elementos',
      apTooltip: 'Cuántos Puntos de Acción quieres en total.',
      mpTooltip: 'Cuántos Puntos de Movimiento quieres en total.',
      rangeTooltip: 'Cuánto Alcance quieres en total.',
      wakfuTooltip: 'Cuántos puntos Wakfu quieres en total.',
      numElementsTooltip: 'Cuántos tipos de elementos quieres en cada objeto..',
      meleeMasteryTooltip: '¿Debe incluirse Dominio de Melé si es posible?',
      distanceMasteryTooltip: '¿Debe incluirse Dominio Distancia si es posible?',
      healingMasteryTooltip: '¿Debe incluirse Dominio Cura si es posible?',
      rearMasteryTooltip: '¿Debe incluirse Dominio Espalda si es posible?',
      berserkMasteryTooltip: '¿Debe incluirse Dominio Berserker si es posible?',
      poweredBy: 'Desarrollado por',
      code: 'código',
      problemMessage: 'Ha habido un problema con el solucionador automático. Si crees que se trata de un error, ponte en contacto con Fryke en Discord.',
      instructions: 'Introduce los parámetros y haz clic en "Generar conjunto de artículos"..',
      ifYouNeedHelp: 'Si necesitas ayuda, no dudes en preguntarnos en Discord.',
      loadingMessage: 'Jimmy está haciendo los cálculos y todo eso... Por favor, espera...',
      loadingDisclaimer: 'Tenga en cuenta que, dependiendo de las preferencias anteriores, esto puede llevar algún tiempo.',
      normal: 'Normal',
      prioritized: 'Priorizar',
      preferNoNegatives: 'Prefiero no negativos',
      heavilyPreferNoNegatives: 'Priorizar no negativos',
      targetStatsInfo: 'Estas son las estadísticas objetivo totales que quieres para toda la build.',
      prioritiesInfo: 'Estas son las prioridades en las que quieres que se consideren los distintos dominios.',
      elementaryMasteryInfo: '¿Qué dominios elementales deben priorizarse? Esto también afectará al número de ranuras de elementos aleatorios que elige el solucionador.',
      sinbadErrorInfo: ' Si ves esto, ponte en contacto con Keeper of Time (sinbad) en Discord con la siguiente información.',
      priorities: 'Prioridades',
      totalTargetStats: 'Estadísticas totales objetivo',
      apWarning: 'Estás pidiendo al menos 6 PA procedentes de los objetos, lo que puede ser imposible.',
      rangeForLevelWarning: 'Puede que estés pidiendo más alcance del que es posible a tu nivel.',
      rangeImpossibleWarning: 'Puede que estés pidiendo más alcance del que es posible.',
      combinedApMpWarning: 'Puede que estés pidiendo una cantidad combinada de PA+PM que no sea posible en tu nivel.',
    },

    runesAndSubsContent: {
      hotkeysAndShortcuts: 'Teclas de acceso rápido y atajos',
      dragAndDrop: 'Arrastra y suelta las runas para asignarlas.',
      dragReplace: 'Arrastra una runa sobre otra para sustituirla.',
      ctrlClick: 'CTRL-Click en una runa para borrarla.',
      shiftClick: 'SHIFT-Click en una runa para cambiarla a blanca.',
      rightClick: 'RIGHT-Click en una runa para ver más opciones..',
      hightlightClick: 'Selecciona una ranura y haz clic en una runa de la derecha para asignarla.',
      statsSummary: 'Resumen de los stats',
      runeLevelTooltip: `El máximo nivel de runa posible está ligado al nivel del objeto, pero para nuestros propósitos limitamos esta opción al nivel de tu personaje.`,
      runeLevel: 'Nivel de Runa',
      toggleWhite: 'Cambiar a blanco',
      removeAllRunes: 'Remover todas las Runas/Sublis',
      sortByMatching: 'Sort by Matching', // NEEDS TRANSLATION
      sortByMatchingNote: 'If an equipment slot is hightlighted, this will sort the sublimations by whether they match the rune colors on that equipment slot.', // NEEDS TRANSLATION
      searchSublimations: 'Search Sublimations...', // NEEDS TRANSLATION
      searchEpicAndRelicSubs: 'Search Epic/Relic Sublimations...', // NEEDS TRANSLATION
      addsStateLevelsShort: '+{num_0} levels of', // NEEDS TRANSLATION, context = "+1 levels of Abandon"
      stateStackingWarning: 'This state only stacks up to level {num_0}', // NEEDS TRANSLATION
      relicSub: 'Relic Sub', // NEEDS TRANSLATION, context = shorthand for "Relic Sublimation"
      epicSub: 'Epic Sub', // NEEDS TRANSLATION, context = shorthand for "Epic Sublimation"
      itemMustBeEquipped: 'An item must be equipped', // NEEDS TRANSLATION
    },

    spellsAndPassivesContent: {
      activeSpells: 'Hechizos Activos (WIP)',
      activesNote:
        'Los Hechizos Activos no tienen ninguna influencia directa en las estadísticas de una build, y son muy difíciles de analizar. No dispondremos de ellos durante algún tiempo.',
      passives: 'Pasivas',
      passivesNote: 'Si encuentras alguna pasiva que no aplique sus valores correctamente, por favor háznoslo saber en el Discord.',
    },
  },
  classes: {
    feca: 'Feca',
    osamodas: 'Osamodas',
    enutrof: 'Anutrof',
    sram: 'Sram',
    xelor: 'Xelor',
    ecaflip: 'Zurcarák',
    eniripsa: 'Aniripsa',
    iop: 'Yopuka',
    cra: 'Ocra',
    sadida: 'Sadida',
    sacrier: 'Sacrógrito',
    pandawa: 'Pandawa',
    rogue: 'Tymador',
    masqueraider: 'Zobal',
    ouginak: 'Uginak',
    foggernaut: 'Steamer',
    eliotrope: 'Selotrop',
    huppermage: 'Hipermago',
  },
  constants: {
    common: 'Común',
    unusual: 'Inusual',
    rare: 'Raro',
    mythical: 'Mítico',
    legendary: 'Legendario',
    relic: 'Reliquia',
    souvenir: 'Recuerdo',
    epic: 'Épico',

    helmet: 'Casco',
    breastplate: 'Coraza',
    epaulettes: 'Hombreras',
    boots: 'Botas',
    amulet: 'Amuleto',
    cloak: 'Capa',
    belt: 'Cinturón',
    primaryWeapon: 'Arma Principal',
    secondaryWeapon: 'Arma Secundaria',
    leftRing: 'Anillo Izquierdo',
    rightRing: 'Anillo Derecho',
    ring: 'Anillo',
    emblem: 'Emblema',
    pet: 'Mascota',
    pets: 'Mascotas',
    mount: 'Montura',
    mounts: 'Monturas',
    tool: 'Herramienta',
    torches: 'Antorchas',
    costumes: 'Trajes',
    sublimationScroll: 'Pergamino de Sublimación',
    enchantment: 'Runas',

    epicSublimation: 'Epic Sublimation', // NEEDS TRANSLATION
    relicSublimation: 'Relic Sublimation', // NEEDS TRANSLATION

    oneHandedWeapons: 'Armas a una Mano',
    twoHandedWeapons: 'Armas a dos Manos',
    wandOneHand: 'Varita (una mano)',
    swordOneHand: 'Espada (una mano)',
    staffOneHand: 'Bastón (una mano)',
    clockHandOneHand: 'Aguja (una mano)',
    cardsOneHand: 'Cartas (una mano)',
    swordTwoHanded: 'Espada (dos manos)',
    axeTwoHanded: 'Hacha (dos manos)',
    staffTwoHanded: 'Bastón (dos manos)',
    hammerTwoHanded: 'Martillo (dos manos)',
    bowTwoHanded: 'Arco (dos manos)',
    shovelTwoHanded: 'Pala (dos manos)',
    daggerSecondaryWeapon: 'Daga (arma secundaria)',
    shieldSecondaryWeapon: 'Escudo (arma secundaria)',

    percentDamageInflicted: '% de Daños Causados',
    percentCriticalHit: '% de Golpe Crítico',
    hp: 'PdV',
    ap: 'PA',
    mp: 'PM',
    wp: 'PW',
    healthSteal: 'Robo de vida',
    range: 'Alcance',
    prospecting: 'Prospección',
    wisdom: 'Sabiduría',
    control: 'Control',
    percentBlock: '% de Anticipación',
    movementPoints: 'Puntos de Movimiento',

    elementalMasteries: 'Maestrías Elementales',
    meleeMastery: 'Dominio de Melé',
    distanceMastery: 'Dominio Distancia',
    lock: 'Placaje',
    dodge: 'Esquiva',
    initiative: 'Iniciativa',
    forceOfWill: 'Voluntad',
    criticalMastery: 'Dominio Crítico',
    rearMastery: 'Dominio Espalda',
    berserkMastery: 'Dominio Berserker',
    healingMastery: 'Dominio Cura',
    rearResistance: 'Resistencia por la Espalda',
    criticalResistance: 'Resistencia Critica',
    actionPoints: 'Puntos de Acción',
    wakfuPoints: 'Puntos Wakfu',
    elementalResistance: 'Resistencia Elemental',
    waterResistance: 'Resistencia al Agua',
    earthResistance: 'Resistencia a la Tierra',
    airResistance: 'Resistencia al Aire',
    fireResistance: 'Resistencia al Fuego',
    level: 'Nivel',
    name: 'Nombre',
    elementalMastery: 'Dominio Elemental',
    waterMastery: 'Dominio de Agua',
    earthMastery: 'Dominio de Tierra',
    airMastery: 'Dominio de Aire',
    fireMastery: 'Dominio de Fuego',
    randElemMastery: 'Dominio Elemental Aleatorio',
    randElemResistances: 'Resistencia Elemental Aleatoria',
    harvestingQuantity: 'Cantidad de recolección',

    percentArmorGiven: '% Armadura Dada',
    percentArmorReceived: '% Armadura Recibida',
    percentHealsPerformed: '% Curas Realizadas',
    percentIndirectDamageInflicted: '% Daños Indirectos Infligidos',
    dodgeOverride: 'Ignorar Esquiva',
    percentHealsReceived: '% de Curas Recibidas',
    healthFromLevel: 'Puntos de Vida por Nivel',
    lockOverride: 'Ignorar Placaje',
    percentHealthPoints: '% de Puntos de Vida',
    lockDoubled: 'Placaje Aumentado',
    dodgeFromLevel: 'Esquiva por Nivel',
    lockFromLevel: 'Placaje por nivel',
    percentDodge: '% de Esquiva',
    damageInflicted: 'Daños Finales',
    healsPerformed: 'Curas Finales',
    healsReceived: 'Curas Recibidas',
    armorGiven: 'Armadura Dada',
    healthPoints: 'Puntos de vida',

    remove: 'Remover',
  },
  confirms: {
    irreversable: '¿Estás seguro? Esto es irreversible.',
    areYouSure: '¿Estás seguro?',
    willReplaceItems: '¿Estás seguro? Esto reemplazará cualquier otro objeto que tengas equipado ahora mismo en ranuras en conflicto.',
  },
  tooltips: {
    randomMasteryValue: '+{num_0} Mastery of {num_1} random elements', // NEEDS TRANSLATION
    randomResistanceValue: '+{num_0} Resistance of {num_1} random elements', // NEEDS TRANSLATION
    addsStateLevels: 'Adds +{num_0} levels of', // NEEDS TRANSLATION, context = "Adds +1 level of Abandon"
    stateAtLevel: 'State at level {num_0} (Max {num_1})', // NEEDS TRANSLATION, context = "Abandon State at level 1 (Max 6)"
    missingInfoAboutState: 'We are missing information about this state. If you have any, please let us know in the Discord server.', // NEEDS TRANSLATION
  },
};
