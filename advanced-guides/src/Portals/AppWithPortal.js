import './AppWithPortal.css';

import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default class AppWithPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      showModal: false
    };
    this.handleHide=this.handleHide.bind(this);
    this.handleShow=this.handleShow.bind(this);
  }

  handleHide() {
    this.setState({
      showModal: false
    });
  }

  handleShow() {
    this.setState({
      showModal: true
    });
  }

  render() {
    const modal=this.state.showModal
      ? (
          <Modal>
            <div className="modal">
              <div>
                With a portal, we can render content into a different
                part of the DOM, as if it were any other React child.
              </div>
              This is being rendered inside the #modal-container div.
              <button onClick={this.handleHide}>Hide modal</button>
            </div>
          </Modal>
        )
      : null;

      return (
        <div className="app">
          This div has overflow: hidden.
          <button onClick={this.handleShow}>Show modal</button>
          {modal}
        </div>
      );
  }
}
