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

## The idea
[Chart.js](https://www.chartjs.org/) is an open-source JavaScript library that makes it easy to produce charts on a webpage. To implement Chart.js however, requires that the user understand 1) HTML (to build the frame of their webpage) and 2) understand JavaScript (to implement Chart.js functions).
For my project, XY Plotter, I decided to simplify the learning curve of Chart.js and created a webpage that allows users to build Chart.js scatter plots. I chose the scatter plot features of Chart.js because scatter plots are commonly used to demonstrate relationships between two variables, X and Y. For more information on scatter plots, here is a nice summary put together by ChartIO Data Tutorials : [A Complete Guide to Scatter Plots.](https://chartio.com/learn/charts/what-is-a-scatter-plot/)

With my webpage interface, a user can simply enter in ten XY pairs and click on "Make chart" to make a nice scatter plot. The user also has the option of labelling their data. Here is a screenshot of XY Plotter (sans data) (See Figure 1).

<p><img width="500" src="../images/XYPlotter-1.png"></p>
<figcaption>Figure 1 - XY Plotter. Users must fill out text areas to generate a label and to enter in their data.</figcaption>

<br>Here is a screenshot of XY Plotter with some data points. Note that users must enter each data point with X and Y values separated by a comma (e.g. X,Y).

<p><img width="80%" src="../images/XYPlotter-2.png"></p>
<figcaption>Figure 2 - XY Plotter with example data. Bacteria have an exponential growth phase represented by the mathematical formula, n x 2^g. Thus, each bacterial cell is capable of generating 2 daughter cells asexually via binary fission.</figcaption>


When used by a programmer, the program can easily be modified to
This is my second project for ICS314 and my first attempt using Chart.js


## The program
You can find the code to this program in my [Projects - XYPlotter](https://github.com/microtaryn/microtaryn.github.io/tree/master/projects/XYPlotter) folder or run it yourself in [JFiddle](https://jsfiddle.net/butterfreeDay/01tzvw2L/)

