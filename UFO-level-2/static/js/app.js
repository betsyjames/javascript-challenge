// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the Filter button
var button = d3.select("#filter-btn");


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


// Create event handlers x
button.on("click", filterDate);

function filterDate() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the table
    tbody.html("");

    var filteredData = tableData;
    //Get all the input fields
    var inputFields = document.getElementsByClassName("form-control");
    //console.log(inputFields);
   

    for(var i = 0; i < inputFields.length; i++) {

        //Get the value of the input fields
        var inputValue = d3.select("#" + inputFields[i].id).property("value");
        //console.log(inputValue);
    

        //filter based on all fields
        if (inputValue.trim() !== "") {
        var filteredData = filteredData.filter(dataInput => dataInput[inputFields[i].id].trim() === inputValue.trim());
        //console.log(inputFields[i].id);
        };
    };

    console.log(filteredData);
    populateTable(filteredData);
    
};
