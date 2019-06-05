function parent() {
    const listOfNumbers = [4, 2, 6, 7];

    child(listOfNumbers);
}

function child(paramArray) {
    const numsParent = document.getElementById('output-numbers');
    paramArray.forEach(element => {
        numsParent.appendChild(createDiv(element));
    });
}

parent();

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