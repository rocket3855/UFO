// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function forClick() {

  // 4a. Save the element that was changed as a variable.
  // 4b. Save the value that was changed as a variable.
  // 4c. Save the id of the filter that was changed as a variable.
  let dates = d3.select("#datetime").property("value");
  let Data = tableData;

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (dates) {
    Data = Data.filter(row => row.datetime === dates);
  }

 // 6. Call function to apply all filters and rebuild the table
  buildTable(Data);
}

// 2. Attach an event to listen for changes to each filter
d3.selectAll("#filter-btn").on("click", forClick);

// Build the table when the page loads
buildTable(tableData);
