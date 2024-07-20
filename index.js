module.exports.roles = {
	order: ['GUEST', 'TRIAL', 'MEMBER', 'EDITOR', 'ADMIN'],
	GUEST: 'GUEST',
	TRIAL: 'TRIAL',
	MEMBER: 'MEMBER',
	EDITOR: 'EDITOR',
	ADMIN: 'ADMIN'
};

module.exports.domains = [
	{
		domain: "india4wd.tours",
		collectionPages: [
			{
				type: "destination",
				prefix: "destination",
				componentPath: "pages/Destination/index.js"
			},
			{
				type: "route",
				prefix: "route",
				componentPath: "pages/Route/index.js"
			},
			{
				type: "guide",
				prefix: "guide",
				componentPath: "pages/Guide/index.js"
			}
		]
	}
];

// cspell:ignore alon, elyse
module.exports.themes = [
	{
		themeName: "alon-01",
		parentDomain: "yesh.li"
	},
	{
		themeName: "elyse-01",
		parentDomain: "yesh.li"
	},
	{
		themeName: "ayelet-01",
		parentDomain: "yesh.li"
	},
	{
		themeName: "tom-01",
		parentDomain: "yesh.li-eng",
		collectionPages: [
			{
				type: "post",
				prefix: "blog",
				componentPath: "pages/Post/index.js"
			},
			{
				type: "tag",
				prefix: "blog/tag",
				componentPath: "pages/Tag/index.js"
			},
			{
				type: "portfolio",
				prefix: "portfolio",
				componentPath: "pages/PortfolioPost/index.js"
			}
		]
	}
];

module.exports.misc = {
	yeshLiHomepagePurchaseId: 'purchase',
};