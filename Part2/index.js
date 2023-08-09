console.log("You got this!!")


const idInput = document.querySelector('#idInput')
//const idInput = document.getElementById("idInput")
const colorInput = document.querySelector('#colorInput')


function setCard() {
    const card = document.querySelector(`#${idInput.value}`);
    card.style.color = colorInput.value;
    console.log(card)
}