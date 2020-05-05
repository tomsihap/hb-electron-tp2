const formInput = document.getElementById('form-input')
const formType = document.getElementById('form-type')
const formSend = document.getElementById('form-send')


formSend.addEventListener('click', function() {

    alert('Vous avez créé le ' + formType.value + ' nommé ' + formInput.value )

})