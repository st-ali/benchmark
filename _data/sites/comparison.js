module.exports = {
	name: "comp", // optional, falls back to object key
	description: "Comp web sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 12, // 12h
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
	},
	urls: [
		"https://stali.com.au/",
		"https://sensorylab.com.au/",
		"https://www.salvatoremalatesta.com.au/",
		"https://www.jbhifi.com.au/",
		"https://au.koala.com/",
		"https://www.apple.com/",
		"https://www.culturekings.com.au/",
		"https://shop.tesla.com/",
	]
};