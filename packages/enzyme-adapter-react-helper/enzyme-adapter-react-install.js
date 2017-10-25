#! /usr/bin/env node
var shell = require("shelljs");
var semver = require("semver");

var reactVersion = process.env.REACT || process.argv[2];

if (!semver.satisfies(reactVersion, '>=0.13')) {
  throw new Error('semver is not valid. Please provide a valid semver as an argument or environment variable.');
}

shell.echo('Cleaning up React and related packages...');
shell.exec('npm uninstall --no-save react react-dom react-test-renderer react-addons-test-utils enzyme-adapter-react-14 enzyme-adapter-react-15.4 enzyme-adapter-react-15 enzyme-adapter-react-16 && rimraf node_modules/react-test-renderer node_modules/react && npm prune');

shell.echo('Installing React@'+reactVersion+' and related packages...');
if (semver.satisfies(reactVersion, '^16.0.0-0')) {
  shell.exec('&& npm i --no-save react@16 react-dom@16 react-test-renderer@16 enzyme-adapter-react-16 && npm prune && npm i --no-save enzyme-adapter-react-16');
} else if (semver.satisfies(reactVersion, '^15.5.0')) {
  shell.exec('&& npm i --no-save react@15 react-dom@15 react-test-renderer@15 react-addons-test-utils@15 enzyme-adapter-react-15 && npm prune && npm i --no-save react-addons-test-utils@15 enzyme-adapter-react-15');
} else if (semver.satisfies(reactVersion, '15.0.0-0 - 15.4.x')) {
  shell.exec('&& npm i --no-save react@15.4 react-dom@15.4 react-addons-test-utils@15.4 enzyme-adapter-react-15.4 react-test-renderer@15.4 && npm prune && npm i --no-save react-addons-test-utils@15.4 enzyme-adapter-react-15.4');
} else if (semver.satisfies(reactVersion, '^0.14.0')) {
   shell.exec('&& npm i --no-save react@0.14 react-dom@0.14 react-addons-test-utils@0.14 enzyme-adapter-react-14 && npm prune && npm i --no-save react-addons-test-utils@0.14 enzyme-adapter-react-14');
} else if (semver.satisfies(reactVersion, '^0.13.0')) {
  shell.exec('&& npm i --no-save react@0.14 react-dom@0.14 react-addons-test-utils@0.14 enzyme-adapter-react-14 && npm prune && npm i --no-save react-addons-test-utils@0.14 enzyme-adapter-react-14');
}
