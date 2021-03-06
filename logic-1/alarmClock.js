// 5> Logic-1 -- alarmClock
// Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
function alarmClock(day, vacation){
    if(day === 0 || day === 6)
      if(vacation)
        return 'off';
      else
        return '10:00';
    if(day >= 1 && day <= 5)
      if(vacation)
        return '10:00';
      else
        return '7:00';
}
console.log(alarmClock(5, true));
