# Plotly_Javascript





delve into JavaScript to take advantage of its power in manipulating datasets. Roza will be able to do things like filter the data that meet her specific criteria and to apply a transformation to each element in the dataset, often with just a few lines of code





In her final visualization of the belly button data, Roza would like to be able to select an individual from a dropdown menu. Once a person's ID number is selected, she would like to display the demographic information of that individual. Since each individual is represented by an object, she'll need to access both keys and values inside an object in order to do this.

Block by block, Roza has been building her skills to create a visually compelling dashboard. So far, she has learned to create basic static charts with Plotly. She has also learned to read and parse external data files, and to create dynamic charts that respond to user input.

Roza is now ready to consolidate her knowledge in order to build the first part of her dashboard: the demographics panel. A dropdown menu will list the ID numbers of all the volunteers. When a volunteer ID is chosen from the dropdown menu, that person's demographics information, such as location, sex, and age, will be displayed.

This is a Bootstrap page with a dropdown menu and an info panel. Selecting an ID number from the dropdown menu will populate the panel with that person's information.

She has a completed panel for demographic information and now needs to visualize the bacterial data for each volunteer. Specifically, her volunteers should be able 

to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, Roza's volunteers will be able to identify whether that species is found in their navel.

What You're Creating
This new assignment consists of four technical analysis deliverables. You will submit the following:

Deliverable 1: Create a Horizontal Bar Chart

	create a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. The horizontal bar chart will display the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart.

Deliverable 2: Create a Bubble Chart
create a bubble chart that will display the following when an individual’s ID is selected from the dropdown menu webpage:

The otu_ids as the x-axis values.
The sample_values as the y-axis values.
The sample_values as the marker size.
The otu_ids as the marker colors.
The otu_labels as the hover-text values.

Deliverable 3: Create a Gauge Chart
Deliverable 4: Customize the Dashboard