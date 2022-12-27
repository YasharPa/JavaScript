// Building an Expanse Tracker.
let sortDiraction = false; // for the data sort diraction.
let personData = [
    { date: '01/01/2022', shop: 'Foot locker', cost: 100 },
    { date: '01/01/2022', shop: 'Foot locker', cost: 100 },
    { date: '01/01/2022', shop: 'Foot locker', cost: 300 },
    { date: '01/01/2022', shop: 'Foot locker', cost: 200 }
]; // the data array.

window.onload = () => {
  loadTableData(personData);
  addDataToTheTable();
}; // display our data in the table.

function loadTableData(personData){
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';
  for(let person of personData) {
    dataHtml += `<tr><td>${person.date}</td><td>${person.shop}</td><td>${person.cost +'ש"ח'}</td></tr>`;
  }
  console.log(dataHtml);
  tableBody.innerHTML = dataHtml;
}; // add's out data to html format.

// ceate the add data button.
function addDataToTheTable(){
  document.getElementById("add_button").onclick = function addData(){
    let costumerDate = document.getElementById("purchese_date").value;
    let costumerShop = document.getElementById("person_shop").value;
    let costumerCost = document.getElementById("price_number").value;
    let costumerPerchese = {date: costumerDate, shop:costumerShop , cost:costumerCost};
    personData.push(costumerPerchese);
};
};
