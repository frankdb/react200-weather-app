import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ city: e.target.value });
  }

  handleSubmit(city) {
    const searchedCity = this.state.city;
    this.props.getWeather(searchedCity);
  }

  handleClick(e) {
    this.props.getWeather(e.target.name);
  }

  render() {
    return (
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>

        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary" onClick={this.handleClick} name="San Diego">San Diego</button>
          <button type="button" className="btn btn-primary" onClick={this.handleClick} name="New York">New York</button>
          <button type="button" className="btn btn-primary" onClick={this.handleClick} name="Washington">Washington D.C.</button>
          <button type="button" className="btn btn-primary" onClick={this.handleClick} name="London">London</button>
          <button type="button" className="btn btn-primary" onClick={this.handleClick} name="Tokyo">Tokyo</button>
        </div>

        <div className="form-group">
          <input type="city" className="form-control" id="searchForm" placeholder="Enter city" value={this.state.city} onChange={this.handleChange} />
          <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Get Weather</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { getWeather })(Search)
