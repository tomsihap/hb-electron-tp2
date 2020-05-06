const remote = require('electron').remote;
const { BrowserWindow } = require('electron').remote;
const { ipcRenderer } = require('electron');

let elementsArray = JSON.parse(localStorage.getItem('elements'));

const elementsList = document.getElementById('elements-list');
elementsList.innerHTML = '';

elementsArray.forEach(function (element, index) {
    let elementHtml = '<li><strong>' + element.type + '</strong> - ' + element.title + '</li>';
    elementsList.innerHTML += elementHtml;
})

const btnAddElement = document.getElementById('btn-add-element');

btnAddElement.addEventListener('click', () => {

    const winAddElement = new BrowserWindow({
        width: 800,
        height: 600,
        parent: remote.getCurrentWindow(),
        webPreferences: {
            nodeIntegration: true
        }
    });

    winAddElement.loadFile('app/add-element/add-element.html');
    winAddElement.webContents.send('ok')
});

ipcRenderer.on('clicked-button', function() {
    console.log('Le bouton a été cliqué depuis la fenêtre enfant !');
});

ipcRenderer.on('element-added', function () {
    console.log('Un élément a été ajouté au localStorage !')

    // 1. On récupère les données depuis le localStorage, et on les parse
    let elementsArray = JSON.parse(localStorage.getItem('elements'))

    // 2. On fait une boucle forEach qui permet de scanner le tableau
    // et faire un console.log de chaque élément
    elementsArray.forEach(function(element, index) {
        console.log(element.type + " " + element.title)
    })

    // 3. On gère l'affichage dans le HTML

    // On récupère la balise HTML qui contiendra mes éléments
    const elementsList = document.getElementById('elements-list')

    // D'abord, on vide l'affichage existant si jamais il y avaitdéjà une liste affichée dans elementsList
    elementsList.innerHTML = '';

    // Ensuite, on fait une boucle sur tous les éléments
    elementsArray.forEach(function(element, index) {

        // On prépare le code HTML d'un élément de la liste
        let elementHtml = '<li><strong>'+ element.type +'</strong> - '+ element.title +'</li>';

        // Ensuite, on ajoute au sein du HTML de notre balise elementsList, l'élément à rajouter :
        elementsList.innerHTML += elementHtml;
    })
});