function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {

      return "Invalid Input";
    }
  

    const totalTime = interviewTimes.reduce((sum, time) => sum + time);


    const averageTime = Math.round(totalTime / interviewTimes.length);
  

    const remainingPeople = serialNumber - interviewTimes.length - 1;
  
 
  
    const waitingTime = remainingPeople * averageTime;
  
    return waitingTime;
  }
  
  const waitingTimeResult = waitingTime([7, 8, 3, 4, 5], "9");
  
  console.log(waitingTimeResult);