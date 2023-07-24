/**
 * Eva MPP (Message-Passing Processes).
 *
 * (C) 2023-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

/**
 * JS Transform.
 */
class JSTransform {
  /**
   * Transforms normal function to an async generator.
   */
  functionToAsyncGenerator(fnNode) {
    // Implement here...
  }

  /**
   * Transforms pattern into checks for literals.
   */
  expressionToMatchPattern(exp, mainValue, checks = []) {
    // Object pattern match:
    //
    // {x, y: 1} -> {x: x, y: _y}
    //
    // if (_y !== 1) throw NextMatch;
    //
    if (exp.type === 'ObjectExpression') {
      // Implement here...
    }

    // Simple literal match:
    //
    // 1 -> if (mainValue !== 1) throw NextMatch;
    //
    else if (exp.type === 'NumericLiteral' || exp.type === 'StringLiteral') {
      // Implement here...
    }

    // Identifier match:
    //
    // _ -> (always match / default)
    //
    else if (exp.type === 'Identifier') {
      return [null, null];
    }
  }

  /**
   * Creates property comparison.
   */
  _createPropCompare(property) {
    // Implement here...
  }

  /**
   * Creates value comparison.
   */
  _createValueCompare(exp, expected) {
    return {
      type: 'BinaryExpression',
      left: exp,
      operator: '!==',
      right: expected,
    };
  }

  /**
   * Creates if-test for pattern value.
   */
  _createIfTest(checks) {
    if (checks.length === 0) {
      return null;
    }

    let ifCond = checks[0];

    let i = 1;

    while (i < checks.length) {
      ifCond = {
        type: 'LogicalExpression',
        left: ifCond,
        operator: '||',
        right: checks[i],
      };
      i++;
    }

    return {
      type: 'IfStatement',
      test: ifCond,
      consequent: {
        type: 'ThrowStatement',
        argument: {
          type: 'Identifier',
          name: 'NextMatch',
        },
      },
    };
  }
}

module.exports = {
  JSTransform,
};
