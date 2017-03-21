import React, { Component } from 'react';
import Modal from 'react-modal';

import ItemIndex from '../items/item_index_container';
import ItemForm from '../items/item_form_container';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'fixed',
    top: 'none',
    left: 'none',
    right: 'none',
    bottom: 'none',
    width: '380px',
    padding: '0',
    border: '0',
    backgroundColor: 'transparent',
    zIndex: 11
  }
};

class Garage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: props.params.user_id,
      user: {
        username: ""
      }
    };
    props.fetchUserData(this.state.user_id);
    props.cleanUserErrors();
    this.fetchParams      = this.fetchParams.bind(this);
    this.renderHeader     = this.renderHeader.bind(this);
    this.renderErrors     = this.renderErrors.bind(this);
    this.renderForm       = this.renderForm.bind(this);
    this.renderFormButton = this.renderFormButton.bind(this);
    this.isCurrentUser    = this.isCurrentUser.bind(this);
    this.openModal        = this.openModal.bind(this);
    this.closeModal       = this.closeModal.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.params.user_id !== this.state.user_id) {
      this.props.fetchUserData(props.params.user_id);
      this.props.cleanUserErrors();
    }

    this.setState({
      user_id: props.params.user_id,
      user: props.user,
      modalOpen: false
    });
  }

  fetchParams() {
    return {
      user_id: this.state.user_id,
      category: "all"
    };
  }

  isCurrentUser() {
    const currentUser = this.props.currentUser;
    const user = this.state.user;

    return currentUser && (currentUser.id === parseInt(this.state.user_id))
      ? true : false;
  }

  renderHeader() {
    if (this.isCurrentUser()) {
      return (
        <h1 className="garage-header">My Items</h1>
      );
    } else {
      return (
        <h1 className="garage-header">
          {this.state.user.username}'s garage
        </h1>
      );
    }
  }

  renderErrors() {
    return this.props.userErrors.map((error, i) => (
      <h1 className="garage-header error-header" key={i}>{error}</h1>
    ));
  }

  renderForm() {
    if (this.isCurrentUser()) {
      return (
        <ItemForm formType="new" closeModal={this.closeModal} />
      );
    }
  }

  renderFormButton() {
    if (this.isCurrentUser()) {
      return (
        <div className="button-container">
          <button
            className="primary_button u-full-width"
            onClick={this.openModal}>
            Add Item To Store
            </button>
        </div>
      );
    }
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    if (this.props.userErrors.length > 0) {
      return (
        <div className="garage-container">
          {this.renderErrors()}
        </div>
      );
    } else {
      return (
        <div className="garage-container">
          {this.renderHeader()}
          <ItemIndex fetchParams={this.fetchParams()} />
          {this.renderFormButton()}
          <Modal
            isOpen={this.state.modalOpen}
            style={style}
            onRequestClose={this.closeModal}
            contentLabel="New Object Form"
          >
            {this.renderForm()}
          </Modal>
        </div>
      );
    }
  }
}

export default Garage;