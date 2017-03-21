import React, { Component } from 'react';

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
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.action(this.state);
    this.props.closeModal();
  }

  openWidget(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinaryOptions,
      (error, results) => {
        if (!error) {
          console.log(results[0]);
        } else {
          console.log(`!!! ${error}`);
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
        <label className="form-label">Name</label>
        <input
          className="u-full-width form-item"
          onChange={this.update('name')}
          type="text" />
        <label className="form-label">photo_url</label>
        <input
          className="u-full-width form-item"
          onChange={this.update('photo_url')}
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
          className="primary-button form-button u-full-width">Add Picture</button>
        <input
          className="primary-button form-button"
          type="submit"
          value={formType === "new" ? "Create" : "Update"} />
      </form>
    );
  }
}

export default ItemForm;