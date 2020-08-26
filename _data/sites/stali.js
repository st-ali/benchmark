module.exports = {
	name: "ST ALI", // optional, falls back to object key
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
		"https://stali.com.au/",
		"https://stali.com.au/cart/",
		"https://stali.com.au/collections/coffee/",
		"https://stali.com.au/collections/be-calm-be-kind-be-clean/",
		"https://stali.com.au/collections/coffee-capsules-pods/",
		"https://stali.com.au/collections/be-calm-be-kind-be-clean/products/hempblack™-face-mask-1/",
		"https://stali.com.au/products/st-ali-hand-sanitiser-75-alcohol/",
		"https://stali.com.au/collections/st-ali-linea-mini",
		"https://stali.com.au/collections/home/",
		"https://stali.com.au/collections/st-ali-care-packages/",
		"https://stali.com.au/pages/st-ali-south-melbourne/",
	]
};