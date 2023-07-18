import React from 'react';

class NotFound extends React.Component {
  state = {
    animated: '',
  };
  enter = () => {
    this.setState({ animated: 'hinge' });
  };
  render() {
    return (
      <div
        className="center"
        style={{ height: '100%', background: '#ececec', overflow: 'hidden' }}
      >
        404
      </div>
    );
  }
}

export default NotFound;
