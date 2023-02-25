function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];
    let isOpen = false;
   
    switch (day) {
      case "Monday":
      case "Tueday":
      case "Wednesday":
      case "Thirsday":
      case "Friday":
      case "Saturday":
        isOpen = true;
        break;
      case "Sunday":
        isOpen = false;
        break;
    }
   
    switch (hour) {
      case "10":
      case "11":
      case "12":
      case "13":
      case "14":
      case "15":
      case "16":
      case "17":
      case "18":
        if(isOpen) {
        console.log("open");
        }
        break;
      default:
        console.log("closed");
        break;
    }
  }
  workingHours(["19","Friday"])
  