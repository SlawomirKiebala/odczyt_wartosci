'use strick'

const form=document.querySelector('form');
form.addEventListener('submit',function(e) {
    const div = document.getElementById('result');
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    if(name==='' || surname==='') {
        e.preventDefault();
        div.innerHTML='Podaj wszystkie dane'
    } else {
        e.preventDefault();
        div.innerHTML= 'Twoje imię to: ' + "<b>" + name + "</b>" + "<br>" +'Twoje nazwisko to: ' + "<b>" + surname + "</b>";
        input=document.getElementById('name').value=''
        input=document.getElementById('surname').value=''
    }
});
