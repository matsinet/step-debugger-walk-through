// Basic parent/child function calls
function parent() {
    const listOfNumbers = [4, 2, 6, 7];

    child(listOfNumbers);
}

// Iterate over an array of numbers, creating a div and append the div to parent element
function child(paramArray) {
    const numsParent = document.getElementById('output-numbers');
    paramArray.forEach(element => {
        numsParent.appendChild(createDiv(element));
    });
}

parent();

// Let's debug a recursive function
const initTotal = 0;
const integers = [9, 4, 6];

function addNumbers(total, numbers) {
    if (numbers.length > 0) {
        // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
        let number = numbers.shift();
        total += number;

        // Call the function recursively
        addNumbers(total, numbers);
    }

    return total;
}
// Grab the parent div and append the output of the addNumbers function
document.getElementById('recursive-addition').appendChild(createDiv(addNumbers(initTotal, integers)));

// Example of a click event with a callback
function ajaxExample() {
    axios.get('https://my-json-server.typicode.com/matsinet/sc-capstone-api-example/cities')
        .then(response => {
            // output each number to a div
            console.log(response);
            const citiesParent = document.getElementById('output-cities');
            for(const city of response.data) {
                const cityDiv = createDiv(`${city.id} :: ${city.name}`);
                citiesParent.appendChild(cityDiv);
            }
            citiesParent.appendChild(div);
            console.log('axios call ended');        
        })
        .catch(error => {
            // output error
            console.log(error);
        });

    console.log('after axios call');
}

function createDiv(text) {
    const div = document.createElement('div')
    div.textContent = `${text}`;
    return div;
}

const button = document.getElementById('load-cities');
button.addEventListener('click', ajaxExample);