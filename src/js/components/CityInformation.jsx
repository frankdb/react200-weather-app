import React from 'react';
import { connect } from 'react-redux';

function CityInformation(props) {
  console.log(props.city);
  return (
    <div className="card">
      <h5 className="card-header text-white bg-primary mb-3">City Information</h5>
      <div className="card-body">
        <h5 className="card-title text-center">{props.city.searchedCity}</h5>

        <div className="row">
          <div className="col">
            <h6>Temperature (F)</h6>
            {props.city.temp + 'F'}
          </div>
          <div className="col">
            {/* {props.city.} */}
          </div>
          <div className="col">
            {/* {props.city.} */}
          </div>
        </div>

        <div className="row">
          <div className="col">
            {/* {props.city.} */}
          </div>
          <div className="col">
            {/* {props.city.} */}
          </div>
          <div className="col">
            {/* {props.city.} */}
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
