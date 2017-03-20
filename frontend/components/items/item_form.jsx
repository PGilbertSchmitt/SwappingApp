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
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.closeModal();
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
        <label className="form-label">Description</label>
        <textarea
          className="u-full-width form-item form-textarea"
          onChange={this.update('description')} />
        <label className="form-label">Category</label>
        <select
          onChange={this.update('category')}
          type="text">

          <option value="clothing">Clothing</option>
          <option value="jewelry">Jewelry</option>
          <option value="kids">Kids</option>
        </select>
        <label className="form-label">Photo</label>
        <input
          className="u-full-width form-item"
          onChange={this.update('photo_url')}
          type="text" />
        <input
          className="form-button primary-button"
          type="submit"
          value={formType === "new" ? "Create" : "Update"} />
      </form>
    );
  }
}

export default ItemForm;