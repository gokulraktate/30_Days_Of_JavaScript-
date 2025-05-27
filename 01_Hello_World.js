/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */




// or



function createHelloWorld(){
    let f=function(...args){
        return "Hello World";
    }
    return f
}
