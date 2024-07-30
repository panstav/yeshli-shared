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
				componentPath: "Destination/index.js"
			}
		]
	}
];

// cspell:ignore alon, elyse
module.exports.themes = [
	{
		themeName: "alon-01",
		parentDomain: "yesh.li",
		domainsDirectories: [
			'yeshli'
		],
	},
	{
		themeName: "elyse-01",
		parentDomain: "yesh.li",
		domainsDirectories: [
			'yeshli'
		],
	},
	{
		themeName: "ayelet-01",
		parentDomain: "yesh.li",
		domainsDirectories: [
			'yeshli'
		]
	},
	{
		themeName: "tom-01",
		parentDomain: "yesh.li-eng",
		domainsDirectories: [
			'yeshli',
			'yeshli-eng'
		],
		collectionPages: [
			{
				type: "post",
				prefix: "blog",
				componentPath: "Post/index.js"
			},
			{
				type: "tag",
				prefix: "blog/tag",
				componentPath: "Tag/index.js"
			},
			{
				type: "portfolio",
				prefix: "portfolio",
				componentPath: "PortfolioPost/index.js"
			}
		]
	},
	{
		themeName: "4wd-agency-01",
		parentDomain: "india4wd.tours",
		domainsDirectories: [
			'india4wdtours'
		],
		collectionPages: [
			{
				type: "route",
				prefix: "route",
				componentPath: "Route/index.js"
			}
		]
	}
];

module.exports.misc = {
	yeshLiHomepagePurchaseId: 'purchase',
};