let calendarArea = document.getElementById("calendar")
let box = document.getElementsByClassName("boxCard")
let increase = document.getElementById("plusYear")
let decrease = document.getElementById("minusYear")
let myYear = document.getElementById("myYear")
let writeYear=document.getElementById("year")
// calendarArea.innerHTML= "<h1>Salam</h1>"

// var testElement = document.createElement("h1")
// testElement.classList = "active salam"
// testElement.innerText = "Derse diqqetle baxmalisiz."
// calendarArea.append(testElement)



let dayOfMonth = ["Su", "M", "Tu", "W", "Th", "F", "Sa"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate=new Date();

myYear.value = currentDate.getFullYear();
writeYear.innerText = myYear.value;

increase.addEventListener("click", function () {
    myYear.value++;
    writeYear.innerText = myYear.value;
    calendarArea.innerHTML = "";
    for (let i = 0; i < 12; i++) {
        let getMaxDay = getMonthLastDay(i)
        createBoxCard(getMaxDay, i)
        calendarArea.innerHTML += "<br/>"
    }
})

decrease.addEventListener("click", function () {
    myYear.value--;
    writeYear.innerText = myYear.value;
    calendarArea.innerHTML = "";
    for (let i = 0; i < 12; i++) {
        let getMaxDay = getMonthLastDay(i)
        createBoxCard(getMaxDay, i)
        calendarArea.innerHTML += "<br/>"
    }           
})



currentDate.setFullYear(2024);




let holidays=
    [
            [1,2],
            [14],
            [8],
            [1],
            [28],
            [26],
            [14,20],
            [7],
            [15],
            [18],
            [8,9,12,15,17],
            [31]
    ]


function createMonthNames(index) {
    let p = document.createElement("p")
    p.className = "months"
    p.innerText = months[index]
    return p
}


function createWeeks() {
    let weekDiv = document.createElement("div");
    weekDiv.className = "week";
    dayOfMonth.map((data) => {
        return weekDiv.innerHTML += `<span class="weekItem">${data}</span>`
    })
    return weekDiv
}


function getMonthLastDay(monthIndex) {
    let currentDay = new Date(myYear.value, monthIndex, 1)
    currentDay.setDate(currentDay.getDate() + 30)
    if (currentDay.getDate() == 31) {
        return 31
    } else if (currentDay.getDate() == 1) {
        return 30
    } else if (currentDay.getDate() == 2) {
        return 29
    }
    return 28
}


function getDayOfWeek(year, month, day) {
    return new Date(year, month, day).getDay()
}


function createBoxCard(dayList, month) {

    let first = getDayOfWeek(myYear.value, month, 1)
    let res = 42 - dayList - first
    let weekList = createWeeks()
    let box = document.createElement("div")
    let days = document.createElement("div")
    box.className = "boxCard"
    days.className = "days"
    let m =  createMonthNames(month)
    box.append(m)
    box.append(weekList)
    for (let a = 0; a < first; a++) {
        var test = createEmpty(a)
        days.append(test)
    }


    for (let i = 1; i <= dayList; i++) {
        let dayBox = document.createElement("span")
        dayBox.innerText = `${i}`

        if (holidays[month].includes(i)) {
            dayBox.className="active" 
        }
        days.append(dayBox)
    }
    for (let a = 0; a < res; a++) {
        var test = createEmpty(a)
        days.append(test)
    }

    box.append(days)
   

    calendarArea.append(box)

}


function createEmpty(num) {

    let dayBox = document.createElement("span")
    dayBox.innerHTML = ` `
    return dayBox


}

for (let i = 0; i < 12; i++) {
    let getMaxDay = getMonthLastDay(i)
    createBoxCard(getMaxDay, i)
    calendarArea.innerHTML += "<br/>"
}
