

// let sampleFun = (a,b,c,d) => console.log(a,b,c,d)
// let arr = [1,2,3,4,5,6,7,8,9,10]
// sampleFun(...arr)
// const b = ['a', 'b', 'c']
// const [f,c] = b
// console.log(b,c)

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(a.filter(x => x % 2 === 0))

const arr = ['a', 'b', 'c', 'a', 'd', 'b']

console.log(arr.reduce((x, y) => x.length > y.length ? x : y))

const sample = require('./sample.json')

console.log(sample)