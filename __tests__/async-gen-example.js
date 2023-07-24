/**
 * Eva MPP (Message-Passing Processes).
 *
 * (C) 2023-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

function print(...args) {
  console.log(...args);
}

function handle(id) {
  print(id, 1);
  print(id, 2);
}

handle('x');
handle('y');

function spawn(fn, ...args) {
  const gen = fn(...args);
  schedule(gen);
}

const runQueue = [];

function schedule(gen) {
  // Implement here...
}

async function handleProcess(gen) {
  // Implement here...
}

function schedulerLoop() {
  /// Implement here...
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function* _handle(id, ms) {
  // Implement here...
}

spawn(_handle, 'x', 300);
spawn(_handle, 'y', 1000);

schedulerLoop();
