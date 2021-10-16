const actions = require("./actions")
// @ponicode
describe("actions.incrementCounter", () => {
    test("0", () => {
        let callFunction = () => {
            actions.incrementCounter()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.deIncrementCounter", () => {
    test("0", () => {
        let callFunction = () => {
            actions.deIncrementCounter()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.getCount", () => {
    test("0", () => {
        let callFunction = () => {
            actions.getCount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.getNextWord", () => {
    test("0", () => {
        let callFunction = () => {
            actions.getNextWord()
        }
    
        expect(callFunction).not.toThrow()
    })
})
