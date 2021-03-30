// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the Filter button
var button = d3.select("#filter-btn");
var dateField = d3.select("#datetime");


//function to display the data
function populateTable(dataInput){
    dataInput.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.html(value);
        });
    });
};

//display the data table
console.log(tableData);
populateTable(tableData);

// clear the table for new data
function clearTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };


// Create event handlers x
button.on("click", filterDate);

function filterDate() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the table
    clearTbody();

    // Get the value property of the input element
    var inputValue = dateField.property("value");
    
    //if no filter value is entered and button is clicked, display all the data
    if(inputValue.trim() === ""){
        var filteredData = tableData;
    }
    else{
    //filter based on Date 
        var filteredData = tableData.filter(dataInput => dataInput.datetime === inputValue.trim());
    };

    console.log(filteredData);
    populateTable(filteredData);
    
};