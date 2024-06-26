am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    layout: root.verticalLayout
  }));
  
  
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category"
  }));
  
  series.data.setAll([
    { value: 10, category: "entertainment" },
    { value: 9, category: "clothes" },
    { value: 6, category: "Piggy bank" },
    { value: 5, category: "snack" },
    { value: 4, category: "market" },
    { value: 3, category: "college" },
    { value: 1, category: "rent" },
  ]);
  
  
  // Play initial series animation
  // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
  series.appear(1000, 100);
  }); 