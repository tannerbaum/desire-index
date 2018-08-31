// import ALLIES from "./data/allies";
const { ALLIES, GAMES } = require("./enums");

const timeLine = [
	{
		episodeNumber: 117,
		episodeDate: "06/20/2018",
		allies: [ALLIES.Bosman, ALLIES.Moore, ALLIES.Jones, ALLIES.Huber],
		games: [
			GAMES.ResidentEvil,
			GAMES.LastOfUs,
			GAMES.KingdomHearts,
			GAMES.SmashUltimate,
			GAMES.Cyberpunk,
			GAMES.HaloInfinite,
			GAMES.Fallout,
			GAMES.SonicRacing,
			GAMES.SkullAndBones,
			GAMES.BabylonsFall
		],
		notes: "Ben pulls Sonic Racing to number "
	},
	{
		episodeNumber: 118,
		episodeDate: "06/27/2018",
		allies: [ALLIES.Bosman, ALLIES.Jones, ALLIES.Damiani, ALLIES.Ellis],
		games: [
			GAMES.ResidentEvil,
			GAMES.LastOfUs,
			GAMES.KingdomHearts,
			GAMES.RedDead,
			GAMES.Cyberpunk,
			GAMES.Sekiro,
			GAMES.Control,
			GAMES.Dmc,
			GAMES.SmashUltimate,
			GAMES.Anthem,
			GAMES.HaloInfinite,
			GAMES.Fallout,
			GAMES.SkullAndBones,
			GAMES.SonicRacing,
			GAMES.ElderScrolls,
			GAMES.BabylonsFall,
			GAMES.PokemonLetsGo
		],
		notes: ""
	}
];

module.exports = {
	timeLine
};
