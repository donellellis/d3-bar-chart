 var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

//  styles svg container
 var svgWidth = 500; 
 var svgHeight = 300
 var barPadding = 5;
 var barWidth = (svgWidth / dataset.length);
 
 
 var svg = d3.select('svg')
     .attr("width", svgWidth)
     .attr("height", svgHeight);

//  selects all rect elements
 var barChart = svg.selectAll("rect")
    // pass in dataset
     .data(dataset)
    //  looks for matches between data and DOM
     .enter()
    //  creates a new rect element for each item in dataset
     .append("rect")
    //  determines shape of the rectangles
    // y coordinate of the bar
     .attr("y", function(d) {
        //  return value of attribute
          return svgHeight - d 
     })
     .attr("height", function(d) { 
         return d; 
     })
    //  determine width of the bar
     .attr("width", barWidth - barPadding)
     .attr("transform", function (d, i) {
         var translate = [barWidth * i, 0]; 
         return "translate("+ translate +")";
     });
 