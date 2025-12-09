// console.log("Terence");

// string

let myVar = "ma variable";
myVar = "variable";
const myVar2 = "ma variable 2";



// console.log(myVar);

// boolean

let isTrue = "true";
let isFalse = "false";

// console.log(isTrue);

// chiffres et opérateurs

let chiffre1 = 4;
let chiffre2 = 3;
// console.log(typeof chiffre1, typeof chiffre2);

// template string, litteraux de gabarits et concat

let test = "test" + myVar + "value";


// console.log(test);

//if(chiffre1 <= 3) {
    // console.log("condition est validé");
//}
//else if (chiffre1 <= 4){
    // console.log("je passe la");
//}
// else {
    // console.log("condition pas valide");
// }

// tableaux

let array = ["item 1" , "item 2" , "item 3" , "item 4"];
// console.log(array);


// objets

let objet = {
    title: "Mon titre",
    description: "ma description"
}

// console.log(objet.title, objet.description);

// les boucles, while , for , foreach

// for (let i= 0; i < 5; i++) {
    // console.log(i);
// }

//array.forEach(item => {
    //console.log(item);
    
//});

// fonctions

//function myFunction(item, item2){
    //console.log(item, item2);
    
//}
const myFunction = (item, item2) => {
    //console.log(item,item2);
    
}

myFunction("toto", 7);
myFunction("maman", 9);

const calcul = (nb1, nb2) => {
   return nb1 + nb1;
    
}

let result = calcul(4,5);
//console.log(result);

// interagir avec le dom // methode, propriete, evenement

//console.log(document.body);

// selectors

// let header = document.querySelector(".header");

// console.log(header);

// let grids = document.querySelectorAll('.grid');
// console.log(grids);

//grids.forEach(grid => {
    //(grid.classList.add('titi'));
    //console.log(grid);
    
// });

// evenements les plus courants 

// document.addEventListener("DOMContentLoaded", () => {
   // console.log("DOM chargé");
// });

//header.addEventListener("mouseenter", (e) => {
   // console.log("souris entre");
//});

// insertion dom et navigation dans le dom

let div = document.createElement("div");
div.classList.add("top");
div.innerHTML = `<span>Top zone</span>`
//console.log(header.nextElementSibling);


// function 

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click' , () => {
       header.classList.toggle('animation-nav');
    });

    links.forEach(link => {
        link.addEventListener('click' , () => {
        header.classList.remove('animation-nav');
        });
    });

}
menuMobile();

/* Portfolio */

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');
    
    const showProjets = (elem) => {
        console.log(elem);
        
        projets.forEach(projet => {
            // console.log(projet);
        });
    }
  
    tabs.forEach (elem => {
        elem.addEventListener('click', (event) => {
        event.preventDefault();
        let filter = elem.getAttribute('data-filter');
        // console.log(filter);
        showProjets(filter)
        elem.classList.add('active');
        });
    })
}

// effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.competences .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();





