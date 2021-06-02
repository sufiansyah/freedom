import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../DATA.json';


const data = require('../DATA.json');
console.log(data);

let datarest = '';
data.restaurants.forEach(function(restaurants) {
    datarest += `
       <div>
            <article class="post-item">
                <h2 class="post-item__title"><a href="#">${restaurants.city}</a></h2>
                <img class="post-item__thumbnail"
                src="${restaurants.pictureId}" 
                alt="${restaurants.name}">
                <figcaption class="post-item__figcaption"><a href="#">Rating: ${restaurants.rating}</a></figcaption>
                <div class="post-item__content">
                    <h3 class="post-item__title"><a href="#">${restaurants.name}</a></h1>
                    <p class="post-item__description">${restaurants.description}</p>
                </div>
            </article>
        </div>
        `;
  });
  
  document.getElementById("rest").innerHTML = datarest;

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});