const myMod = require("./myModuleExample")
// or can be import { anything, who, count, inc, dec, getCount } from "./myModuleExample"


console.log(myMod.anything)
console.log(myMod.who)
console.log(myMod.count)

console.log(myMod.inc())
console.log(myMod.inc())

console.log(myMod.dec())
console.log(myMod.dec())
console.log(myMod.dec())

console.log(myMod.getCount())
