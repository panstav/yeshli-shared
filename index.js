export const roles = {
	order: ['GUEST', 'TRIAL', 'MEMBER', 'EDITOR', 'ADMIN'],
	GUEST: 'GUEST',
	TRIAL: 'TRIAL',
	MEMBER: 'MEMBER',
	EDITOR: 'EDITOR',
	ADMIN: 'ADMIN'
};

// cspell:ignore alon, elyse
export const themes = [
	{
		themeName: "alon-01",
		parentDomain: "yesh.li"
	},
	{
		themeName: "elyse-01",
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
				componentPath: "pages/Portfolio/index.js"
			}
		]
	}
];

export const misc = {
	yeshLiHomepagePurchaseId: 'purchase',
};