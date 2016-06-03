var React = require('react');
var Collapse = require('react-collapse');

var ExpandableDiv = React.createClass({
   getInitialState: function () {
      return {
        isOpened: false
      };  
   },

  render: function () {
     return (
      <div >
        <div
          style={{'background-color': this.props.color, width:50, height:50}}
          onClick={this.handleClick}
        >
          <span className="number" style={{visibility: 'hidden'}}>{this.props.name}</span>
          <Collapse
            isOpened={this.state.isOpened}
            style={{maxHeight: 200}}
          >
            <div style={{height: 120,  'background-color': this.props.color}}>
            </div>
          </Collapse>
        </div>
      </div>  
    );
  },

  handleClick: function () {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }
});

module.exports = ExpandableDiv;