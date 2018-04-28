import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Info extends Component {
  render() {
    return (
      <div>
        <h2>HOC</h2>
        <p>This is: {this.props.info}</p>
      </div>
    );
  }
}

const withAdminWarning = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <p>I m warapped component!</p>
          <WrappedComponent {...this.props}/>
        </div>

      );
    }
  };
}

const AdminComponent = withAdminWarning(Info);

ReactDOM.render(
  <AdminComponent info="That is details."/>, document.getElementById('app'));
