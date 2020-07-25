module.exports = {
	name: "", // optional, falls back to object key
	description: "standards tests",
	options: {
		frequency: 60 * 12, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://stali.com.au/",
		"https://sensorylab.com.au/",
		"https://www.salvatoremalatesta.com.au/",
		"https://www.jbhifi.com.au/",
		"https://au.koala.com/",
		"https://www.staples.ca/",
		"https://www.clare.com/",
		"https://www.yogagirl.com/",
	]
};