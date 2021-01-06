window.data = null;

d3.json("samples.json").then((importedData) => {
      // console.log(importedData);
      data = importedData;
	  //alert(data)
     
      var selectElement = document.getElementById('selDataset');
	  selectElement.add(new Option("")); 
      for (i = 0; i <  importedData['samples'].length; i++) {
        selectElement.add(new Option(importedData['samples'][i]['id']));        
      }      
      
    
});

function optionChanged(selectValue) {
    let selectedResult = data['metadata'].find(i => i.id === parseInt(selectValue));

let id = selectedResult.id;
let ethnicity = selectedResult.ethnicity;
let gender = selectedResult.gender;
let age = selectedResult.age;
let location = selectedResult.location;
let bbtype = selectedResult.bbtype;
let wfreq = selectedResult.wfreq;


var metaDataElement = document.getElementById('sample-metadata');
metaDataElement.innerHTML = "";
metaDataElement.innerHTML += "<p>id: " + id + "</p>"
metaDataElement.innerHTML += "<p>ethnicity:  " + ethnicity + "</p>"
metaDataElement.innerHTML += "<p>gender:  " + gender + "</p>"
metaDataElement.innerHTML += "<p>age: " + age + "</p>"
metaDataElement.innerHTML += "<p>bbtype:  " + bbtype + "</p>"
metaDataElement.innerHTML += "<p>location: " + location + "</p>"
metaDataElement.innerHTML += "<p>wfreq:  " + wfreq + "</p>"
  
}

function getKeyByValue(object, value) { 
    return Object.keys(object).find(key => object[key] === value); 
} 
