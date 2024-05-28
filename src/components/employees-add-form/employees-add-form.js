import { Component } from "react";

// import "./employees-add-form.css";
import "./employees-add-form.scss";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.name.length > 3 && this.state.salary) {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: "",
        salary: "",
      });
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Додайте нового співробітника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            name="name"
            value={name}
            placeholder="Як його звати"
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            name="salary"
            value={salary}
            placeholder="З/п у $?"
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Додати
          </button>
        </form>
      </div>
    );
  }
}
export default EmployeesAddForm;
