var React = require('react');
var GridsContainer = require('./gridsContainer.js');

var App = React.createClass({
  getInitialState: function () {
    return {
      filterOption: 'All'
    };
  },

  onFilterChange: function (e) {
    this.setState({
      filterOption: e.target.value
    });
  },

	render: function () {
    return (
      <div className="demo">
        <div className="filter">
          <select value={this.state.filterOption} onChange={this.onFilterChange}>
            <option value="All">All</option>
            <option value="Warm">Warm Color First</option>
            <option value="Cold">Cold Color First</option>
          </select>
        </div>
        <GridsContainer grids={this._sort(this.props.grids, this.state.filterOption)}></GridsContainer>
      </div>
    );
	},

  _sort: function (grids, option) {
    if (option === 'All') {
      return grids;
    } else if (option === 'Warm') {
      return grids.slice().sort(function (a, b) {
        if (a.warm < b.warm) {
          return 1;
        } else if (a.warm > b.warm) {
          return -1;
        } else {
          return 0;
        }
      });      
    } else if (option === 'Cold') {
      return grids.slice().sort(function (a, b) {
        if (a.warm < b.warm) {
          return -1;
        } else if (a.warm > b.warm) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      console.log('unknown option');
    }
  }
  

});

module.exports = App;