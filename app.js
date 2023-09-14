// Tim's Challenges

function sum(num1, num2) {

    console.log(num1+num2);

}


sum(1, 1) // 2
sum(20, 44) // 64
sum(5, -20) // -15

function calculate(num1,num2,op) {

    console.log(eval(`${num1} ${op} ${num2}`))

}

calculate(1, 1, "+")
calculate(44, 20, "-")
calculate(5, 5, "*")
calculate(30, 5, "/")



function calculate_prompt() {
    
    num1 = prompt("Give me a number")
    num2 = prompt("Give me another number")
    op = prompt("What do you want to do with these two numbers? (add, subtract, divide, multiply)?")

    if (op.toLowerCase() == "add") {
        op = "+"
    } 

    if (op.toLowerCase() == "subtract") {
        op = "-"
    } 

    if (op.toLowerCase() == "divide") {
        op = "/"
    } 
    
    if (op.toLowerCase() == "multiply") {
        op = "*"
    } 

    result = eval(`${num1} ${op} ${num2}`) 
    alert(`Your result is: ${result}`);


}

calculate_prompt()

// BY THE WAY, I DO NOT ENCOURAGE THE USE OF EVAL.

// Sam's Challenge