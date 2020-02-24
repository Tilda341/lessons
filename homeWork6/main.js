function sampleFunc () {
    console.log ( `${arguments.callee.name} : ${arguments[0]} | ${arguments[1]}`)
}
function modificator (func) {
    let sort = func.bind (func, "test", "sample")
    return sort
}
testFunc = modificator(sampleFunc)
testFunc ()