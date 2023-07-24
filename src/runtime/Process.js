/**
 * Eva MPP (Message-Passing Processes).
 *
 * (C) 2023-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

/**
 * Lightweight process (aka "green thread").
 */

class Process {
  /**
   * Initiates the process.
   */
  constructor(handlerFn, ...args) {
    // Implement here...
  }

  /**
   * String representation.
   */
  toString() {
    return `#${this.pid} (${this.name})`;
  }
}

/**
 * Global process ID.
 */
Process.pid = 0;

module.exports = {
  Process,
};