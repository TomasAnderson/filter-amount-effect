var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');

var grids = [
  {color: '#456990', name: 'dark blue', warm: 6},
  {color: '#EF767A', name: 'red', warm: 1},
  {color: '#49BEAA', name: 'dark green', warm: 5},
  {color: '#49DCB1', name: 'light green', warm: 3},
  {color: '#EEB868', name: 'yellow', warm: 2},
  {color: '#EF767A', name: 'red', warm: 1},
  {color: '#456990', name: 'dark blue', warm: 6},
  {color: '#49BEAA', name: 'dark green', warm: 5},
  {color: '#49DCB1', name: 'green', warm: 4},
  {color: '#EEB868', name: 'yellow', warm: 2},
  {color: '#EF767A', name: 'red', warm: 1}
];


ReactDOM.render(<App grids={grids}/>, document.querySelector('#app'));