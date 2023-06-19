import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off motor!');
  setTimeout(()=> {
    console.log('Please turn it off! Its a gentle reminder.')
  }, 3000)
});
// myEmitter.emit('WaterFull');

//FIRE THE WATERFULL EVENT TO RUN THE ABOVE CODE 

console.log("The script is running")
console.log("The script is still running")

myEmitter.emit('WaterFull');        //we are firing the event here...