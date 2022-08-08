// toggle graph clicks

const mondayDiagram = document.querySelector('.mondayDiagram');
const tuesdayDiagram = document.querySelector('.tuesdayDiagram');
const wednesdayDiagram = document.querySelector('.wednesdayDiagram');
const thursdayDiagram = document.querySelector('.thursdayDiagram');
const fridayDiagram = document.querySelector('.fridayDiagram');
const saturdayDiagram = document.querySelector('.saturdayDiagram');
const sundayDiagram = document.querySelector('.sundayDiagram');

mondayDiagram.addEventListener('click', () => {
    mondayDiagram.classList.toggle('active');

    function checkClicks() {
        if (tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
    
});

tuesdayDiagram.addEventListener('click', () => {
    tuesdayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

wednesdayDiagram.addEventListener('click', () => {
    wednesdayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

thursdayDiagram.addEventListener('click', () => {
    thursdayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});


fridayDiagram.addEventListener('click', () => {
    fridayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

saturdayDiagram.addEventListener('click', () => {
    saturdayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || sundayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            sundayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});

sundayDiagram.addEventListener('click', () => {
    sundayDiagram.classList.toggle('active');

    function checkClicks() {
        if (mondayDiagram.classList.contains('active') || tuesdayDiagram.classList.contains('active') || wednesdayDiagram.classList.contains('active') || thursdayDiagram.classList.contains('active') || fridayDiagram.classList.contains('active') || saturdayDiagram.classList.contains('active')) {
            mondayDiagram.classList.remove('active');
            tuesdayDiagram.classList.remove('active');
            wednesdayDiagram.classList.remove('active');
            thursdayDiagram.classList.remove('active');
            fridayDiagram.classList.remove('active');
            saturdayDiagram.classList.remove('active');
        } else {
            return
        }
    }
    checkClicks(); 
});