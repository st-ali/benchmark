module.exports = {
	name: "SENSORY LAB", // optional, falls back to object key
	description: "Cha Ching Real-time Website Testing",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://sensorylab.com.au/",
		"https://sensorylab.com.au/collections/espresso-blends/",
		"https://sensorylab.com.au/collections/coffee-beans/",
		"https://sensorylab.com.au/collections/coffee-made-perfect/",
		"https://sensorylab.com.au/collections/equipment/",
		"https://sensorylab.com.au/collections/espresso-blends/products/steadfast-espresso-blend/",
		"https://sensorylab.com.au/collections/subscriptions/",
		"https://sensorylab.com.au/pages/little-collins/",
		"https://sensorylab.com.au/pages/locations/",
		"https://sensorylab.com.au/pages/sensory-lab-30-collins/",
		"https://sensorylab.com.au/collections/capsules-pods/",
	]
};