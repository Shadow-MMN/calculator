let num1 = 8
let num2 = 2
let sum = document.getElementById('sum-el')
document.getElementById('num1-el').innerText = num1
document.getElementById('num2-el').innerText = num2

function add(){
    let result =  num1 + num2 
   sum.textContent =    'Sum is ' + result
}
function subtract(){
    let result =  num1 - num2
    sum.textContent =     'Difference is ' + result
 }
 function multiply(){
    let result =  num1 * num2
     sum.textContent =     'Product is ' + result
 }
 function divide(){
    let result = num1 / num2  
    sum.textContent =   'Quotient is ' + result
 }
