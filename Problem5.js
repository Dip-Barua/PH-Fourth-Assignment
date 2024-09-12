function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {

      return "Invalid Input";
    }
  

    const totalTime = waitingTimes.reduce((sum, time) => sum + time);


    const averageTime = Math.round(totalTime / waitingTimes.length);
  

    const remainingPeople = serialNumber - waitingTimes.length - 1;
  
 
  
    const waitingTime = remainingPeople * averageTime;
  
    return waitingTime;
  }
  
  const waitingTimeResult = waitingTime([7, 8, 3, 4, 5], "9");
  
  console.log(waitingTimeResult);