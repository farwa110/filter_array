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

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    let row = "<tr>";

    // Type
    row += `<td>${each.type || ""}</td>`; // Empty if type is undefined or null

    // Fuel
    row += `<td>${each.fuel || ""}</td>`; // Empty if fuel is undefined or null

    // Passengers
    row += `<td>${each.passengers !== undefined ? each.passengers : ""}</td>`; // Empty if passengers is undefined or null

    // Stops (Check if stops exists and is an array)
    row += `<td>${Array.isArray(each.stops) ? each.stops.join(", ") : ""}</td>`; // Join stops if it exists

    // Owned By
    row += `<td>${each.ownedBy || ""}</td>`; // Empty if ownedBy is undefined or null

    // Electric (Check for true/false)
    row += `<td>${each.isElectric !== undefined ? (each.isElectric ? "Yes" : "No") : ""}</td>`; // Show Yes/No based on boolean

    // Tandem (Check for true/false)
    row += `<td>${each.isTandem !== undefined ? (each.isTandem ? "Yes" : "No") : ""}</td>`; // Show Yes/No based on boolean

    row += "</tr>"; // Close the table row

    tbodyPointer.innerHTML += row; // Add the row to the table body
  });
}

//*********************number 1 filter electric vehicles only*************************************//
const electricvehicles = vehicles.filter((vehicle) => vehicle.isElectric === true);
console.log(electricvehicles);

//*****************number 2 filter vehicles with more than 2 seats*************************** */
const bigVehicle = vehicles.filter((vehicle) => vehicle.passengers > 2);
console.log(bigVehicle);

//******************************number 3*************************** */
const ownerJonas = vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas");
console.log(ownerJonas);
// const ownerJonas = vehicles.filter((vehicle) => vehicle.isElectric && vehicle.ownedBy === true);

//********************************number 4 rugbrød eldrevne plads med 2 *************** */
const rugbrodVehiclesWithMoreThanOnePassenger = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
console.log(rugbrodVehiclesWithMoreThanOnePassenger);
