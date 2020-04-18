export const getFancyDate = dateInput => {
    const dateObj = new Date(dateInput);
    const dayNum = dateObj.getDay();
    const dayName = getWeekDayName(dayNum);
    const date = dateObj.getDate();
    const monthNum = dateObj.getMonth();
    const monthName = getMonthName(monthNum);
    const year = dateObj.getFullYear();
    const fancyDate = `${dayName}, ${date} ${monthName} ${year}`;
    return fancyDate;
  };
  
  export const getMonthName = monthNum => {
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months[monthNum + 1];
  };
  
  export const getWeekDayName = dayNum => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayNum];
  };
  