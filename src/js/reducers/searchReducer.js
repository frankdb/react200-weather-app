import moment from 'moment';

const initialState = {
  lat: null,
  lon: null,
  temp: 0,
  pressure: 0,
  humidity: 0,
  lowTemp: 0,
  highTemp: 0,
  wind: 0,
  searchInput: '',
  searchedCity: 'Enter a city',
  history: [],
  icon: '01d',
  error: false
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
        lowTemp: payload.data.main.temp_min.toFixed(0),
        highTemp: payload.data.main.temp_max.toFixed(0),
        wind: payload.data.wind.speed,
        icon: payload.data.weather[0].icon,
        error: false,
        history: [
          ...state.history,
          { searchedCity: payload.data.name, date: moment().format('l'), time: moment().format("h:mm:ss a") }
        ]
      }
    }

    case 'GET_WEATHER_FAIL': {
      return {
        ...state,
        error: true
      }
    }

    default: {
      return state;
    }

  }
}