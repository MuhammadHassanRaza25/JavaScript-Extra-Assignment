document.write(`<h1>1st Array: slice method</h1>`)
var arr_1 = [12,11,25,26,2,6]
var copy = arr_1.slice(1,4)
document.write(arr_1);
document.write(`<h3>copy elements</h3>`)
document.write(copy);

document.write(`<br>`,`<br>`)
document.write(`<h1>2nd Array: splice method</h1>`)
var arr_2 = ["mango","banana","apple","grapes","strawberry","peach","watermelon"]
document.write(arr_2);
var del = arr_2.splice(1,3)
document.write(`<h3>deleted elements</h3>`)
document.write(del);

document.write(`<br>`,`<br>`)
document.write(`<h1>3rd Array: shift method</h1>`)
var arr_3 = ["math","computer","physics","chemistry","biology","english"]
document.write(arr_3)
document.write(`<h3>after shift method</h3>`)
arr_3.shift()
document.write(arr_3)

document.write(`<br>`,`<br>`)
document.write(`<h1>4th Array: unshift method</h1>`)
var arr_4 = ["red","green","pink","blue","white"]
document.write(arr_4)
document.write(`<h3>after unshift method</h3>`)
arr_4.unshift("black")
document.write(arr_4)

document.write(`<br>`,`<br>`)
document.write(`<h1>5th Array: push method</h1>`)
var arr_5 = ["Pakistan","India","Turkey","Saudi Arabia","China"]
document.write(arr_5)
document.write(`<h3>after push method</h3>`)
arr_5.push("Palestine")
document.write(arr_5)

document.write(`<br>`,`<br>`)
document.write(`<h1>6th Array: pop method</h1>`)
var arr_6 = ["Pakistan","India","Turkey","Saudi Arabia","China"]
document.write(arr_6)
document.write(`<h3>after pop method</h3>`)
arr_6.pop()
document.write(arr_6)