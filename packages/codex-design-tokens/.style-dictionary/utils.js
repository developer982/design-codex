/** @typedef {import('./types.js').PackageJson} PackageJson */

import path from 'node:path';
import { createRequire } from 'node:module';

// Polyfill CommonJS require() for use in ES modules
const require = createRequire( import.meta.url );

/**
 * Get the version number from package.json.
 * @return {string}
 */
export function getPackageVersion() {
	const packageJsonPath = path.join( '..', 'package.json' );
	/** @type {PackageJson} */
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { version } = require( packageJsonPath );
	return version;
}
