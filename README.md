# Plotly_Javascript

## Purpose of the Challenge

Build an interactive dashboard using HTML, JavaScript, and Plotly to present data about bacteria found in a test subjects belly button.  This bacteria data is presented in a JSON file and is being used to determine certain bacteria strains associated with flavors of lab grown meat.  The data is then presented on an easy to read/update webpage that will help the scientists correlate bacteria strains to flavor profiles.

This assignment uses JavaScript and takes advantage of its power in manipulating datasets. Data is filtered and transformations are applied to each element in the dataset, often with just a few lines of code.  In addition, the other tools used for this project were D3 to detect a change on the page when a user selects a new Subject ID No. and Bootstrap to help build the HTML structure and formatting of the webpage.  



In the final visualization of the belly button data, a user can select an individual from a dropdown menu. Once a person's ID number is selected, the demographic information of that individual is displayed, such as location, sex, and age, will be displayed.  The additional datasets then visually show the bacterial data for each Subject ID. Specifically, the volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, the volunteers will be able to identify whether that species is found in their navel.

The final deliverables of this challenge are:
- Deliverable 1: Create a Horizontal Bar Chart
	- Create a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. The horizontal bar chart will display the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart.

- Deliverable 2: Create a Bubble Chart
	- Create a bubble chart that will display the following when an individual’s ID is selected from the dropdown menu webpage:
		- The otu_ids as the x-axis values.
		- The sample_values as the y-axis values.
		- The sample_values as the marker size.
		- The otu_ids as the marker colors.
		- The otu_labels as the hover-text values.

- Deliverable 3: Create a Gauge Chart
	- Create a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu.

- Deliverable 4: Customize the Dashboard
	- The dashboard was further customized with the following items:
		- Add an image to the jumbotron.
		- Add background color or a variety of compatible colors to the webpage.
		- Use a custom font with contrast for the colors.
		- Add more information about the project as a paragraph on the page.
		- Add information about what each graph visualizes, either under or next to each graph.

	
	