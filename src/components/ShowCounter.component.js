import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ShowCounter extends React.Component {

  render() {
    return (
      <div>
        
        <div>
          <h1>Counter : {this.props.count}</h1>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.app
  };
};


export default withRouter(connect(mapStateToProps)(ShowCounter));
