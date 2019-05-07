import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />

        <Search />

        <div className="row">
          <div className="col-md-6">
            <CityInformation />
          </div>

          <div className="col-md-6">
            <SearchHistory />
          </div>
        </div>

      </div>
    );
  }
}
