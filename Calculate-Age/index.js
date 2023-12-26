const btn = document.getElementById("btn");

btn.addEventListener("click", calculateAge);

function calculateAge() {
    const inputDay = document.getElementById('inputDay').value;
    const inputMonth = document.getElementById('inputMonth').value;
    const inputYear = document.getElementById('inputYear').value;

    const day = parseInt(inputDay, 10);
    const month = parseInt(inputMonth, 10);
    const year = parseInt(inputYear, 10);

    const currentDate = new Date();
    const birthdate = new Date(year, month - 1, day); // Fix month calculation
    let age = currentDate.getFullYear() - birthdate.getFullYear();

    if (
        currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDate() < birthdate.getDate())
    ) {
        age--;
    }

    let monthsAfterLastBirthday = 0;
    let daysAfterLastBirthday = 0;

    if (currentDate.getMonth() > birthdate.getMonth() || 
    (currentDate.getMonth() === birthdate.getMonth() && 
    currentDate.getDate() >= birthdate.getDate())
    ){
        // Calculate The Difference In Months And Days
        const birthdateThisYear = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
        const timeDifference = currentDate - birthdateThisYear;
        monthsAfterLastBirthday = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        daysAfterLastBirthday = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    }

    const displayItem = document.getElementById('displayAge');
    const displayItem2 = document.getElementById('displayMonth');
    const displayItem3 = document.getElementById('displayDay');
    //const yearsSpan = document.getElementById('yearsSpan');

    displayItem.innerText = `${age} Years`;
    displayItem.style.color = 'purple';
    displayItem2.innerText = `${monthsAfterLastBirthday} Months`;
    displayItem2.style.color = 'purple';
    displayItem3.innerText = `${daysAfterLastBirthday} Days`;
    displayItem3.style.color = 'purple';
}
