---
layout: project
type: project
image: images/ecoli.png
title: XY Plotter
permalink: projects/xyPlotter
# All dates must be YYYY-MM-DD format!
date: 2020-09-04
labels:
  - JavaScript
  - HTML
summary: Create an XY plot from values entered into a text area! The plot uses the Chart.js library
---
<img width="500" class="cartoon of programmer thinking" src="../images/ecoli.png">

# XY Plotter
This is my second project for ICS314 and my first attempt using Chart.js
## The idea
[Chart.js](https://www.chartjs.org/) is an open-source JavaScript library that makes it easy to produce charts on a webpage. To implement Chart.js however, requires that the user understand 1) HTML (to build the frame of their webpage) and 2) understand JavaScript (to implement Chart.js functions).
For my project, XY Plotter, I decided to simplify the learning curve of Chart.js and created a webpage that allows users to build Chart.js scatter plots. I chose the scatter plot features of Chart.js because scatter plots are commonly used to demonstrate relationships between two variables, X and Y. For more information on scatter plots, here is a nice summary put together by ChartIO Data Tutorials : [A Complete Guide to Scatter Plots.](https://chartio.com/learn/charts/what-is-a-scatter-plot/)

With my webpage interface, a user can simply enter in XY pairs and click on "Make chart" to make a nice scatter plot. The user also has the option of labelling their data. Here is a screenshot of XY Plotter (sans data) (See Figure 1).

<p><img width="500" src="../images/XYPlotter-1.png"></p>
<figcaption>Figure 1 - XY Plotter. Users must fill out text areas to generate a label and to enter in their data.</figcaption>

<br>Here is a screenshot of XY Plotter with some data points. Note that users must enter each data point with X and Y values separated by a comma (e.g. X,Y). (See Figure 2).

<p><img width="80%" src="../images/XYPlotter-2.png"></p><figcaption>Figure 2 - XY Plotter with example data. Bacteria have an exponential growth phase represented by the mathematical formula, n x 2^g. Thus, each bacterial cell is capable of generating 2 daughter cells asexually via binary fission. </figcaption>
For more information on bacterial growth, see [Todar's: Growth of Bacterial Populations](http://textbookofbacteriology.net/growth_3.html)

<br>The default setting for Chart.js scatter plots is for onHover() to be on. This gives the scatter plot more interactivity with the user and this feature can be useful in demonstrations (i.e. when pointing out a specific data point) (See Figure 3).

<p><img width="80%" src="../images/XYPlotter-3.png"></p><figcaption>Figure 3 - XY Plotter showing onHover() over a data point.
 
 
<br>Programmers can also download my code (See links to code below) and use XY Plotter as a base webpage, adding additional Chart.js features (e.g. X and Y labels). In this way, XY Plotter can be a starting point for building more complex graphing interfaces fitting user-specific needs.<br>


## The program

You can find the code to this program in my [Projects - XYPlotter](https://github.com/microtaryn/microtaryn.github.io/tree/master/projects/XYPlotter) folder or run it yourself in [JFiddle](https://jsfiddle.net/butterfreeDay/01tzvw2L/)

<br>In order to implement Chart.js, the following line must be added to the HTML document:

```js
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
```

<br>The rest of the JavaScript code is in the following &lt;script> element:

```js
<script type="text/javascript">
            document.addEventListener('DOMContentLoaded',init);
            //this function will clear all of the children of an element
            function removeChildren(elem){
                while(elem.childNodes.length > 0){
                    elem.removeChild(elem.childNodes[0]);
                }
            }
            //this function obtains the user input data and
            //calls the doChart() function to make the chart
            function getDataAndPlot() {
                let data1 = [];
                const label = document.getElementById("label");
                let label1 = label.value.trim();
                const myChart = document.getElementById("myChart");
                removeChildren(myChart);
                const textarea = document.getElementById("textarea");
                let xydata = textarea.value.split("\n");
                //console.log(xydata);
                for (let i = 0; i < xydata.length; i++) {
                    let splitValue = xydata[i].split(",");
                    let row = {};
                    row["x"] = Number(splitValue[0]);
                    row["y"] = Number(splitValue[1]);
                    data1.push(row);
                }
                //console.log(data1);
                doChart(data1,label1);
            }
            function init() {
                const run = document.getElementById("run");
                run.addEventListener("click",getDataAndPlot);
            }
            //this doChart() function uses Chart.js to create a
            //xy scatter chart
            function doChart(data1,label1) {
                let ctx = document.getElementById("myChart").getContext('2d');
                let chart = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [{
                            label: label1,
                            backgroundColor: 'blue',
                            borderColor: 'blue',
                            data: data1,
                            fill: false,
                            showLine: true
                        }]
                    },
                    options: {}
                });
            }
        </script>
```

<br> We can breakdown the code as follows. The first line causes the **init()** function to be called when the DOM Content has finished loading. This means that after all of the HTML markup in the &lt;body> is rendered, **init()** is called.

```js
document.addEventListener('DOMContentLoaded',init);
```

<br> The **init()** function gets a reference to the button with id="run" and makes it so that clicking on that button causes the **getDataAndPlot()** function to be called.

```js
function init() {
   const run = document.getElementById("run");
   run.addEventListener("click",getDataAndPlot);
}
```

<br>The **getDataAndPlot()** function is used to create the data that Chart.js is going to plot.It obtains the data from input type="text" and the textarea to make the chart. The data from the textarea is split on a **\n** and a for() loop iterates over the data to create the array of data that will be plotted. This function calls the **removeChildren()** function to clear out the previous chart.

```js
function getDataAndPlot() {
   let data1 = [];
   const label = document.getElementById("label");
   let label1 = label.value.trim();
   const myChart = document.getElementById("myChart");
   removeChildren(myChart);
   const textarea = document.getElementById("textarea");
   let xydata = textarea.value.split("\n");
   //console.log(xydata);
   for (let i = 0; i < xydata.length; i++) {
        let splitValue = xydata[i].split(",");
        let row = {};
        row["x"] = Number(splitValue[0]);
        row["y"] = Number(splitValue[1]);
        data1.push(row);
   }
   //console.log(data1);
   doChart(data1,label1);
}
```

<br>The **removeChildren()** function will remove all the children from any HTML container element. It is called from **getDataAndPlot()** to clear out any previous chart.

<br> The **doChart()** function is what actually creates the plot using the Chart.js library. The type is set to 'scatter' to create an XY scatter plot.

```js
function doChart(data1,label1) {
   let ctx = document.getElementById("myChart").getContext('2d');
   let chart = new Chart(ctx, {
       type: 'scatter',
       data: {
           datasets: [{
              label: label1,
              backgroundColor: 'blue',
              borderColor: 'blue',
              data: data1,
              fill: false,
              showLine: true
            }]
       },
       options: {}
   });
}
```

