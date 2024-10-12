

const locuri = document.querySelectorAll('.locuri');
locuri.forEach(loc => {
    loc.style.backgroundColor = '#f8f8f8';
    loc.style.border = '2px solid #ccc';
});

// Manevrarea DOM-ului (selectare dupa id, tag, clasa, selector CSS)
// const heading = document.getElementById('info');
// const paragraf = document.querySelector('p');
// const meniuri = document.getElementsByClassName('meniu');
// const firstLink = document.querySelector('.meniu ul li a');


function adaugaArticolBlog(titlu, imagineSrc, data, continut) {
    
    const articol = document.createElement('div');
    articol.className = 'articol';

    const titluElement = document.createElement('h2');
    titluElement.className = 'articol-title';
    titluElement.textContent = titlu;

    const pozaDiv = document.createElement('div');
    pozaDiv.className = 'poza';
    const imagine = document.createElement('img');
    imagine.src = imagineSrc;
    imagine.alt = `Imagine ${titlu}`;
    pozaDiv.appendChild(imagine);

    const detaliiDiv = document.createElement('div');
    detaliiDiv.className = 'detalii';

    const titluDetalii = document.createElement('h3'); 
    titluDetalii.textContent = 'Uite 5 motive de a călători care te vor face să-ți împachetezi bagajul';

    const dataElement = document.createElement('p');
    dataElement.className = 'data';
    dataElement.textContent = data;

    const continutDiv = document.createElement('div');
    continutDiv.className = 'continut';

    const continutParagraf = document.createElement('p');
    continutParagraf.textContent = continut;

    continutDiv.appendChild(continutParagraf);
    detaliiDiv.appendChild(titluDetalii);
    detaliiDiv.appendChild(dataElement);
    detaliiDiv.appendChild(continutDiv);

    articol.appendChild(titluElement);
    articol.appendChild(pozaDiv);
    articol.appendChild(detaliiDiv);

    const sectiuneBlog = document.getElementById('blog');
    sectiuneBlog.appendChild(articol);
}


adaugaArticolBlog(
    'Articol 4',
    'pozanoua.jpg',  
    '6 iunie 2023',
    'Uite 5 motive care să te vor face să pregătești chiar acum bagajul!\n\n' +
    '1. Noi experiențe și locuri de văzut - Niciun loc din lume nu este prea departe atâta timp cât există dorință. Mai mult, o călătorie este perfectă pentru a încerca lucruri noi, diferite, la care nu te-ai fi gândit vreodată. Exact, doboară limite și vezi dincolo de ele.\n\n' +
    '2. Călătoritul îți încarcă bateriile - Știu că ești grăbit și super ocupat, dar nu uita că starea psihică este foarte importantă. Lasă stresul cronic și anxietatea în spate și evadează către destinațiile tale de vis.\n\n' +
    '3. Călătoritul îți îmbogățești cunoștințele - Gândește-te că o escapadă îți permite să descoperi culturi, obiceiuri sau istorii ale popoarelor din jurul lumii. Crede-mă pe cuvânt, fiecare destinație îți oferă ceva unic, din care poți extrage ce îți este ție de folos.\n\n' +
    '4. Călătoritul îți oferă amintiri memorabile - Plimbă-te, fotografiază, gustă, simte, râzi copios și explorează. Știi cum se spune, unele experiențe sunt once in a lifetime.\n\n' +
    '5. Călătoritul îți permite să te redescoperi - O vacanță binemeritată îți oferă ocazia să reflectezi asupra vieții tale. Să-ți dai seama cine ești, ce dorești și care sunt aspectele ce îți aduc satisfacție. Lasă-ți puțin mintea să rătăcească.'
);


// modificarea evenimentelor generate de mouse și tastatură
const logareButton = document.querySelector('.logare a');
logareButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Butonul de logare a fost apăsat!');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        alert('Ai apăsat tasta Enter!');
    }
});

// modificare de proprietati , creare elemente, localStorage
const body = document.querySelector('body');
body.style.backgroundColor = '#e0f7fa';

const logo = document.querySelector('.logo');
logo.textContent = 'WanderPlanner';


document.addEventListener('DOMContentLoaded', (event) => {
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', proceseazaFeedback);
    }
});

function proceseazaFeedback(event) {
    event.preventDefault();

    const experienta = document.getElementById('experienta').value;
    const detalii = document.getElementById('detalii').value;
    const vaApela = document.getElementById('vaApela').checked;

    const feedback = {
        experienta,
        detalii,
        vaApela
    };

    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    alert('Feedback-ul a fost înregistrat!');

    setTimeout(function() {
        document.getElementById('MesajMultumire').style.display = 'block';
    }, 3000);
}

const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', proceseazaFeedback);
// apelarea functiei de adaugare inputuri (deocamdata nu este necesara)
//proceseazaFeedback();



//setInterval 
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        showSlide(slideIndex);
        intervalId = setInterval(nextSlide, 3000); 
    }
}
initializeSlider();

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 3000);
}

function nextSlide(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 3000);
}

// folosire array, math, schimbarea aleatoare a valorilor unor proprietati 

document.addEventListener('DOMContentLoaded', (event) => {
    
    const colors = ['red', 'pink', 'purple'];

    const locuriElements = Array.from(document.querySelectorAll('.locuri'));

    locuriElements.forEach(locuri => {
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        locuri.style.backgroundColor = randomColor;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('click', function(event) {
        if (event.target.classList.contains('meniu')) {
        
            console.log('Meniul a fost făcut clic!');
        }
    });
});


// Afisarea continutului unui element facut clic
document.addEventListener('DOMContentLoaded', () => {
    const blogLinks = document.querySelectorAll('#blog');
    blogLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Accesarea elementului făcut clic folosind 'event.target'
            console.log('Ai făcut clic pe link:', event.target.textContent);
        });
    });
});
// Ascunderea unui element atunci cand este facut clic pe un buton
document.addEventListener('DOMContentLoaded', () => {
    const feedbackSection = document.getElementById('feedback');
    const closeButton = document.getElementById('closeButton');

    if (feedbackSection && closeButton) {
        feedbackSection.addEventListener('click', function(event) {
            if (event.currentTarget === feedbackSection) {
               
                feedbackSection.style.display = 'none';
            }
        });

        closeButton.addEventListener('click', function(event) {
           
            event.stopPropagation();
        });
    }
});

