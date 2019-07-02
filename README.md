Mel charts
=========

Charting different javascript functions to see how long they take to complete in milliseconds.


The functions
---------

My functions live in `index.js` and so far they include:

* `getLast`, get the last element of an array with `.length-1`
* `getReverse`, get the reverse of the array with `.reverse`
* `getLength`, get the length of an array with `.length`
* `getShuffle`, shuffle the arrary around with a loop and `Math.floor(Math.random)`


Calculating the time taken
-----------

I have my performance timer saved in `performanceCalc.js`. This `testTime` function takes one argument, which should be whatever function you are trying to time. 

* for a loop of 0 to 100000 (in increments of 5000), so 21 times it uses the `createArray` function that takes one argument, a number which will be from the same loop of numbers 0 to 100000 (in increments of 5000). The output is an array of those random 21 numbers.
* it takes the time at the beginning of the function with `const t0 = performance.now();` then runs the function on the array created from `createArray`. 
* it then takes the time after the function has run
* it pushes the time for each of those 21 numbers into an array called `times`

More info on createArray:

* a function that takes one argument, size which is an integer.
* that number is given using the integer passed to the `createArray` function used in `performanceCalc.js`
* for each of the numbers given it loops, and pushes a random number from 1-100 into the array. It does this with `array.push(Math.floor(Math.random() * 101));`

Creating the chart
----------

In `makeCharts.js` i get a range by printing out the numbers 0 - 10,000 in increments of 5,000

* In each 'chart' function I place that range on the x axis with `getRange()`
* I place `testTime(testFunction)` on the y axis, where `testFunction` is the function i'm testing 
this looks a bit like this: 

```
javascript
const getReverseChart = {
  x: getRange(),
  y: testTime(getReverse),
  type: 'lines',
  name: 'reverse()',
  line: {
    color: 'rgb(38, 181, 195)',
    width: 3
  }
};
```

* Then i save that to an array and call it data1, so I can use it with my layout (`layout1`) using the `Plotly.newPlot` function.
this looks likes this `Plotly.newPlot('timing-chart1', data1, layout1, {responsive: true});`
* I call this in my `index.html` using `<div id="timing-chart1" style="width:100%; height:100%;" title="buuuuum">`


My charts page
--------

the `index.html` files requires all of the javascript files using script tags, it also uses jQuery to get plotly working properly. 
