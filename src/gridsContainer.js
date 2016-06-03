var React = require('react');
var ExpandableDiv = require('./expandableDiv.js');

var GridsContainer = React.createClass({
  render: function () {
    return (
      <div className="grids">
        {this._getGrids()}
      </div>
    );
  },
  _getGrids: function () {
    var contents = [];
    var grids = this.props.grids;
    for (var i=0; i<grids.length; i+=3) {
      var left = (<ExpandableDiv 
        color={grids[i].color}
        name={grids[i].name}
        key={i}
      ></ExpandableDiv>);
      var middle = i+1<grids.length ? (<ExpandableDiv
          color={grids[i+1].color}
          name={grids[i+1].name}
          key={i+1}
        ></ExpandableDiv>) : null;
      var right = i+2<grids.length ? (<ExpandableDiv
          color={grids[i+2].color}
          name={grids[i+2].name}
          key={i+2}
        ></ExpandableDiv>) : null;
      contents.push(
        <div className="row" key={i}>
          {left}{middle}{right}
        </div>
      );
    }
    return contents;
  },

});

module.exports = GridsContainer;