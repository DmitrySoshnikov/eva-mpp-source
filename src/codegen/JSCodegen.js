/**
 * Eva MPP (Message-Passing Processes).
 *
 * (C) 2023-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

/**
 * JavaScript code generator.
 */
class JSCodegen {
  /**
   * Codegen options.
   */
  constructor({indent = 2}) {
    this._indent = indent;
    this._currentIndent = 0;
  }

  /**
   * Generates code for Program.
   */
  generate(exp) {
    return this.Program(exp);
  }

  /**
   * Program.
   */
  Program(exp) {
    // Implement here...
  }

  /**
   * Generates code for a JS node.
   */
  gen(exp) {
    // Implement here...
  }

  /**
   * NumericLiteral.
   */
  NumericLiteral(exp) {
    return `${exp.value}`;
  }

  /**
   * StringLiteral.
   */
  StringLiteral(exp) {
    return `"${exp.value}"`;
  }

  /**
   * Identifier.
   */
  Identifier(exp) {
    return exp.name;
  }

  /**
   * VariableDeclaration.
   */
  VariableDeclaration(exp) {
    // Implement here...
  }

  /**
   * AssignmentExpression.
   */
  AssignmentExpression(exp) {
    // Implement here...
  }

  /**
   * CallExpression.
   */
  CallExpression(exp) {
    // Implement here...
  }

  /**
   * BinaryExpression.
   */
  BinaryExpression(exp) {
    // Implement here...
  }

  /**
   * IfStatement.
   */
  IfStatement(exp) {
    // Implement here...
  }

  /**
   * WhileStatement.
   */
  WhileStatement(exp) {
    // Implement here...
  }

  /**
   * ReturnStatement.
   */
  ReturnStatement(exp) {
    // Implement here...
  }

  /**
   * ThrowStatement.
   */
  ThrowStatement(exp) {
    // Implement here...
  }

  /**
   * AwaitExpression.
   */
  AwaitExpression(exp) {
    // Implement here...
  }

  /**
   * ThisExpression.
   */
  ThisExpression(exp) {
    return `this`;
  }

  /**
   * TryStatement.
   */
  TryStatement(exp) {
    // Implement here...
  }

  /**
   * CatchClause.
   */
  CatchClause(exp) {
    // Implement here...
  }

  /**
   * ObjectExpression.
   */
  ObjectExpression(exp) {
    // Implement here...
  }

  /**
   * ObjectProperty.
   */
  ObjectProperty(exp) {
    // Implement here...
  }

  /**
   * ArrayExpression.
   */
  ArrayExpression(exp) {
    // Implement here...
  }

  /**
   * MemberExpression.
   */
  MemberExpression(exp) {
    // Implement here...
  }

  /**
   * FunctionDeclaration.
   */
  FunctionDeclaration(exp) {
    // Implement here...
  }

  /**
   * YieldExpression.
   */
  YieldExpression(exp) {
    // Implement here...
  }

  /**
   * LogicalExpression.
   */
  LogicalExpression(exp) {
    // Implement here...
  }

  /**
   * UnaryExpression.
   */
  UnaryExpression(exp) {
    // Implement here...
  }

  /**
   * BlockStatement.
   */
  BlockStatement(exp) {
    this._currentIndent += this._indent;

    let result =
      '{\n' +
      exp.body.map(exp => this._ind() + this.gen(exp)).join('\n') +
      '\n';

    this._currentIndent -= this._indent;

    result += this._ind() + '}';

    return result;
  }

  /**
   * ExpressionStatement.
   */
  ExpressionStatement(exp) {
    return `${this.gen(exp.expression)};`;
  }

  /**
   * Indent print.
   */
  _ind() {
    return ' '.repeat(this._currentIndent);
  }
}

module.exports = {
  JSCodegen,
};
