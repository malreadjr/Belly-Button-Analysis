d3.json("samples.json").then((importedData) => {
      // console.log(importedData);
      var data = importedData;
     
      var selectElement = document.getElementById('selDataset');


      for (i = 0; i <  importedData['samples'].length; i++) {
        selectElement.add(new Option(importedData['samples'][i]['id']));
        
      } 
      
      
    
});

function optionChanged(selectValue) {
    alert(selectValue)

    
}