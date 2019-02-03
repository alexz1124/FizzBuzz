const fizzbuzz = require('./FizzBuzz')

test('หาร 3 ไม่ลงตัว', () => {
    expect(fizzbuzz(1)).toBe(1)
})

test('หาร 5 ไม่ลงตัว',() => {
    expect(fizzbuzz(14)).toBe(14)
})

test('หาร 3 ลงตัว ได้ Fizz',() => {
    expect(fizzbuzz(9)).toBe("Fizz")
})

test('หาร 5 ลงตัว ได้ Buzz', () => {
    expect(fizzbuzz(20)).toBe("Buzz")
})

test('หาร 3 และ 5 ลงตัว ได้ FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz")
})

test('มี 3 เป็นส่วนประกอบอย่างเดียว ได้ Fizz',() => {
    expect(fizzbuzz(31)).toBe("Fizz")
})

test('มี 5 เป็นส่วนประกอบอย่างเดียว ได้ ฺ Buzz',() =>{
    expect(fizzbuzz(58)).toBe("Buzz")
})

test('มี 5 เป็นส่วนประกอบและหาร 3 ลงตัว ได้ FizzBuzz',() =>{
    expect(fizzbuzz(51)).toBe("FizzBuzz")
})

test('มี 3 เป็นส่วนประกอบและหาร 5 ลงตัว ได้ FizzBuzz',() =>{
    expect(fizzbuzz(35)).toBe("FizzBuzz")
})