window.data = null;

d3.json("samples.json").then((importedData) => {
  console.log(importedData);
  data = importedData;
  //alert(data)

  var selectElement = document.getElementById("selDataset");
  selectElement.add(new Option(""));
  for (i = 0; i < importedData["samples"].length; i++) {
    selectElement.add(new Option(importedData["samples"][i]["id"]));
  }
});

function optionChanged(selectValue) {
  let selectedResult = data["metadata"].find(
    (i) => i.id === parseInt(selectValue)
  );

  let id = selectedResult.id;
  let ethnicity = selectedResult.ethnicity;
  let gender = selectedResult.gender;
  let age = selectedResult.age;
  let location = selectedResult.location;
  let bbtype = selectedResult.bbtype;
  let wfreq = selectedResult.wfreq;

  var metaDataElement = document.getElementById("sample-metadata");
  metaDataElement.innerHTML = "";
  metaDataElement.innerHTML += "<p>id: " + id + "</p>";
  metaDataElement.innerHTML += "<p>ethnicity:  " + ethnicity + "</p>";
  metaDataElement.innerHTML += "<p>gender:  " + gender + "</p>";
  metaDataElement.innerHTML += "<p>age: " + age + "</p>";
  metaDataElement.innerHTML += "<p>bbtype:  " + bbtype + "</p>";
  metaDataElement.innerHTML += "<p>location: " + location + "</p>";
  metaDataElement.innerHTML += "<p>wfreq:  " + wfreq + "</p>";
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
};



var data = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar',
    orientation: 'h'
  }
];

Plotly.newPlot('bar', data);



var trace1 = {
  x: data.map(row => row.otu_ids),
  y: data.map(row => row.sample_values),
  text: data.map(row => row.otu_),
  mode: 'markers',
  marker: {
    color: data.map(row => row.otu_ids),
    size: data.map(row => row.sample_values)
  }
};

var data = [trace1];

var layout = {
  title: 'Bubble Chart Hover Text',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('bubble', data, layout);