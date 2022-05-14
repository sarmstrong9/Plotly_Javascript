d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};


// Grab the entire Dataset
d3.json("samples.json").then(function(data){
    console.log(data);
});

// //Load json and grab only the "wfreq" values out of the JSON for each person
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// // Grab data from above and Sort results in descending order
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq)
//     .sort((a,b) => b - a);
//     console.log(wfreq);
// });

// Grab sorted data, but filter out "null" values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq)
    .sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// Use Object.entries() and forEach() to print all the metadata of the 
// first person in the samples.json() dataset (ID 940).
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
        {console.log(key + ' : ' + value);});
});



// // Use Plotly to create a bar chart with these arrays.
// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
// };

// var data = [trace];

// var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City"},
//     yaxis: {title: "Population Growth, 2016-2017"}
// };

// Plotly.newPlot("bar-plot", data, layout);
