const { ipcRenderer } = require("electron");
const remote = require('electron').remote;

const formInput = document.getElementById('form-input')
const formType = document.getElementById('form-type')
const formSend = document.getElementById('form-send')


formSend.addEventListener('click', function() {

    alert('Vous avez créé le ' + formType.value + ' nommé ' + formInput.value )

    // Créez la variable "element" qui contient un objet, avec les données de l'utilisateur

    let element = {
        title: formInput.value,
        type: formType.value
    }

    // Créez le tableau "elementsArray", vide, pour avoir par défaut un tableau
    // d'éléments vide que l'on déclare
    let elementsArray = [];

    // Vérifiez si la clé "elements" existe dans le localStorage. Pour cela :
    if ( localStorage.getItem('elements') !== null  ) {

        // Si le tableau "elements" existe dans localStorage, alors on l'assigne à elementsArray
        // pour récupérer les éléments existants
        elementsArray = JSON.parse(localStorage.getItem('elements'))
    }

    // Ajoutez l'élément utilisateur (variable "element") au tableau "elementsArray"
    // grâce à push() : tableau.push(element_a_rajouter)
    elementsArray.push(element)

    // Enfin, enregistrez en version strigifiée 

    localStorage.setItem("elements", JSON.stringify(elementsArray));

    remote.getCurrentWindow().getParentWindow().send('element-added');
})


const btnSendMessage = document.getElementById('btn-send-message')

btnSendMessage.addEventListener('click', function() {
    remote.getCurrentWindow().getParentWindow().send('clicked-button');
})
