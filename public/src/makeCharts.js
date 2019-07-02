function getRange() {
  let range = []
  // the below gives a range by plotting 0-100000 in increments
  // of 5000, this shows the size of the array
  //there should be 21 lots of numbers in the array as it includes 0
  for (let i = 0; i <= 100000; i += 5000) {
    range.push(i);
  }
  return range;
};

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

const data1 = [getReverseChart];

const testdata = [{
  x: [1999, 2000, 2001, 2002],
  y: [10, 15, 13, 17],
  type: 'scatter'
}];
const layout1 = {
  title: 'Timing the .reverse function',
  xaxis: {
    title: 'Input size (0 - 10,000 in 5,000 increments)'
  },
  yaxis: {
    title: 'Time (ms)'
  }
};

const layout2 = {
  title: 'Testing graph',
  xaxis: {
    title: 'Input size'
  },
  yaxis: {
    title: 'Time (ms)'
  }
};

Plotly.newPlot('timing-chart1', data1, layout1, {responsive: true});
Plotly.newPlot('graphDiv', testdata, layout2);

