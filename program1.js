/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     let stack = [];
    
     const map = {
         ')': '(',
         '}': '{',
         ']': '['
     };
 
     for (let char of s) {
         if (char === '(' || char === '{' || char === '[') {
             stack.push(char);
         } else if (char === ')' || char === '}' || char === ']') {
             
             if (stack.length === 0 || stack.pop() !== map[char]) {
                 return false;
             }
         }
     }
     
     return stack.length === 0; 
};

module.exports = { isValid };


