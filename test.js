const { describe, it } = require("node:test");
const assert = require("node:assert");

const { roles, themes } = require('./index.js');

describe('roles', () => {

	it('should contain all roles as keys and in order array', () => {
		roles.order.forEach(role => {
			assert(roles[role]);
		});

		Object.keys(roles).forEach(role => {
			if (role === 'order') return;
			assert(roles.order.includes(role));
		});
	});

});

describe('themes', () => {

	it('should have all themes contain all required fields', () => {
		const requiredFields = ['themeName', 'parentDomain', 'domainsDirectories'];
		themes.forEach(theme => {
			requiredFields.forEach(field => {
				assert(theme[field]);
			});
		});
	});

	it('should have all themes with collection pages to have all required fields', () => {
		const requiredFields = ['type', 'prefix', 'componentPath'];
		themes.forEach(theme => {
			if (!theme.collectionPages) return;
			theme.collectionPages.forEach(collectionPage => {
				requiredFields.forEach(field => {
					assert(collectionPage[field]);
				});
			});
		});
	});

	it('should have a name that does not start with a number', () => {
		themes.forEach(theme => {
			assert(!theme.themeName.match(/^\d/));
		});
	});

});