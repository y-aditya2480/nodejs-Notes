// const simple = require("./moduleSecond.mjs")

// import {simple} from "./moduleSecond.mjs"
// simple()

// import {simple2 as simple} from "./moduleSecond.mjs"
// simple()

//-------------//without bracket write the import:--------------------
// import simple23 from "./moduleSecond.mjs"
// simple23()

// ----------MULTIPLE IMPORT----------

// import {simple, simple2, simple3} from "./moduleSecond.mjs"

// simple();
// simple2();
// simple3()


import * as a2 from "./moduleSecond.mjs"
console.log(a2)
console.log(a2.simple())