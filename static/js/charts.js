function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {

    // 3. Create a variable that holds the samples array. 
    var samplesArray = data.samples
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleValuesIDArray = samplesArray.filter(sampleObj => sampleObj.id == sample);

    //  5. Create a variable that holds the first sample in the array.
    var sampleValuesID = sampleValuesIDArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs = sampleValuesID.otu_ids;
    var otuLabels = sampleValuesID.otu_labels;
    var sampleValues = sampleValuesID.sample_values;
    //console.log(otuIDs)
    //console.log(otuLabels)
    //console.log(sampleValues)


    // *************   Deliverable 1 - Bar Chart   ****************
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last.
    var yticks = otuIDs.map(String).slice(0,10).reverse();
    yticks = yticks.map(otuText => `OTU ${otuText}`)

    // 8. Create the trace for the bar chart. 
    var trace = {
        x: sampleValues.slice(0,10).reverse(),
        y: yticks,
        type: "bar",
        orientation: "h",
        text: otuLabels.slice(0,10).reverse(),
    }
    
    var barData = [trace];

    // 9. Create the layout for the bar chart. 
    var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        paper_bgcolor:"#FFF3"
        // xaxis: {title: ""},
        // yaxis: {title: ""}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar-plot", barData, barLayout);
    // **********  Deliverable 1 Complete   ************


    // *********** Deliverable 2 - Bubble Chart *********
    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
        x: otuIDs,
        y: sampleValues,
        text: otuLabels,
        mode: 'markers',
        marker: {
            size: sampleValues,
            color: otuIDs,
        }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
        title: "Bacteria Cultures Per Sample",
        xaxis: {title: "OTU ID",
                automargin: true},
        hovermode: "closest",
        paper_bgcolor:"#FFF3"
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // **********************  Deliverable 3  **********************
    // 3. Create a variable that holds the washing frequency.

    var metadataArray = data.metadata;
    var sampleMetaDataIDArray = metadataArray.filter(sampleObj => sampleObj.id == sample);
    var sampleMetaDataID = sampleMetaDataIDArray[0];
    var wfreqValue = Object.values(sampleMetaDataID);
    var wfreq = parseFloat(wfreqValue[6])

    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
        domain: { x: [0, 1], y: [0, 1] },
		value: wfreq,
		title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
		type: "indicator",
		mode: "gauge+number",
        gauge: {
            axis: { range: [null, 10],
            nticks: "6" },
            bar: {color: "black"},
            steps: [
              { range: [0, 2], color: "red" },
              { range: [2, 4], color: "orange" },
              { range: [4, 6], color: "yellow" },
              { range: [6, 8], color: "yellowgreen" },
              { range: [8, 10], color: "green" },
            ]},

    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
        paper_bgcolor:"#FFF3"
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);


  });
}
