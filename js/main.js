let words = document.querySelectorAll(".word");

words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let netWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(() => {
            letter.className = "letter out";
        },i *80);
    });
    netWord.style.opacity="1";
    Array.from(netWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
            },340 + i*80);
        });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText ,3000);


// ////////////Circle

const circle=document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;
    
    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

/////Active Menu

// Selecionar os elementos do menu e seções
const menuLinks = document.querySelectorAll('header ul li a');
const sections = document.querySelectorAll('section');

// Função para verificar qual seção está visível e atualizar o menu
function updateActiveMenu() {
  const scrollY = window.scrollY;

  // Iterar pelas seções para encontrar a seção visível atual
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollY >= sectionTop - 97 && scrollY < sectionBottom) {
      // Remova a classe 'active' de todos os itens do menu e adicione à seção atual
      menuLinks.forEach(item => item.classList.remove('active'));
      menuLinks[index].classList.add('active');
    }
  });
}

// Chame a função para definir o estado inicial do menu
updateActiveMenu();

// Adicione um ouvinte de evento de rolagem para atualizar o menu durante a rolagem
window.addEventListener('scroll', updateActiveMenu);


// sticky navbar

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})



///////Selecionar elementos do DOM
const menuIcon = document.querySelector("#menu-icons");
const navList = document.querySelector(".navlist");
const navLinks = document.querySelectorAll(".navlist a");

// Função para alternar o ícone do menu e mostrar/ocultar a lista de navegação
function toggleNav() {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

// Adicionar evento de clique ao ícone do menu
menuIcon.addEventListener("click", toggleNav);

// Adicionar evento de clique aos links de navegação para fechar o menu
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        navList.classList.remove("open");
    });
});

// Fechar o menu quando ocorre um clique em qualquer lugar da janela
window.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
        menuIcon.classList.remove("bx-x");
        navList.classList.remove("open");
    }
});

// Impedir o evento de clique no menu de propagar para a janela
menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Fechar o menu quando a janela é redimensionada
window.addEventListener("resize", () => {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
});

// parallax

const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show-items", entry.isIntersecting);
    });
};

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, options);

const elementsToObserve = document.querySelectorAll(".scroll-scale, .scroll-bottom, .scroll-top");

elementsToObserve.forEach((element) => {
    observer.observe(element);
});


