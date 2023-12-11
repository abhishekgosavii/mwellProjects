window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const email = sessionStorage.getItem('EMAIL');
    var date = sessionStorage.getItem('DATE');
    var number = sessionStorage.getItem('NUMBER');
    var slot = sessionStorage.getItem('SLOT');
    var age = sessionStorage.getItem('AGE');
    const gender = sessionStorage.getItem('GENDER');
    const doctor = sessionStorage.getItem('DOCTOR');


    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-date').innerHTML = date;
    document.getElementById('result-number').innerHTML = number;
    document.getElementById('result-slot').innerHTML = slot;
    document.getElementById('result-age').innerHTML = age;
    document.getElementById('result-gender').innerHTML = gender;
    document.getElementById('result-doctor').innerHTML = doctor;

})