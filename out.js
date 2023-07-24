// Prologue:
const {print, spawn, sleep, scheduler, NextMatch, send, receive} = require('./src/runtime');

async function* _handleProcess(el) {
  while ((getWidth(el) < RACE_LENGTH)) {
    let request = await receive(this);
    try {
      let {sender: sender, delay: delay, delta: delta} = request;
      incWidth(el, delta);
      let receiver = getRandomProcess();
      send(receiver, {sender: this, delay: random(5, 200), delta: random(5, 50)});
      await sleep(delay);
    } catch (e) {
      if ((e !== NextMatch)) throw e; 
    }
  }
}
