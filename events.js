import {EventEmitter} from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("testEvent", obj => {
    console.log(obj);
})

eventEmitter.on("testEventIndexJs", obj => {
    console.log(obj , "evento emitido a partir do index.");
})

eventEmitter.emit("testEvent", "teste Event emitido a partir do proprio arquivo");

export default eventEmitter;