var React = require('react');

var ExpandableDiv = React.createClass({
  render: function () {
     return (
      <div
        className="grid"
        style={{'background-color': this.props.color}}
        // onClick={this.props.handleRemove}
      >
        <span className="number" style={{visibility: 'hidden'}}>{this.props.name}</span>
      </div>  
    );
  }
});

module.exports = ExpandableDiv;