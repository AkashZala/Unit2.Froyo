const userInput = window.prompt("Please enter desired froyo flavors separated by commas.");
const inputArray = userInput.split(",");
const flavors = {};

for (i = 0; i < inputArray.length; i++) {
    let key = inputArray[i];
    if (flavors[key] === undefined) {
        flavors[key] = 0;
    }
    flavors[key]++;
}

console.log(flavors);




