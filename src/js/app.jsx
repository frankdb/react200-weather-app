import React from 'react';

import Search from './components/Search';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div style={{ backgroundColor: 'grey', padding: '20px', marginTop: '20px' }}>
          <h1>Frank's Weather App</h1>
          <h4>It's getting hot in here...</h4>
        </div>

        <Search />

        <div className="row">
          <div className="col-md-7">
            <CityInformation />
          </div>

          <div className="col-md-5">
            <SearchHistory />
          </div>
        </div>

      </div>
    );
  }
}
