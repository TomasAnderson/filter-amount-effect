var React = require('react');
var ExpandableDiv = require('./expandableDiv.js');

var App = React.createClass({
  getInitialStage: function () {
    return {
      grids: this.props.grids
    };
  },
	render: function () {
    return (
      <div className="demo">
        <div className="grids">
          {this.props.grids.map(function (grid, index) {
            return (
              <ExpandableDiv
                style={{color: grid.color}}
                name={grid.name}
                key={index}
              >
              </ExpandableDiv>
            );
          })}
        </div>
      </div>
    );
	}
});

module.exports = App;