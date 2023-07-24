/**
 * Eva MPP (Message-Passing Processes).
 *
 * (C) 2023-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const evaParser = require('../parser/evaParser');

const {JSCodegen} = require('../codegen/JSCodegen');
const {JSTransform} = require('../transform/JSTransform');

const fs = require('node:fs');

/**
 * JSCodegen instance.
 */
const jsCodegen = new JSCodegen({indent: 2});

/**
 * JSTransform instance.
 */
const jsTransform = new JSTransform();

/**
 * Eva MPP to JavaScript transpiler.
 */
class EvaMPP {
  /**
   * Compiles Eva MPP program to JavaScript.
   */
  compile(program, outFile) {
    // Functions map.
    this._functions = {};

    // 1. Parse source code:
    const evaAST = evaParser.parse(`(begin ${program})`);

    // 2. Translate to JavaScript AST:
    const jsAST = this.genProgram(evaAST);

    // 3. Generate JavaScript code:
    const target = jsCodegen.generate(jsAST);

    // 4. Write compiled code to file:
    this.saveToFile(outFile, target);

    return {ast: jsAST, target};
  }

  /**
   * Saves compiled code to file.
   */
  saveToFile(filename, code) {
    const out = `// Prologue:
const {print, spawn, sleep, scheduler, NextMatch, send, receive} = require('./src/runtime');

${code}
`;

    fs.writeFileSync(filename, out, 'utf-8');
  }

  /**
   * Codegen entire program.
   */
  genProgram(programBlock) {
    // Implement here...
  }

  /**
   * Transpiles Eva AST to JavaScript AST.
   */
  gen(exp) {
    // -------------------------------------------
    // Self-evaluating expressions.

    if (this._isNumber(exp)) {
      return {
        type: 'NumericLiteral',
        value: exp,
      };
    }

    if (this._isString(exp)) {
      // Implement here...
    }

    // --------------------------------------------
    // Variable access: foo

    if (this._isVariableName(exp)) {
      // Implement here...
    }

    // -------------------------------------------
    // Variables: (var x 10)

    if (exp[0] === 'var') {
      // Implement here...
    }

    // -------------------------------------------
    // Variable update: (set x 10)

    if (exp[0] === 'set') {
      // Implement here...
    }

    // --------------------------------------------
    // Unary expression.

    if (this._isUnary(exp)) {
      let operator = exp[0];

      if (exp[0] === 'not') {
        operator = '!';
      }

      return {
        type: 'UnaryExpression',
        operator,
        argument: this.gen(exp[1]),
      };
    }

    // --------------------------------------------
    // Binary expression.

    if (this._isBinary(exp)) {
      // Implement here...
    }

    // --------------------------------------------
    // Logical binary expression.

    if (this._isLogicalBinary(exp)) {
      // Implement here...
    }

    // -------------------------------------------
    // Blocks.

    if (exp[0] === 'begin') {
      // Implement here...
    }

    // -------------------------------------------
    // If statement: (if <test> <consequent> <alternate>)

    if (exp[0] === 'if') {
      // Implement here...
    }

    // -------------------------------------------
    // While loop

    if (exp[0] === 'while') {
      return {
        type: 'WhileStatement',
        test: this.gen(exp[1]),
        body: this._toStatement(this.gen(exp[2])),
      };
    }

    // -------------------------------------------
    // Functions: (def square (x) (* x x))

    if (exp[0] === 'def') {
      // Implement here...
    }

    // -------------------------------------------
    // Return: (return x)

    if (exp[0] === 'return') {
      return {
        type: 'ReturnStatement',
        argument: this.gen(exp[1]),
      };
    }

    // -------------------------------------------
    // List: (list 1 2 3)

    if (exp[0] === 'list') {
      const elements = exp.slice(1).map(element => this.gen(element));
      return {
        type: 'ArrayExpression',
        elements,
      };
    }

    // -------------------------------------------
    // List index: (idx p 0)

    if (exp[0] === 'idx') {
      // Implement here...
    }

    // -------------------------------------------
    // Record: (rec (key value) key)

    if (exp[0] === 'rec') {
      // Implement here...
    }

    // -------------------------------------------
    // Property access: (prop p x)

    if (exp[0] === 'prop') {
      // Implement here...
    }

    // -------------------------------------------
    // Pattern matching: (match value pattern1 handler1 ...)
    //

    if (exp[0] === 'match') {
      // Implement here...

      return {
        type: 'BlockStatement',
        body: [awaitVar, matchExp],
      };
    }

    // -------------------------------------------
    // Function calls: (square 2)

    if (Array.isArray(exp)) {
      // Implement here...

      // Convert sleep(...) to await sleep(...)
      if (callee.name === 'sleep') {
        // Implement here...
      }

      // Dynamically allocate a process function if the
      // original function is used in the spawn(...) call:
      if (callee.name === 'spawn') {
        // Implement here...
      }

      // Recursive calls to process functions
      // are handled as delegate yield* expressions.
      if (isRecursiveGenCall) {
        // Implement here...
      }

      // Simple calls:
      return {
        type: 'CallExpression',
        callee,
        arguments: args,
      };
    }

    throw `Unexpected expression ${JSON.stringify(exp)}.`;
  }

