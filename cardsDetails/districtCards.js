var districtCards;

districtCards = {
  1: {
    districtType: 'Noble',
    color: 'gold',
    districtName: 'Manor',
    location:'/images/districtCards/Manor_DistrictCard.jpg',
    coinsRequired: '3',
  },
  2: {
    districtType: 'Noble',
    color: 'gold',
    districtName: 'Castle',
    location:'/images/districtCards/Castle_DistrictCard.jpg',
    coinsRequired: '4',
  },
  3: {
    districtType: 'Noble',
    color: 'gold',
    districtName: 'Palace',
    location:'/images/districtCards/Palace_DistrictCard.jpg',
    coinsRequired: '5',
  },
  4: {
    districtType: 'Religious',
    color: 'blue',
    districtName: 'Temple',
    location:'/images/districtCards/Temple_DistrictCard.jpg',
    coinsRequired: '1',
  },
  5: {
    districtType: 'Religious',
    color: 'blue',
    districtName: 'Church',
    location:'/images/districtCards/Church_DistrictCard.jpg',
    coinsRequired: '2',
  },
  6: {
    districtType: 'Religious',
    color: 'blue',
    districtName: 'Monastery',
    location:'/images/districtCards/Monastery_DistrictCard.jpg',
    coinsRequired: '3',
  },
  7: {
    districtType: 'Religious',
    color: 'blue',
    districtName: 'Cathedral',
    location:'/images/districtCards/Cathedral_DistrictCard.jpg',
    coinsRequired: '5',
  },
  8: {
    districtType: 'Trade',
    color: 'green',
    districtName: 'Tavern',
    location:'/images/districtCards/Tavern_DistrictCard.jpg',
    coinsRequired: '1',
  },
  9: {
    districtType: 'Trade',
    color: 'green',
    districtName: 'Market',
    location:'/images/districtCards/Market_DistrictCard.jpg',
    coinsRequired: '2',
  },
  10: {
    districtType: 'Trade',
    color: 'green',
    districtName: 'Trading Post',
    location:'/images/districtCards/TradinPost_DistrictCard.jpg',
    coinsRequired: '2',
  },
  11: {
    districtType: 'Trade',
    color: 'green',
    districtName: 'Docks',
    location:'/images/districtCards/Docks_DistrictCard.jpg',
    coinsRequired: '3',
  },
  12: {
    districtType: 'Trade',
    color: 'green',
    districtName: 'Harbor',
    location:'/images/districtCards/Harbor_DistrictCard.jpg',
    coinsRequired: '4',
  },
  13: {
    districtType: 'Trade',
    color: 'green',
    districtName: 'Town Hall',
    location:'/images/districtCards/TownHall_DistrictCard.jpg',
    coinsRequired: '5',
  },
  14: {
    districtType: 'Military',
    color: 'red',
    districtName: 'Watchtower',
    location:'/images/districtCards/Wathtower_DistrictCard.jpg',
    coinsRequired: '1',
  },
  15: {
    districtType: 'Military',
    color: 'red',
    districtName: 'Prison',
    location:'/images/districtCards/Prison_DistrictCard.jpg',
    coinsRequired: '2',
  },
  16: {
    districtType: 'Military',
    color: 'red',
    districtName: 'Barracks',
    location:'/images/districtCards/Barracks_DistrictCard.jpg',
    coinsRequired: '3',
  },
  17: {
    districtType: 'Military',
    color: 'red',
    districtName: 'Fortress',
    location:'/images/districtCards/Fortress_DistrictCard.jpg',
    coinsRequired: '5',
  },
  18: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Dragon Gate',
    location:'/images/districtCards/DragonGate_DistrictCard.jpg',
    coinsRequired: '6',
    extraPoints: '2',
  },
  19: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Haunted Quarter',
    location:'/images/districtCards/HauntedQuater_DistrictCard.jpg',
    coinsRequired: '2',
    changeDistricttype: true,
  },
  20: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Imperial Treasury',
    location:'/images/districtCards/ImperialTreasury_DistrictCard.jpg',
    coinsRequired: '5',
    extraPointEachGold: true,
  },
  21: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Keep',
    location:'/images/districtCards/Keep_DistrictCard.jpg',
    coinsRequired: '3',
    character8NoEffect: true,
  },
  22: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Laboratory',
    location:'/images/districtCards/Laboratory_DistrictCard.jpg',
    coinsRequired: '5',
    discardDistrictCards: '1',
    gainGold: '2',
  },
  23: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Library',
    location:'/images/districtCards/Library_DistrictCard.jpg',
    coinsRequired: '6',
    keepAlldDrawnCards: true,
  },
  24: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Map Room',
    location:'/images/districtCards/MapRoom_DistrictCard.jpg',
    coinsRequired: '5',
    pointForEachCardInHand: '1',
  },
  25: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'School of Magic',
    location:'/images/districtCards/SchoolOfMagic_DistrictCard.jpg',
    coinsRequired: '6',
    choseDistrictFromAbilities: true,
  },
  26: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Smithy',
    location:'/images/districtCards/Smithy_DistrictCard.jpg',
    coinsRequired: '5',
    oncePerTurn: true,
    payGold: '2',
    gainCards: '3',
  },
  27: {
    districtType: 'Unique',
    color: 'purple',
    districtName: 'Statue',
    location:'/images/districtCards/Statue_DistrictCard.jpg',
    coinsRequired: '3',
    isCrownPlayer: true,
    extraPoints: '2',
  },
};
