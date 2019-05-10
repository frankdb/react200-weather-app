import React from 'react';
import { connect } from 'react-redux';

function CityInformation(props) {
  console.log(props.city);

  function getIcon() {
    if (props.city.icon) {
      return (
        <img src={`http://openweathermap.org/img/w/${props.city.icon}.png`}></img>
      )
    } else {
      return null;
    }
  }

  return (
    <div className="card">
      <h5 className="card-header text-white bg-primary mb-3">City Information</h5>
      <div className="card-body">

        <h3 className="card-title text-center text-secondary">{props.city.searchedCity}</h3>
        <div className="d-flex justify-content-center">{getIcon()}</div>

        <div className="row">
          <div className="col">
            <h6 className="text-center">Temperature (F)</h6>
            <p className="text-center text-success font-weight-bold">{props.city.temp + 'F'}</p>
          </div>
          <div className="col">
            <h6 className="text-center">Pressure</h6>
            <p className="text-center text-success font-weight-bold">{props.city.pressure}</p>
          </div>
          <div className="col">
            <h6 className="text-center">Humidity</h6>
            <p className="text-center text-success font-weight-bold">{props.city.humidity + '%'}</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h6 className="text-center">Lowest Temp (F)</h6>
            <p className="text-center text-success font-weight-bold">{props.city.lowTemp + 'F'}</p>
          </div>
          <div className="col">
            <h6 className="text-center">Highest Temp (F)</h6>
            <p className="text-center text-success font-weight-bold">{props.city.highTemp + 'F'}</p>
          </div>
          <div className="col">
            <h6 className="text-center">Wind Speed</h6>
            <p className="text-center text-success font-weight-bold">{props.city.wind + 'mph'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    city: state.data
  }
}

export default connect(mapStateToProps)(CityInformation);
