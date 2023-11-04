import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const select = document.getElementById('breed-select');
const catInfo = document.querySelector('.cat-info');
const spinner = document.querySelector('.spinner');

const slimSelect = new SlimSelect({
  select: select,  
});

const errorMessage = {
  title: 'Error',
  message: '❌ Oops! Something went wrong! Try reloading the page!',
  position: 'topCenter',
  color: 'red',
};

function showElement(element) {
  element.style.display = 'block';
}

function hideElement(element) {
  element.style.display = 'none';
}

async function handleBreedSelection() {
  try {
    const selectedBreedId = select.value;
    if (selectedBreedId === 'Search breeds') return;
    hideElement(catInfo);
    showElement(spinner);

    const catData = await fetchCatByBreed(selectedBreedId);

    displayCatInfo(catData);
  } catch (error) {
    iziToast.show(errorMessage);
  }

  hideElement(spinner);
}

function displayCatInfo(catData) {
  const cat = catData[0].breeds[0];
  catInfo.innerHTML = `
    <div class="wrapper">
      <img class="cat-img" src="${catData[0].url}" alt="Cat Image"/>
      <div>
        <h2>${cat.name}</h2>
        <p><b>Description:</b> ${cat.description}</p>
        <p><b>Temperament:</b> ${cat.temperament}</p>
      </div>
    </div>
  `;
  showElement(catInfo);
}

function initializeApp() {
  try {
    fetchBreeds()
      .then(breeds => {
    const data = breeds.map(({ id, name }) => ({ text: name, value: id }));
    slimSelect.setData([{ placeholder: true, text: 'Search breeds' },...data]);    
})  
    select.addEventListener('change', handleBreedSelection);
  } catch (error) {
    iziToast.show(errorMessage);
  }

  hideElement(spinner);
}

initializeApp();
