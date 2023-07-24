/**
 * Eva MPP (Message-Passing Processes).
 *
 * (C) 2023-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const {EvaMPP} = require('../src/transpiler/EvaMPP');

const eva = new EvaMPP();

const {ast, target} = eva.compile(`

  42

`);

console.log('\n----------------------------');
console.log(' 1. Compiled AST:\n');

// JS AST:
console.log(JSON.stringify(ast, null, 2));

console.log('\n----------------------------');
console.log(' 2. Compiled code:\n');

// JS Code:
console.log(target);

// Run compiled code:

console.log('\n----------------------------');
console.log(' 3. Result:\n');

/* executed from ./compile-run.sh */