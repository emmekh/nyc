// Устанавливаем дату до окончания отсчета
const newYear = '1 Jan 2025';

// Обращаемся к элементам
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

function count(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    // Вычисляем общее количество секунд
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    if(totalSeconds <= 0){
        document.getElementById('label').innerHTML = "Новый 2024 Год настал!!!";
        return;
    } else{
        // Вычисляем дни, часы, минуты и секунды
        const Days = Math.floor(totalSeconds / 3600 / 24);
        const Hours = Math.floor(totalSeconds / 3600) % 24;
        const Mins = Math.floor(totalSeconds / 60) % 60;
        const Secs = Math.floor(totalSeconds) % 60;
    
        
        // Подставляем зполученные значения в html
        daysEl.innerHTML = Days;
        hoursEl.innerHTML = formatTime(Hours);
        minsEl.innerHTML = formatTime(Mins);
        secsEl.innerHTML = formatTime(Secs);
    }
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

count();
setInterval(count, 1000);
