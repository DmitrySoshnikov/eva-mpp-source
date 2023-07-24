/**
 * Eva MPP (Message-Passing Processes).
 *
 * (C) 2023-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const {Scheduler} = require('./Scheduler');

/**
 * Global scheduler.
 */
const scheduler = new Scheduler();

/**
 * Start hanlding processes.
 */
scheduler.start();

/**
 * Print to stdout.
 */
function print(...args) {
  console.log(...args);
}

/**
 * Spawns a process.
 */
function spawn(fn, ...args) {
  return scheduler.spawn(fn, ...args);
}

/**
 * Receive wrapper.
 */
async function receive(receiver) {
  return await scheduler.receive(receiver);
}

/**
 * Send wrapper.
 */
function send(receiver, message) {
  return scheduler.send(receiver, message);
}

/**
 * Sleep wrapper.
 */
async function sleep(ms) {
  return await scheduler.sleep(ms);
}

/**
 * Pattern matching marker.
 */
const NextMatch = {};

module.exports = {
  scheduler,
  print,
  spawn,
  send,
  receive,
  NextMatch,
};