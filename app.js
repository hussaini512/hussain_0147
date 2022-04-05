const _ =require('lodash')
const itm=[1,[2,[3,[4]]]]
const newItm=_.flatMapDeep(itm)
console.log(newItm);