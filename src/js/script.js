const lista = document.querySelectorAll(".navegacao li")

function ativaLink(){
lista.forEach((item) => {
    item.classList.remove("hovered");
});

this.classList.add("hovered");
}

lista.forEach(item => item.addEventListener("mouseover", ativaLink));

// Menu toggle
const toggle = document.querySelector(".toggle");
const navegacao = document.querySelector(".navegacao");
const main = document.querySelector(".main");

toggle.onclick = function(){
    navegacao.classList.toggle("ativo")
    main.classList.toggle("ativo")
};