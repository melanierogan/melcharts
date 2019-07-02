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

function getMean(values) {
  let count = values.reduce((previous, current) => current += previous);
  return values /= count;
}

const meanReverse = getMean(testTime(getReverse));
const meanLast = getMean(testTime(getLast));
const meanLength = getMean(testTime(getLength));
const meanShuffle = getMean(testTime(getShuffle));
const meanDuplicates = getMean(testTime(getDuplicates));

const getReverseChart = {
  x: getRange(),
  y: meanReverse,
  type: 'lines',
  name: 'reverse()',
  line: {
    color: 'rgb(38, 181, 195)',
    width: 3
  }
};

const getLastChart = {
  x: getRange(),
  y: testTime(getLast),
  type: 'lines',
  name: 'getLast()',
  line: {
    color: 'rgb(38, 181, 195)',
    width: 3
  }
};

const getLengthChart = {
  x: getRange(),
  y: testTime(getLength),
  type: 'lines',
  name: 'getLength()',
  line: {
    color: 'rgb(38, 181, 195)',
    width: 3
  }
};

const getShuffleChart = {
  x: getRange(),
  y: testTime(getShuffle),
  type: 'lines',
  name: 'getShuffle()',
  line: {
    color: 'rgb(38, 181, 195)',
    width: 3
  }
};

const getDuplicatesChart = {
  x: getRange(),
  y: testTime(getDuplicates),
  type: 'lines',
  name: 'getDuplicates()',
  line: {
    color: 'rgb(38, 181, 195)',
    width: 3
  }
};

const sortStudentsChart = {
  x: getRange(),
  y: testTimeArgs(sortStudents(studentsArray, 4)),
  type: 'lines',
  name: 'sortStudents()',
  line: {
    color: 'rgb(38, 181, 195)',
    width: 3
  }
};

const data1 = [getReverseChart];
const data2 = [getLastChart];
const data3 = [getLengthChart];
const data4 = [getShuffleChart];
const data5 = [getDuplicatesChart];
const data6 = [sortStudentsChart];

const testdata = [{
  x: [1999, 2000, 2001, 2002],
  y: [10, 15, 13, 17],
  type: 'scatter'
}];

const layout1 = {
  title: 'Time function takes',
  xaxis: {
    title: 'Input size (0 - 100,000 in 5,000 increments)'
  },
  yaxis: {
    title: 'Time (ms)'
  }
};

const layout3 = {
  title: 'Testing graph',
  xaxis: {
    title: 'Input size'
  },
  yaxis: {
    title: 'Time (ms)'
  }
};

Plotly.newPlot('chart1', data1, layout1, {responsive: true});
Plotly.newPlot('chart2', data2, layout1, {responsive: true});
Plotly.newPlot('chart3', data3, layout1, {responsive: true});
Plotly.newPlot('chart4', data4, layout1, {responsive: true});
Plotly.newPlot('chart5', data5, layout1, {responsive: true});
Plotly.newPlot('chart6', data6, layout1, {responsive: true});
// Plotly.newPlot('graphDiv', testdata, layout3);

