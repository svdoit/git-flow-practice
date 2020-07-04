var dateText = document.getElementsByClassName('date')[0];
var timeText = document.getElementsByClassName('time')[0];
// 날짜를 가져오는 함수
function getDate() {
    var dayOfWeekText = ['일','월','화','수','목','금','토'];
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() +1;
    
    var dateNumber = date.getDate();
    var dayOfWeek = dayOfWeekText[date.getDay()];

    return `${year}-${month}-${dateNumber} (${dayOfWeek})`
}

// 시간을 가져오는 함수

function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var period = "오전";
    if (hours >= 12) {
        period = "오후";
        hours = hours - 12;
    }

    return `${period} ${hours}:${minutes}:${seconds}`
}

function init() {
    dateText.innerHTML = getDate();
    timeText.innerHTML = getTime();
}

init();
setInterval(init,1000);

// dateText.innerHTML = getDate(); 