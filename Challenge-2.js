/* Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3] */

/* I decided to go one step further. The function returns an array of every combination of two numbers which give
the desired result.
As for the simpler solution, in order to return the first couple of numbers that give the target number, in the
last nested if statement just write: return [array[i], array[j]]; */

function answer(array, target) {
	let result = [];
	// iterate through array
    for (var i = 0; i < array.length; i++) {
    	// for each iterable number, iterate through the array again excluding such number
    	for (var j = 0; j < array.length; j++) {
    		if(array[j] !== array[i]) {
    			if((array[i] + array[j]) === target) {
    				// place the numbers into an array and push it into result array
    				result.push([array[i], array[j]]);
    				// remove the pushed numbers from the array to avoid repetition, i.e. [9,1] [1,9]
    				array.splice(i,1);
    				array.splice(j,1);
    			}
    		}
    	}
    }
    return result;
}


answer([2,9,3,7,1,5,4,6], 10); // [[9,1],[7,3],[4,6]];


