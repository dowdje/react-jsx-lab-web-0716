const React = require('react');
const Filler = require('./FillerText');
class Webpage extends React.Component {
  render(){
    return (
      <div>
      <title>The world's coolest webpage.</title>
      <Filler />
      <Filler />
      </div>
    );
  }
}

module.exports = Webpage;