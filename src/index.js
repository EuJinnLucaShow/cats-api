import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const select = document.getElementById('breed-select');
const catInfo = document.querySelector('.cat-info');
const spinner = document.querySelector('.spinner');
const slimSelect = new SlimSelect({
  select: select,
  settings: {
    placeholderText: 'Search breeds',
  }
});

const errorMessage = {
  title: 'Error',
  message: '❌ Oops! Something went wrong! Try reloading the page!',
  position: 'topRight',
  color: 'red',
};

function showElement(element) {
  element.style.display = 'flex';
}

function hideElement(element) {
  element.style.display = 'none';
}

function displayCatInfo(catData) {
  const cat = catData[0].breeds[0];
  catInfo.innerHTML = `
    <div class="wrapper">
      <img class="cat-img" src="${catData[0].url}" alt="Cat Image"/>
      <div>
        <h2>${cat.name}</h2>
        <article><b>Description:</b> ${cat.description}</article><br>
        <article><b>Temperament:</b> ${cat.temperament}</article><br>
        <article><b>Country:</b> ${cat.origin}</article>
        <img src="https://flagsapi.com/${cat.country_code}/shiny/64.png" alt="country code"> 
      </div>
    </div>
  `;
  showElement(catInfo);
}

async function handleBreedSelection() {
  try {
    const selectedBreedId = select.value;
    hideElement(catInfo);
    showElement(spinner);
    const catData = await fetchCatByBreed(selectedBreedId);
    displayCatInfo(catData);
  } catch (error) {
    iziToast.show(errorMessage);
  } finally {
    hideElement(spinner);
  }
}

async function initializeApp() {
  try {
    const breeds = await fetchBreeds();
    const breedOptions = breeds.map(({ id, name }) => ({ text: name, value: id }));
    slimSelect.setData([{ placeholder: true, text: '' }, ...breedOptions]);
    select.addEventListener('change', handleBreedSelection);
  } catch (error) {
    iziToast.show(errorMessage);
  } finally {
    hideElement(spinner);
  }
}

initializeApp();
