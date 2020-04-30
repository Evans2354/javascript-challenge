// from data.js
var tableData = data;


// YOUR CODE HERE!
// Select the button

var tbody = d3.select("#table-data");

var button2 = d3.select("#clear-btn");
var form = d3.select("#form-id");
console.log(form);
var Datefield = d3.select("#datetime");

// Create event handlers   
button2.on("click",reloaddata);

function reloaddata() {
  location.reload()
};

loadData()

function loadData(){

  tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  }

// Create event handlers 

Datefield.on("change",applyFilter);


//form.on("submit",applyRangeFilter());

function applyFilter() {
  
  d3.event.preventDefault();
  var inputValue = d3.select("#datetime").property("value");
  if (inputValue !=""){
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  var cleartable = d3.select("#table-data");

  // clear table before applying filter
  cleartable.html("");

  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  }
else {loadData()};
};

var button = d3.select("#filter-btn");
button.on("click", applyRangeFilter);

function applyRangeFilter() {
  d3.event.preventDefault();
  var inputValue =d3.select("#Date").property("value");
  var cityinputValue = d3.select("#city").property("value");
  var state =d3.select("#state").property("value");
  var countryinputValue = d3.select("#country").property("value");
  var shapeinputValue = d3.select("#shape").property("value");

  var filteredData = tableData.filter(ufo => (ufo.datetime === inputValue)&&(ufo.city===cityinputValue)&& (ufo.state ==state) && (ufo.country == countryinputValue) && (ufo.shape ==shapeinputValue)) 
  
  // clear table before applying filter
  var cleartable = d3.select("#table-data");
  cleartable.html("");

  //apply filter values
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
