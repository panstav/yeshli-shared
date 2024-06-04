import { describe, it } from "node:test";
import assert from "node:assert";

import { roles, themes } from './src/index.js';

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
		const requiredFields = ['themeName', 'parentDomain'];
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

});