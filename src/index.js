var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');

var grids = [
  {id: 1, color: '#456990', name: 'dark blue', warm: 6},
  {id: 2, color: '#EF767A', name: 'red', warm: 1},
  {id: 3, color: '#49BEAA', name: 'dark green', warm: 5},
  {id: 4, color: '#49DCB1', name: 'light green', warm: 3},
  {id: 5, color: '#EEB868', name: 'yellow', warm: 2},
  {id: 6, color: '#EF767A', name: 'red', warm: 1},
  {id: 7, color: '#456990', name: 'dark blue', warm: 6},
  {id: 8, color: '#49BEAA', name: 'dark green', warm: 5},
  {id: 9, color: '#49DCB1', name: 'green', warm: 4},
  {id: 10, color: '#EEB868', name: 'yellow', warm: 2},
  {id: 11, color: '#EF767A', name: 'red', warm: 1}
];


ReactDOM.render(<App grids={grids}/>, document.querySelector('#app'));