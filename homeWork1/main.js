//second exercise//
var x=0, y=10, z=5
for (i=0; i <= y*z; i+=z){
    x+=i
}
//third exercise one//
var numbers = [ 254, 115, 78, 25, 91, 45, 37 ]
for (i=0; i<=numbers.length; i++){
    numbers[i]>50? console.log(numbers[i]): null
}
//third exercise two//
var numbers = [ 254, 115, 78, 25, 91, 45, 37 ]
for (i=0; i<=numbers.length; i++){
    numbers[i]>50 && console.log(numbers[i])
}