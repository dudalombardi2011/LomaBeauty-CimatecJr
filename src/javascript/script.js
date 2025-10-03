const hamburguerbutton = document.querySelector("#hamburguer-button");
const closebutton = document.querySelector("#closebutton");
const mobilemenu = document.querySelector("#mobile-menu");

/*definindo as clases*/
const backgroundImages = [
    'bg-image1',
    'bg-image2',
    'bg-image3'
];

let currentImageIndex = 0;

function changeBackground(headerElement) {
    headerElement.classList.remove(backgroundImages[currentImageIndex]);
    /*avança pro proximo e volta se for o ultimo*/
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    headerElement.classList.add(backgroundImages[currentImageIndex]);
}

window.addEventListener('DOMContentLoaded', () => { 
    const header = document.querySelector("#header-carrossel"); 
    
    if (header) {
        header.classList.add(backgroundImages[currentImageIndex]);
        setInterval(() => changeBackground(header), 5000); 
    }
});

hamburguerbutton.addEventListener("click", function(){
    mobilemenu.classList.add("flex");
})

closebutton.addEventListener("click", function(){
    mobilemenu.classList.remove("flex");
})

/*rolagem automatica do carrossel*/
let count = 1;
document.getElementById("radio1").checked=true;

setInterval( function(){
    nextImage();
}, 5000)
/*ta trocando de 5 em 5 seg*/

function nextImage(){
    count++;
    if (count>3){
        count=1;
    }
    document.getElementById("radio"+count).checked=true;
    /*vai pra proxima image*/
}

const openButtons = document.querySelectorAll('.open-modal');

openButtons.forEach(button => {
    button.addEventListener('click', () => { 
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
 
        modal.showModal();
        document.body.style.overflow="hidden"; //supostamente trava o scroll
    })
})

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close();
        document.body.style.overflow="";
    })
})