  /**
   * Whether expression is a variable name.
   */
  _isVariableName(exp) {
    return typeof exp === 'string' && /^[+\-*/<>=a-zA-Z0-9_\.]+$/.test(exp);
  }

  /**
   * Converts an Eva variable name to JS format.
   */
  _toVariableName(exp) {
    if (exp === 'self') {
      return 'this';
    }
    return this._toJSName(exp);
  }

  /**
   * Whether Eva node creates a block.
   */
  _hasBlock(exp) {
    return exp[0] === 'begin' || exp[0] === 'receive';
  }

  /**
   * Whether Eva node is a statement.
   */
  _isStatement(exp) {
    return (
      exp[0] === 'begin' ||
      exp[0] === 'if' ||
      exp[0] === 'while' ||
      exp[0] === 'var'
    );
  }

  /**
   * Whether the expression is a binary.
   */
  _isBinary(exp) {
    if (exp.length !== 3) {
      return false;
    }
    return (
      exp[0] === '+' ||
      exp[0] === '-' ||
      exp[0] === '*' ||
      exp[0] === '/' ||
      exp[0] === '==' ||
      exp[0] === '!=' ||
      exp[0] === '>' ||
      exp[0] === '<' ||
      exp[0] === '>=' ||
      exp[0] === '<='
    );
  }

  /**
   * Whether the expression is logical.
   */
  _isLogicalBinary(exp) {
    if (exp.length !== 3) {
      return false;
    }
    return exp[0] === 'or' || exp[0] === 'and';
  }

  /**
   * Whether the expression is unary.
   */
  _isUnary(exp) {
    if (exp.length !== 2) {
      return false;
    }
    return exp[0] === 'not' || exp[0] === '-';
  }

  /**
   * Converts dash-name (Eva) to camelCase (JS).
   */
  _toJSName(name) {
    return name.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  /**
   * Whether expression is a number.
   */
  _isNumber(exp) {
    return typeof exp === 'number';
  }

  /**
   * Whether expression is a string.
   */
  _isString(exp) {
    return typeof exp === 'string' && exp[0] === '"' && exp.slice(-1) === '"';
  }

  /**
   * Converts an expression to a statement.
   */
  _toStatement(expression) {
    switch (expression.type) {
      case 'NumericLiteral':
      case 'StringLiteral':
      case 'AssignmentExpression':
      case 'Identifier':
      case 'CallExpression':
      case 'BinaryExpression':
      case 'LogicalExpression':
      case 'UnaryExpression':
      case 'YieldExpression':
      case 'ArrayExpression':
      case 'MemberExpression':
      case 'AwaitExpression':
      case 'ThisExpression':
        return {type: 'ExpressionStatement', expression};
      default:
        return expression;
    }
  }
}

module.exports = {
  EvaMPP,
};
