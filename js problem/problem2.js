
function resortCost(people, perNight) {
    if (people < 1 || people > 150) {
      return ("Invalid number of people");
    } else {
      let cost = 0;
      if (people <= 50) {
        cost = (people* 5000 *perNight)
      } else if (people <= 100) {
        cost = (people* 4000 * perNight)
      } else if (people <= 150){ 
        cost = (people* 3000*perNight)
      }
      return cost;
    }
  }

  let people = 40;
  let perNight = 1;
let totalCost = resortCost(people, perNight)

console.log(totalCost);