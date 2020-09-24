// @TODO: YOUR CODE HERE!


d3.csv("assets/data/data.csv").then(function(data) {

    var poverty_data = {"poverty(%)":[]};   
    var age_data =  {"age(median)":[]};
    var income_data = {"income(median)":[]};
    var healthcare_data = {"healthcare(%)":[]};
    var obesity_data = {"obesity(%)":[]};
    var smoke_data = {"smoke(%)":[]};
    var abbr_data = {"abbr":[]};
    var state_data = {"state":[]};

    

    
    data.forEach(function(d) {
    Object.values(poverty_data)[0].push(+d.poverty);
    Object.values(age_data)[0].push(+d.age);
    Object.values(income_data)[0].push(+d.income);
    Object.values(healthcare_data)[0].push(+d.healthcare);
    Object.values(obesity_data)[0].push(+d.obesity);
    Object.values(smoke_data)[0].push(+d.smokes);
    Object.values(abbr_data)[0].push(d.abbr);
    Object.values(state_data)[0].push(d.state)});

    var xselection = {"poverty_data":poverty_data,"age_data":age_data,"income_data":income_data}
    var yselection = {"healthcare_data":healthcare_data,"obesity_data":obesity_data,"smoke_data":smoke_data}

    
    function generate_scatter (datax, datay){

      var dataset1 = [];
    for (var i = 0; i < Object.values(abbr_data)[0].length; i++) {
    dataset1.push([Object.values(state_data)[0][i],Object.values(abbr_data)[0][i],Object.values(datax)[0][i],Object.values(datay)[0][i]])
            };

    var width = 700; 
    var height = 400;
    var margin = { "top": 30, "bottom": 60, "right": 70, "left": 90 };
     

    var svg = d3.select("#scatter").append("svg").attr("width", width).attr("height", height);
     

    var xScale = d3.scaleLinear()
        .domain([0.9*d3.min(dataset1, function(d) { return d[2]; }), 1.1*d3.max(dataset1, function(d) { return d[2]; })])
        .range([margin.left, width - margin.right]);
     
    var yScale = d3.scaleLinear()
        .domain([0.9*d3.min(dataset1, function(d) { return d[3]; }), 1.1*d3.max(dataset1, function(d) { return d[3]; })])
        .range([height - margin.bottom, margin.top]);
     
    var axisx = d3.axisBottom(xScale).ticks(8);
    var axisy = d3.axisLeft(yScale).ticks(8);
    
    
    
    var xlabelsGroup =  svg.append("g")
        .attr("transform", "translate(" + 0 + "," + (height - margin.bottom) + ")")
        .call(axisx)

    if (datax===poverty_data){
    var povertylabel = xlabelsGroup.append("text")
    .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
    .attr("y", 30)
    .attr("id", "poverty_data") 
    .classed("active", true)
    .text("poverty(%)")
    .on('click',povertychange)} else {
      var povertylabel = xlabelsGroup.append("text")
      .attr("x",  (width - margin.left - margin.right) / 2 + margin.left)
      .attr("y", 30)
      .attr("id", "poverty_data") 
      .classed("inactive", true)
      .text("poverty(%)")
      .on('click',povertychange);
    };

    if (datax===age_data){
      var agelabel = xlabelsGroup.append("text")
      .attr("x",  (width - margin.left - margin.right) / 2 + margin.left)
      .attr("y", 45)
      .attr("id", "age_data") 
      .classed("active", true)
      .text("age(median)")
      .on('click',agechange)}
      else {
        var agelabel = xlabelsGroup.append("text")
        .attr("x",  (width - margin.left - margin.right) / 2 + margin.left)
        .attr("y", 45)
        .attr("id", "age_data") 
        .classed("inactive", true)
        .text("age(median)")
        .on('click',agechange);
      };

      if (datax===income_data){
        var incomelabel = xlabelsGroup.append("text")
        .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
        .attr("y", 60)
        .attr("id", "income_data") 
        .classed("active", true)
        .text("income(median)")
        .on('click',incomechange);}
        else {
          var incomelabel = xlabelsGroup.append("text")
          .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
          .attr("y", 60)
          .attr("id", "income_data") 
          .classed("inactive", true)
          .text("income(median)")
          .on('click',incomechange);
        }
               
      
      var ylabelsGroup = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + 0 + ")")
        .call(axisy)

      
        if (datay===healthcare_data){
          var healthlabel = ylabelsGroup.append("text")
          .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
          .attr("y", -30)
	　    　.attr("transform", "rotate(-90)")
          .attr("id", "healthcare_data") 
          .classed("active", true)
          .text("healthcare(%)")
          .on('click',healthchange)} else {
            var healthlabel = ylabelsGroup.append("text")
            .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
            .attr("y", -30)
            .attr("id", "healthcare_data") 
            .attr("transform", "rotate(-90)")
            .classed("inactive", true)
            .text("healthcare(%)")
            .on('click',healthchange);
          };
      
          if (datay===obesity_data){
            var obesitylabel = ylabelsGroup.append("text")
            .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
            .attr("y", -45)
            .attr("id", "obesity_data") 
　　　　　　　.attr("transform", "rotate(-90)")
            .classed("active", true)
            .text("obesity(%)")
            .on('click',obesitychange)} else {
              var obesitylabel = ylabelsGroup.append("text")
              .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
              .attr("y", -45)
              .attr("id", "obesity_data") 
              .attr("transform", "rotate(-90)")
              .classed("inactive", true)
              .text("obesity(%)")
              .on('click',obesitychange);
            };
      
            if (datay===smoke_data){
              var smokelabel = ylabelsGroup.append("text")
              .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
              .attr("y", -60)
              .attr("id", "smoke_data") 
        		　.attr("transform", "rotate(-90)")
              .classed("active", true)
              .text("smoke(%)")
              .on('click',smokechange)} else {
                var smokelabel = ylabelsGroup.append("text")
                .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
                .attr("y", -60)
                .attr("id", "smoke_data") 
                .attr("transform", "rotate(-90)")
                .classed("inactive", true)
                .text("smoke(%)")
                .on('click',smokechange);
              };
      
     
    
     var circlesGroup = svg.append("g")
        .selectAll("circle")
        .data(dataset1)
        .enter()
        .append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r",13)
        .attr("fill", "steelblue")
        .attr('fill-opacity', 0.4)

        svg.append("g")
        .selectAll("text")
        .data(dataset1)
        .enter()
        .append("text")
        .attr("x", function(d) { return xScale(d[2]); })
        .attr("y", function(d) { return yScale(d[3]); })
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .style('font-size', 10 + 'px')
        .attr('fill', 'white')
        .text(d => d[1])

       var toolTip = d3.tip()
        .attr("class", "d3-tip")
        .html(function(d) {
          return (`state: ${d[0]}<br>${Object.keys(datax)[0]}: ${d[2]}<br>${Object.keys(datay)[0]}: ${d[3]}`);
        });

      // Step 2: Create the tooltip in chartGroup.
      svg.call(toolTip);

      // Step 3: Create "mouseover" event listener to display tooltip
      circlesGroup.on("mouseover", function(d) {
        toolTip.show(d, this);
      })
      // Step 4: Create "mouseout" event listener to hide tooltip
        .on("mouseout", function(d) {
          toolTip.hide(d);
        });
    
        svg.selectAll("circle")
        .transition()
        .duration(1000)
        .attr("cx", function(d) { return xScale(d[2]); })
        .attr("cy", function(d) { return yScale(d[3]); })



    };

    var x = poverty_data
    var y = obesity_data

    generate_scatter(x,y)
    
    

    function agechange (){
      x = age_data;
      y = yselection[document.getElementsByClassName("active")[1].id];
      d3.select("svg").remove();
      generate_scatter(x,y)
    };

    function povertychange (){
      x = poverty_data;
      y = yselection[document.getElementsByClassName("active")[1].id];
      d3.select("svg").remove();
      generate_scatter(x,y)
    };

    function incomechange (){
      x = income_data;
      y = yselection[document.getElementsByClassName("active")[1].id];
      d3.select("svg").remove();
      generate_scatter(x,y)
    };
 
    function healthchange (){
     x = xselection[document.getElementsByClassName("active")[0].id];
     y = healthcare_data;
     d3.select("svg").remove();
     generate_scatter(x,y)
 
   };
   function obesitychange (){
    x = xselection[document.getElementsByClassName("active")[0].id];
    y = obesity_data;
    d3.select("svg").remove();
    generate_scatter(x,y)

  };

  function smokechange (){
    x = xselection[document.getElementsByClassName("active")[0].id];
    y = smoke_data;
    d3.select("svg").remove();
    generate_scatter(x,y)

  };

 

 
   
      }
    
    
    );

