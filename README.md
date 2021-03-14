# Belly-Button-Analysis
The work performed in this assignment dealt with amounts of microbial species i.e. bacteria present in patients belly buttons that were tested.  Multiple tools including Plotly were used to display the data.

![image](https://user-images.githubusercontent.com/69222103/109903900-6fdc0580-7c6a-11eb-8d28-a5ca5a1b291c.png)


In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use `sample_values` as the values for the bar chart.

* Use `otu_ids` as the labels for the bar chart.

* Use `otu_labels` as the hovertext for the chart.

![image](https://user-images.githubusercontent.com/69222103/109903982-8b471080-7c6a-11eb-98ac-f998a2f74353.png)

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![image](https://user-images.githubusercontent.com/69222103/109904002-94d07880-7c6a-11eb-90e2-0d6eda9cb4fc.png)


4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Update all of the plots any time that a new sample is selected.
