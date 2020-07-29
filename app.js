let button = document.querySelector('#button');
let name = document.querySelector('#name');
let height = document.querySelector('#height');
let mass = document.querySelector('#mass');
let birthYear = document.querySelector('#birth-year');

console.log(birthYear);


function getInfo(){

    updateInfoLoading();

    let randomNumber = Math.floor((Math.random() * 88) + 1)

    let API_URL = (`https://swapi.dev/api/people/${randomNumber}`)

    axios.get(API_URL)
    .then(response => {
        console.log(response.data);
        
        updateInfo(response.data)
    })
    .catch(e => {
        updateInfoError()
    })
}

function updateInfo(data){
    name.innerText = data.name;
    height.innerText = `Height: ${data.height}`;
    mass.innerText = `Mass: ${data.mass}`;
    birthYear.innerText = `Birth: ${data.birth_year}`;
}

function updateInfoError(){
    name.innerText = 'Damn, an error occurred';
    height.innerText = '';
    mass.innerText = '';
    birthYear.innerText = '';
}

function updateInfoLoading(){
    name.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>';
    height.innerText = '';
    mass.innerText = '';
    birthYear.innerText = '';
}

button.addEventListener('click', getInfo);