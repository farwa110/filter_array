const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; // Clear the table before adding new rows

  arr.forEach((each) => {
    let row = "<tr>";

    // Type
    if (each.type) {
      row += `<td>${each.type}</td>`;
    } else {
      row += `<td></td>`;
    }

    // Fuel
    if (each.fuel) {
      row += `<td>${each.fuel}</td>`;
    } else {
      row += `<td>-</td>`;
    }

    // Passengers
    if (each.passengers !== undefined) {
      row += `<td>${each.passengers}</td>`;
    } else {
      row += `<td>-</td>`;
    }

    // Stops (Check if stops exists and is an array)
    if (each.stops) {
      row += `<td>${each.stops.join(", ")}</td>`;
    } else {
      row += `<td>-</td>`;
    }

    // Owned By
    if (each.ownedBy) {
      row += `<td>${each.ownedBy}</td>`;
    } else {
      row += `<td>-</td>`;
    }

    // Electric
    //     If isElectric is true, we display "Yes".
    // If isElectric is false, we display "No".
    // The same logic is applied for the isTandem property as well.

    if (each.isElectric !== undefined) {
      if (each.isElectric) {
        row += `<td>yes</td>`; // Show "Yes" instead of "true"
      } else {
        row += `<td>No</td>`;
      }
    } else {
      row += `<td>-</td>`;
    }

    // Tandem
    if (each.isTandem !== undefined) {
      if (each.isTandem) {
        row += `<td>yes</td>`;
      } else {
        row += `<td>No</td>`;
      }
    } else {
      row += `<td>-</td>`;
    }

    row += "</tr>"; // Close the table row

    tbodyPointer.innerHTML += row; // Add the row to the table body
  });
}

// Button event listeners
document.getElementById("showAll").addEventListener("click", function () {
  showTheseVehicles(vehicles); // Show all vehicles
});

document.getElementById("showElectric").addEventListener("click", function () {
  let electricVehicles = [];
  vehicles.forEach((vehicle) => {
    if (vehicle.isElectric === true) {
      electricVehicles.push(vehicle);
    }
  });
  showTheseVehicles(electricVehicles); // Show electric vehicles
});

document.getElementById("showBigVehicles").addEventListener("click", function () {
  let bigVehicles = [];
  vehicles.forEach((vehicle) => {
    if (vehicle.passengers > 2) {
      bigVehicles.push(vehicle);
    }
  });
  showTheseVehicles(bigVehicles); // Show vehicles with more than 2 seats
});

document.getElementById("showJonas").addEventListener("click", function () {
  let vehiclesOwnedByJonas = [];
  vehicles.forEach((vehicle) => {
    if (vehicle.ownedBy === "Jonas") {
      vehiclesOwnedByJonas.push(vehicle);
    }
  });
  showTheseVehicles(vehiclesOwnedByJonas); // Show vehicles owned by Jonas
});

document.getElementById("showRugbrod").addEventListener("click", function () {
  let rugbrodVehiclesWithMoreThanOnePassenger = [];
  vehicles.forEach((vehicle) => {
    if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
      rugbrodVehiclesWithMoreThanOnePassenger.push(vehicle);
    }
  });
  showTheseVehicles(rugbrodVehiclesWithMoreThanOnePassenger); // Show Rugbrød vehicles with more than 1 passenger
});

// Show all vehicles by default when the page loads
showTheseVehicles(vehicles);
//***********************************************************************************************************************************/
//another mehtod to remove undefined by empty the strings //
//document.queryselectorAll("td").forEach((cell))=> {
// if (cell.textContent=== "undefined")  }
// cell.textContent = "" ;
//}
//});

// ${beautify(each.type)}
//function beautify(str){
//if (str===undefined){
// str ="-";
//}

// if(str ===true){
//   str ="X"
// }
// return = str;
// }
//*****************WE CAN ALSO  USE SWITCH AND BREAK INSTEAD OF  *********** */
// function beautify(str){
// switch (str){
//   case undefined:
//     str ="-";
//     break;
//     case true:
//       str = "X";
//       break;
// }

// return str ;

//*****************************BUTTONS IN JAVA SCRIPT************************ */
// Create buttons dynamically
// body.innerHTML += `<button id="all_btn">Alle</button>`;
// body.innerHTML += `<button id="fuel_btn">Fuel</button>`;
// body.innerHTML += `<button id="jonas_btn">Jonas</button>`;
// body.innerHTML += `<button id="rugbrod_btn">Rugbrød</button>`;

// // Add event listeners to each button
// document.querySelector("#all_btn").addEventListener("click", () => {
//     console.log("Alle button clicked");
// });

// document.querySelector("#fuel_btn").addEventListener("click", () => {
//     console.log("Fuel button clicked");
// });

// document.querySelector("#jonas_btn").addEventListener("click", () => {
//     console.log("Jonas button clicked");
// });

// document.querySelector("#rugbrod_btn").addEventListener("click", () => {
//     console.log("Rugbrød button clicked");
// });

//****************************************************************************** */
// function filterHandler(filter) {
//   switch (filter) {
//     case "all":
//       filterdArr = vehicles;

//       break;
//     case "isElectric":
//       filterdArr = vehicles.filter((vehicles) => vehicle.isElectric);
//       break;
//   }
//   showTheseVehicles(filterdArr);
// }
// const tbodyPointer = document.querySelector("body");

// const alleElDrevneFartoejer = vehicles.filter((vehicle) => vehicle.isElectric);
// const alleElDrevneFartoejer = vehicles.filter((vehicle) => vehicle.passengers > 2);
// const alleElDrevneFartoejer = vehicles.filter((vehicle) => vehicle.isElectric && vehicle.ownedBy);
// const alleElDrevneFartoejer = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.isTandem);
// showTheseVehicles(vehicles);
// function showTheseVehicles(arr) {
//   tbodyPointer.innerHTML = "";
//   console.log(arr);
// }
