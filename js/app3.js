//referencia al DOM
document.querySelector('#changeTextButton').addEventListener('click', function() {
    const paragraph = document.querySelector('#textParagraph');
    paragraph.textContent = paragraph.textContent === 'Texto cambiado!' ? 'Este es un párrafo de ejemplo.' : 'Texto cambiado!';
});

document.querySelector('#createElementButton').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Soy un nuevo elemento';
    document.querySelector('#elementContainer').appendChild(newElement);
});

document.querySelector('#removeElementButton').addEventListener('click', function() {
    const container = document.querySelector('#elementContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});

//eventos
document.querySelector('#textInput').addEventListener('input', function() {
    document.querySelector('#output').textContent = 'Texto ingresado: ' + this.value;
});
