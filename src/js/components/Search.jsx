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
  }

  handleChange(e) {
    this.setState({ city: e.target.value });
  }

  handleSubmit(city) {
    const searchedCity = this.state.city;
    this.props.getWeather(searchedCity);
  }

  render() {
    return (
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div className="form-group">
          <input type="city" className="form-control" id="searchForm" placeholder="Enter city" value={this.state.city} onChange={this.handleChange} />
          <button className="btn btn-primary" onClick={() => this.handleSubmit()}>Get Weather</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { getWeather })(Search)
