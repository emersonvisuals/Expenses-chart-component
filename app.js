// toggle graph clicks

const mondayDiagram = document.querySelector('.mondayDiagram');
const tuesdayDiagram = document.querySelector('.tuesdayDiagram');
const wednesdayDiagram = document.querySelector('.wednesdayDiagram');
const thursdayDiagram = document.querySelector('.thursdayDiagram');
const fridayDiagram = document.querySelector('.fridayDiagram');
const saturdayDiagram = document.querySelector('.saturdayDiagram');
const sundayDiagram = document.querySelector('.sundayDiagram');

const monData = document.querySelector('.monP');
const tueData = document.querySelector('.tueP');
const wedData = document.querySelector('.wedP');
const thuData = document.querySelector('.thuP');
const friData = document.querySelector('.friP');
const satData = document.querySelector('.satP');
const sunData = document.querySelector('.sunP');

mondayDiagram.addEventListener('click', () => {
    mondayDiagram.classList.toggle('active');
    monData.classList.toggle('active');

    function checkClicks() {
        if (tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
            tueData.classList.remove('active');
            wedData.classList.remove('active');
            thuData.classList.remove('active');
            friData.classList.remove('active');
            satData.classList.remove('active');
            sunData.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
    
});

tuesdayDiagram.addEventListener('click', () => {
    tuesdayDiagram.classList.toggle('active');
    tueData.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
            monData.classList.remove('active');
            wedData.classList.remove('active');
            thuData.classList.remove('active');
            friData.classList.remove('active');
            satData.classList.remove('active');
            sunData.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

wednesdayDiagram.addEventListener('click', () => {
    wednesdayDiagram.classList.toggle('active');
    wedData.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
            monData.classList.remove('active');
            tueData.classList.remove('active');
            thuData.classList.remove('active');
            friData.classList.remove('active');
            satData.classList.remove('active');
            sunData.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

thursdayDiagram.addEventListener('click', () => {
    thursdayDiagram.classList.toggle('active');
    thuData.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
            monData.classList.remove('active');
            tueData.classList.remove('active');
            wedData.classList.remove('active');
            friData.classList.remove('active');
            satData.classList.remove('active');
            sunData.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

fridayDiagram.addEventListener('click', () => {
    fridayDiagram.classList.toggle('active');
    friData.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
            monData.classList.remove('active');
            tueData.classList.remove('active');
            wedData.classList.remove('active');
            thuData.classList.remove('active');
            satData.classList.remove('active');
            sunData.classList.remove('active');
            
        } else {
            return
        }
    }
    checkClicks(); 
});

saturdayDiagram.addEventListener('click', () => {
    saturdayDiagram.classList.toggle('active');
    satData.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
            monData.classList.remove('active');
            tueData.classList.remove('active');
            wedData.classList.remove('active');
            thuData.classList.remove('active');
            friData.classList.remove('active');
            sunData.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

sundayDiagram.addEventListener('click', () => {
    sundayDiagram.classList.toggle('active');
    sunData.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            monData.classList.remove('active');
            tueData.classList.remove('active');
            wedData.classList.remove('active');
            thuData.classList.remove('active');
            friData.classList.remove('active');
            satData.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});



// fetch data from JSON

fetch('./data.json')
.then(response => response.json())
.then(data => {
    monData.innerText = '$' + data[0].amount
    tueData.innerText = '$' + data[1].amount
    wedData.innerText = '$' + data[2].amount
    thuData.innerText = '$' + data[3].amount
    friData.innerText = '$' + data[4].amount
    satData.innerText = '$' + data[5].amount
    sunData.innerText = '$' + data[6].amount
})