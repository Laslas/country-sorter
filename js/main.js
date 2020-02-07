//creating or getting the main elements
const countryDiv = document.querySelector('#country-div');
const count = document.querySelector('.heading-span');
const buttons = document.querySelector('.search-buttons');
const nameBtn = document.querySelector('#name-btn');
const capitalBtn = document.querySelector('#capital-btn');
const populationBtn = document.querySelector('#popuation-btn');
const switchedon = document.querySelector('.switchedon')
const switchedoff = document.querySelector('.switchedoff')
const noStyle = document.querySelector('.noStyle')

let flagName = false;
let flagCapital = false
let flagPopulation = false

let fName = false;
let fCapital = false;
let fPopulation = false;






// Using map to access the countries array.
const countrys = countries.map(country => ({
    flag: country['flag'], name: country['name'], capital: country['capital'], languages: country['languages'], population: country['population'],

}))
//Counting the countries
count.textContent = countrys.length;


//function to print arrays
generateDivs = (array) => {


    for (let value of array) {
        //creating the main elements
        const title = document.createElement('h2');
        const capital = document.createElement('p');
        const population = document.createElement('p');
        const languages = document.createElement('p');
        const flag = document.createElement('img');
        const innerDiv = document.createElement('div');
        const textDiv = document.createElement('div');

        //Adding classes to elements
        title.className = 'country-title';
        capital.className = 'country-capital';
        population.className = 'country-population';
        languages.className = 'country-languages';
        flag.className = 'country-flag';
        innerDiv.className = 'inner-div';
        textDiv.className = 'text-div';

        //writing into the main elements
        title.innerHTML = `${value.name}`;
        capital.textContent = `Capital: ${value.capital}`;
        population.textContent = `Population: ${value.population}`;
        languages.textContent = `Language(s): ${value.languages}`;
        flag.src = value.flag;

        //Appending the main elements
        innerDiv.append(flag);
        innerDiv.append(title);
        innerDiv.append(textDiv);
        textDiv.append(capital);
        textDiv.append(languages);
        textDiv.append(population);


        countryDiv.append(innerDiv);


    }

    
}

//Generating all the countries


const sortCountrys = () => {
    //buttons.addEventListener('click', (e) => {

        
        //const target = e.target;
        
    
       nameBtn.addEventListener('click', () => {
            capitalBtn.setAttribute('class', 'nostyle')
            populationBtn.setAttribute('class', 'nostyle')
            
            if (fName === false) {
                
                clearContent()
                generateDivs(countrys.slice().sort(sortObjArr('name', 'desc')));
                
                nameBtn.setAttribute('class', 'switchedon')
                fName = true;
                
            } else {
                
                nameBtn.setAttribute('class', 'switchedoff')
                clearContent()
                generateDivs(countrys.slice().sort(sortObjArr('name')));
               
                fName = false;
                
            }            
        })
    
        capitalBtn.addEventListener('click', () => {
            nameBtn.setAttribute('class', 'nostyle')
            populationBtn.setAttribute('class', 'nostyle')
            
            if (fCapital === false) {
                fCapital = true;
                clearContent()
                generateDivs(countrys.slice().sort(sortObjArr('capital', 'desc')));
               
                capitalBtn.setAttribute('class', 'switchedon')
                
            } else {
                
                capitalBtn.setAttribute('class', 'switchedoff')
                clearContent()
                generateDivs(countrys.slice().sort(sortObjArr('capital')));
               
                fCapital = false;
            }            
        })
    
        populationBtn.addEventListener('click', () => {
            nameBtn.setAttribute('class', 'nostyle')
            capitalBtn.setAttribute('class', 'nostyle')
            
            if (fPopulation === false) {
                
                clearContent()
                generateDivs(countrys.slice().sort(sortObjArr('population', 'desc')));
                
                populationBtn.setAttribute('class', 'switchedon');
                fPopulation = true;
                
            } else {
                
                populationBtn.setAttribute('class', 'switchedoff')
                clearContent()
                generateDivs(countrys.slice().sort(sortObjArr('population')));
               
                fPopulation = false;
                
            }            
        })
    //})
}

const defaultPage = () => {
    generateDivs(countrys);
    sortCountrys();
}

defaultPage()







//function to filter arrays
const filterName = (array) => {
    let search = document.querySelector('#search-bar').value;

    return array.filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase()) || item.capital.toLowerCase().startsWith(search.toLowerCase()) || item.languages.join().toLowerCase().includes(search.toLowerCase()));


}

//adding event listener to search bar

let filterIncludes = document.getElementById('search-bar').oninput = () => {
    let search = document.querySelector('#search-bar').value;
    const hidden = document.querySelector('.heading-para-hidden');
    hidden.style.color = 'blue';

    clearContent();
    let newResult = filterName(countrys);

    const count = newResult.length;
    hidden.textContent = `Your search returned ${count} countries!`;

    //console.log(newResult)


    if (search === '') {
        hidden.textContent = '';
    }

    if (newResult.length === 0) {
        hidden.textContent = `Your search returned 0 countries!`;
        hidden.style.color = 'red';
    }
    generateDivs(newResult);

    buttons.addEventListener('click', (e) => {

        
        const target = e.target;
        

        if (target.matches('#name-btn')) {
            capitalBtn.setAttribute('class', 'nostyle')
            populationBtn.setAttribute('class', 'nostyle')
            
            if (flagName === false) {
                
                clearContent()
                generateDivs(newResult.slice().sort(sortObjArr('name', 'desc')));
                
                target.setAttribute('class', 'switchedon')
                flagName = true;
                
            } else {
                
                target.setAttribute('class', 'switchedoff')
                clearContent()
                generateDivs(newResult.slice().sort(sortObjArr('name')));
                
                flagName = false;
                
            }            
        }

        if (target.matches('#capital-btn')) {
            nameBtn.setAttribute('class', 'nostyle')
            populationBtn.setAttribute('class', 'nostyle')
            
            if (flagCapital === false) {
                flagCapital = true;
                clearContent()
                generateDivs(newResult.slice().sort(sortObjArr('capital', 'desc')));
                
                target.setAttribute('class', 'switchedon')
                
            } else {
                
                target.setAttribute('class', 'switchedoff')
                clearContent()
                generateDivs(newResult.slice().sort(sortObjArr('capital')));
                
                flagCapital = false;
            }            
        }

        if (target.matches('#popuation-btn')) {
            nameBtn.setAttribute('class', 'nostyle')
            capitalBtn.setAttribute('class', 'nostyle')
            
            if (flagPopulation === false) {
                
                clearContent()
                generateDivs(newResult.slice().sort(sortObjArr('population', 'desc')));
                
                target.setAttribute('class', 'switchedon');
                flagPopulation = true;
                
            } else {
                
                target.setAttribute('class', 'switchedoff')
                clearContent()
                generateDivs(newResult.slice().sort(sortObjArr('population')));
                
                flagPopulation = false;
                
            }            
        }
    })
}

//function to clear content
const clearContent = () => {
    countryDiv.innerHTML = '';
}







const sortObjArr = (key, order = 'asc') => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}


//graph section
//event listener for buttons
const graphButtons = document







