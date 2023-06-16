function moneyToCountry(country, money) {
    // declare exchange rates
    let indiaRate = 81.94; 
    let finlandRate = 0.91; 
    let polandRate = 4.07; 
    let croatiaRate = 7.042; 
    let canadaRate = 1.32;
    let bdtRate = 108.32;
  
    // check if money is given and is at least 5000 rupees
    if ( money <= 5000) {
      // declare a variable to store the result
      let result = 0;
      if(money <= 0){
        return "invaild money"
    }
    else {
      // show an error message if the amount of money is not given or is less than 5000 usd
      console.log("Please include the amount of money and make sure it is at least 5000 usd");
    }
      // use a switch statement to check which country is selected and apply the exchange rate
      switch (country) {
        case "India":
          result =  money  * indiaRate + " indian rupee";

          break;
        case "Finland":
          result = money * finlandRate + " euro";
           
          break;
        case "Poland":
          result = money * polandRate + " zolty";
         
          break;
        case "Croatia":
          result = money * croatiaRate + " croatian HRK";
          
          break;
        case "Canada":
          result = (money * canadaRate + " canadia doller");
          
          break;
        case "Bangladesh":
          result = (money * bdtRate + " BDT");
          
          break;
        default:
          // show an error message if the country name is not valid
          console.log("Invalid country name");
      }
      // return the result
      return result;
    }
  }

  let country = "Canada"
  let money = 100;
  let convertCurrency = moneyToCountry(country, money);
  console.log(convertCurrency);