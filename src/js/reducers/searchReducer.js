import moment from 'moment';

const initialState = {
  lat: null,
  lon: null,
  temp: 0,
  pressure: 0,
  humidity: 0,
  Lowtemp: 0,
  Hightemp: 0,
  Wind: 0,
  searchInput: '',
  searchedCity: 'New York',
  history: [],
  icon: ''
};

export default function searchReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'GET_WEATHER': {
      return {
        ...state,
        searchedCity: payload.data.name,
        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp.toFixed(0),
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        Lowtemp: payload.data.main.temp_min.toFixed(0),
        Hightemp: payload.data.main.temp_max.toFixed(0),
        Wind: payload.data.wind.speed,
        icon: payload.data.weather[0].icon,
        history: [
          ...state.history,
          { searchedCity: payload.data.name, date: moment().format('l'), time: moment().format("h:mm:ss a") }
        ]
      }
    }
    default: {
      return state;
    }

  }
}