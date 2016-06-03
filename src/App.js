var React = require('react');
var GridsContainer = require('./gridsContainer.js');

var App = React.createClass({
  getInitialState: function () {
    return {
      filterOption: 'All',
    };
  },

  onFilterChange: function (e) {
    this.setState({
      filterOption: e.target.value,
    });
  },

	render: function () {
    var grids = this._getSimpleGrids(this._sort(this.props.grids, this.state.filterOption));
    return (
      <div className="demo">
        <div className="filter">
          <select value={this.state.filterOption} onChange={this.onFilterChange}>
            <option value="All">All</option>
            <option value="Warm">Warm Color First</option>
            <option value="Cold">Cold Color First</option>
          </select>
        </div>
        <GridsContainer>
          {grids}
        </GridsContainer>
      </div>
    );
	},

  _sort: function (grids, option) {
    if (option === 'All') {
      return grids;
    } else if (option === 'Warm') {
      return grids.slice().sort(function (a, b) {
        if (a.warm < b.warm) {
          return -1;
        } else if (a.warm > b.warm) {
          return 1;
        } else {
          return 0;
        }
      });      
    } else if (option === 'Cold') {
      return grids.slice().sort(function (a, b) {
        if (a.warm < b.warm) {
          return 1;
        } else if (a.warm > b.warm) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      console.log('unknown option');
    }
  },

  _getSimpleGrids: function (grids) {
    var contents = [];
    for (var i=0; i<grids.length; i++){
      contents.push(
        <div
          backgroundColor={grids[i].color}
          // itemHeight={i === 0 && grids[i].name === 'red' ? 90 : 50}
          itemHeight={50}
          key={grids[i].id}
          style={{'background-color': grids[i].color, width:50,height:50}}
        ></div>
      );

    }
    return contents;
  },

  

});

module.exports = App;