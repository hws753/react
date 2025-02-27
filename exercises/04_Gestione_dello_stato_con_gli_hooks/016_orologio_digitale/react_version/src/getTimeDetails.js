const getTimeDetails = (date) => {
    const formattedTime = {
      firstSecond: String(date.getSeconds()).padStart(2, '0')[0],
      secondSecond: String(date.getSeconds()).padStart(2, '0')[1],
      firstMinute: String(date.getMinutes()).padStart(2, '0')[0],
      secondMinute: String(date.getMinutes()).padStart(2, '0')[1],
      firstHour: String(date.getHours()).padStart(2, '0')[0],
      secondHour: String(date.getHours()).padStart(2, '0')[1],
    };
    return formattedTime;
  };
  export default getTimeDetails;
  