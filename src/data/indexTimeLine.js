// import ALLIES from "./data/allies";
const { ALLIES, GAMES } = require("./enums");

const timeLine = [
  {
    episodeNumber: 117,
    episodeDate: "06/20/2018",
    allies: [ALLIES.Bosman, ALLIES.Moore, ALLIES.Jones, ALLIES.Huber],
    games: [
      GAMES.BabylonsFall,
      GAMES.SkullAndBones,
      GAMES.SonicRacing,
      GAMES.Fallout,
      GAMES.HaloInfinite,
      GAMES.Cyberpunk,
      GAMES.SmashUltimate,
      GAMES.KingdomHearts,
      GAMES.LastOfUs,
      GAMES.ResidentEvil
    ]
  }
];

module.exports = {
  timeLine
};
