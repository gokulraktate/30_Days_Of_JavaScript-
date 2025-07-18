class Calculator {
    
    /** 
     * @param {number} value
     * Initializes the result with the given value
     */
    constructor(value) {
        this.result = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     * Adds the given value to result and returns the Calculator instance for chaining
     */
    add(value){
        this.result += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     * Subtracts the given value from result and returns the Calculator instance
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     * Multiplies result by the given value and returns the Calculator instance
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     * Divides result by the given value and returns the Calculator instance
     * Throws an error if dividing by 0
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     * Raises result to the power of the given value and returns the Calculator instance
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    /** 
     * @return {number}
     * Returns the current result
     */
    getResult() {
        return this.result;
    }
}
