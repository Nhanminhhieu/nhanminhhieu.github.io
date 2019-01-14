var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
window.onload = function createCb() {
    var tableDate = document.getElementById("table__date");
    var date = new Date();
    for(var i = 1 ; i < 13; i++ ) {
        var option = document.createElement("option");
        option.value = i;
        option.text = month[i-1];
        if((i-1) == date.getMonth()) {
            option.selected = true;
        }
        document.getElementById("cbo__month").appendChild(option);
    }
    for(var i = (date.getFullYear() - 70) ; i < (date.getFullYear() + 70); i++ ) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        if(i == date.getFullYear()) {
            option.selected = true;
        }
        document.getElementById("cbo__year").appendChild(option);
    }
}
function createCalender() {
    var tableDate = document.getElementById("table__date");
    tableDate.style.visibility = "visible";
    var date = new Date();
    var count = 0;
    for(var i = 0 ; i < 6; i++ ) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            var td = document.createElement("td");
            td.id = count++;
            tr.appendChild(td);
        }
        tableDate.appendChild(tr);
    }
    printDay("01","01","2019");
    document.getElementById("datetime").onclick ='';
}
function checkMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
function resetTable() {
    for(var i = 0 ; i < 42; i++ ) {
        document.getElementById(i).style.background = "#2d2d2d";
        document.getElementById(i).innerText = '';
        document.getElementById(i).onclick = '';
        document.getElementById(i).value = '';
    }
//    document.getElementById("cbo__month").removeChild();
}
function printDay(day, month, year) {
    resetTable();
    var chuoingay = month + "/" + day + "/" + year;
    var date = new Date(chuoingay);
    var datenow = new Date();
    var select_month = document.getElementById("cbo__month").value;
    var select_year = document.getElementById("cbo__year").value;
    countday = 1;
    for(var i = date.getDay() ; i < 42; i++ ) {
        document.getElementById(i).innerText = countday++;
        document.getElementById(i).style.background = "#fff";
        document.getElementById(i).onclick = click1111;
        document.getElementById(i).value = countday-1;
        if((datenow.getMonth()== (select_month - 1)) && (datenow.getFullYear() == select_year)) {
            if((datenow.getDate()) == countday - 1)
                document.getElementById(i).style.background = "#00ace6";
        }
        if(countday > checkMonth(month,year))
            break;
    }
}
function selectMonthAndYearChange() {
    var select_month = document.getElementById("cbo__month").value;
    var select_year = document.getElementById("cbo__year").value;
    printDay("01",select_month,select_year)
}
function giamNam() {
    if(document.getElementById("cbo__year").value == 1949)
        return;
    document.getElementById("cbo__year").value--;
    selectMonthAndYearChange();
}
function giamThang() {
    if(document.getElementById("cbo__month").value == 1)
        return;
    document.getElementById("cbo__month").value--;
    selectMonthAndYearChange();
}
function tangNam() {
    if(document.getElementById("cbo__year").value == 2088)
        return;
    document.getElementById("cbo__year").value++;
    selectMonthAndYearChange();
}
function tangThang() {
    if(document.getElementById("cbo__month").value == 12)
        return;
    document.getElementById("cbo__month").value++;
    selectMonthAndYearChange();
}
function deleteTable() {
    for(var i = 2 ; i < 8; i++)
        document.getElementById("table__date").deleteRow(2);
}
function checkValueDate(valueDate) {
    if(valueDate < 10)
        return "0"+valueDate;
    return valueDate;
}
function click1111() {
    var select_month = document.getElementById("cbo__month").value;
    var select_year = document.getElementById("cbo__year").value;
    var chuoingay = checkValueDate(this.value) + "/" + checkValueDate(select_month) + "/" + select_year;
    document.getElementById("datetime").value = chuoingay.toString();
    var tableDate = document.getElementById("table__date");
    deleteTable();
    document.getElementById("datetime").onclick =createCalender;
    tableDate.style.visibility = "collapse";
}
