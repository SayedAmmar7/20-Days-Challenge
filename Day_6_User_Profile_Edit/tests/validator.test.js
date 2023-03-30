const { isValidEmail,isEmptyPayload }= require('./validator')

test('valid email',function(){
    const testPayload = {
        name: "test name",
        email: "test.ahu",
        interest: " testing"
    }
    const result = isValidEmail(testPayload)
    expect(result).toBe(false)
})
test('invalid email',function(){
    const testPayload = {
        name: "test name",
        email: "test@ahu",
        interest: " testing"
    }
    const result = isValidEmail(testPayload)
    expect(result).toBe(true)
})
