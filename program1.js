/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        // Stack to keep track of opening brackets
        let stack = [];
        
        // Mapping of closing to opening brackets
        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        };
    
        // Loop through each character in the string
        for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                // Push opening brackets onto the stack
                stack.push(char);
            } else if (char === ')' || char === '}' || char === ']') {
                // Check if the stack is empty or top of the stack matches the corresponding opening bracket
                if (stack.length === 0 || stack.pop() !== map[char]) {
                    return false;
                }
            }
        }
        
        // If the stack is empty, all opening brackets had matching closing brackets
        return stack.length === 0;
    }
};

module.exports = { isValid };


