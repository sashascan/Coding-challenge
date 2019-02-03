
/*Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
*/

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function getDuplicates(number, array) {
    // given a number and an array, if the number repeats itself returns a sub-array 
    // i.e. getDuplicates(4,[1,1,2,3,4,4,5]) -> [4,4]
    if (array.includes(number)) {
        return array.filter(num => num === number);
    }		
}

function sortArray(array) {
    let finalArray = [];
    let repeatedNumbersArray = [];

    array.sort((a, b) => a - b); 	// [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]
    
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if value repeats itself -> getDuplicates(value, array)
        if (!repeatedNumbersArray.includes(array[i])) {
            // if number is repeated
            if (array[i] === array[i+1]) {
                // push the number into the array of repeated numbers
                repeatedNumbersArray.push(array[i]);
                // push the resulting subArray into finalArray
                finalArray.push(getDuplicates(array[i], array));
            } else {
                // if value does not reapet itsel -> push it to the finalArray as it is
                finalArray.push(array[i]);
            }  
        } 
    }
    return finalArray;
}

sortArray(array) // [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]

/*Bonus: Make it so it organizes strings differently from number types. 
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

const array2 = [1, "2", "3", 2];

function sortArray2(array) {
	let numbersArray = [],
		stringsArray = [];

	array.sort(); // [1, "2", 2, "3"]
	// iterate through array
	array.forEach(element => {
		if (typeof element === 'string') stringsArray.push(element);
		if (typeof element === 'number') numbersArray.push(element);
	})
	return [numbersArray, stringsArray]
}

sortArray2(array2); // [[1,2], ["2", "3"]]

