var React = require('react');

const Index = React.createClass({
  render: function () {
    const django = 'django';
    console.log(django)

    return (
      <div>
        <div>Hello django-react!</div>
      </div>  
    )
  }
})

module.exports = Index;
