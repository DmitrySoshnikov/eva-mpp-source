/**
 * Eva MPP (Message-Passing Processes).
 *
 * (C) 2023-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

/**
 * Process scheduler.
 */

const {Process} = require('./Process');

/**
 * Process scheduler. Implements simple round-robin scheduling.
 */
class Scheduler {
  /**
   * Initializes a Scheduler instance.
   */
  constructor() {
    // Implement here...
  }

  /**
   * Spawns a new process.
   */
  spawn(handlerFn, ...args) {
    // Implement here...
  }

  /**
   * Schedules a process.
   */
  schedule(process) {
    // Implement here...
  }

  /**
   * Terminates a process.
   */
  terminate(process) {
    // Implement here...
  }

  /**
   * Sends a message to a particular process.
   */
  send(receiver, message) {
    // Implement here...
  }

  /**
   * Receives a message.
   */
  async receive(receiver) {
    // Implement here...
  }

  /**
   * Sleep.
   */
  async sleep(ms) {
    // Implement here...
  }

  /**
   * Runs all iterations of this process.
   */
  async handleProcess(process) {
    // Implement here...
  }

  /**
   * Main run loop.
   */
  async run() {
    // Implement here...
  }

  /**
   * Starts the scheduler.
   */
  start() {
    setTimeout(() => this.run(), 0);
  }
}

module.exports = {
  Scheduler,
};
