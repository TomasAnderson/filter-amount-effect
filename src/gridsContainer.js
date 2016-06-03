var React = require('react');
var ExpandableDiv = require('./expandableDiv.js');
var SpringGrid = require('react-stonecutter').SpringGrid;
var layout = require('react-stonecutter').layout;
var easings = require('react-stonecutter').easings;

var GridsContainer = React.createClass({

  render: function () {
    return (
      <SpringGrid
        columns={3}
        columnWidth={60}
        gutterWidth={10}
        gutterHeight={15}
        layout={layout.pinterest}
        enter={() => ({ scale: 0, opacity: 0 })}
        entered={() => ({ scale: 1, opacity: 1 })}
        exit={() => ({ scale: 0, opacity: 0 })}
        perspective={600}        
        duration={800}
        easing={easings.quadIn}
        springConfig={{ stiffness: 170, damping: 26 }}
      >
        {this.props.children}
      </SpringGrid>
    );
  }

});

module.exports = GridsContainer;