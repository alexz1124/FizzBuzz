function fizzBuzz(num) {
    var result
    if(num <= 100){
        if(num%3 == 0 && num%5 == 0 ){
            result =  "FizzBuzz"
        }else if(`${num}`.substring(0,1) == "3" && `${num}`.substring(1,2) == "5" || 
        `${num}`.substring(0,1) == "5" && `${num}`.substring(1,2) == "3" ){
            result =  "FizzBuzz"
        }else if(num%3 == 0 ||  `${num}`.substring(0,1) == "3" || `${num}`.substring(1,2) == "3" ){
            if(`${num}`.substring(0,1)== "5" || `${num}`.substring(1,2)== "5"){
                result =  "FizzBuzz"
            }else{
                result =  "Fizz"
            }
        }else if(num%5 == 0 || `${num}`.substring(0,1)== "5"){
            result =  "Buzz"
        }else{
            result =  num
        }
    }
    return result
    
}
module.exports = fizzBuzz;