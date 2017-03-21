import React, { Component } from 'react';

import Errors from '../errors';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      category: "",
      photo_url: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openWidget = this.openWidget.bind(this);
    this.validForm = this.validForm.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.validForm()) {
      this.props.action(this.state);
      this.props.closeModal();
    }
  }

  validForm() {
    const state = this.state;
    let valid = true;
    this.props.cleanErrors();

    if (state.name.length < 1) {
      this.props.receiveError("Name is required");
      valid = false;
    }
    if (state.description.length < 1) {
      this.props.receiveError("Description is required");
      valid = false;
    }
    if (state.category.length < 1) {
      this.props.receiveError("Category is required");
      valid = false;
    }
    if (state.photo_url.length < 1) {
      this.props.receiveError("Photo is required");
      valid = false;
    }

    return valid;
  }

  openWidget(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinaryOptions,
      (error, results) => {
        if (!error) {
          this.setState({ photo_url: results[0].path });
        } else {
          const message = error.message;
          if (message !== "User closed widget") {
            this.props.receiveError(error.message);
          }
        }
      }
    );
  }
  
  render() {
    const { formType, action } = this.props;
    
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1 className="form-h1">
          {formType === "new" ? "Add New Item" : "Update Item"}
        </h1>
        <Errors errors={this.props.errors} />
        <label className="form-label">Name</label>
        <input
          className="u-full-width form-item"
          onChange={this.update('name')}
          type="text" />
        <label className="form-label">Description</label>
        <textarea
          className="u-full-width form-item form-textarea"
          onChange={this.update('description')} />
        <label className="form-label">Category</label>
        <select
          onChange={this.update('category')}
          type="text">

          <option selected disabled>---</option>
          <option value="clothing">Clothing</option>
          <option value="jewelry">Jewelry</option>
          <option value="kids">Kids</option>
        </select>
        <button
          onClick={this.openWidget}
          className="primary-button form-button u-full-width">
          Add Picture
        </button>
        <input
          className="primary-button form-button u-full-width"
          type="submit"
          value={formType === "new" ? "Create" : "Update"} />
      </form>
    );
  }
}

export default ItemForm;