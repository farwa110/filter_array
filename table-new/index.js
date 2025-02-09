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
  arr.forEach((each) => {
    let row = "<tr>";

    // Type
    row += `<td data-label="Type">${each.type ? each.type : ""}</td>`;

    // Fuel
    row += `<td data-label="Fuel">${each.fuel ? each.fuel : ""}</td>`;

    // Passengers
    row += `<td data-label="Passengers">${each.passengers !== undefined ? each.passengers : ""}</td>`;

    // Stops
    row += `<td data-label="Stops">${each.stops ? each.stops.join(", ") : ""}</td>`;

    // Owned By
    row += `<td data-label="Owned By">${each.ownedBy ? each.ownedBy : ""}</td>`;

    // Electric
    row += `<td data-label="Electric">${each.isElectric !== undefined ? (each.isElectric ? "true" : "false") : ""}</td>`;

    // Tandem
    row += `<td data-label="Tandem">${each.isTandem !== undefined ? (each.isTandem ? "true" : "false") : ""}</td>`;

    row += "</tr>"; // Close the table row

    tbodyPointer.innerHTML += row; // Add the row to the table body
  });
}
