const axios = require('axios');

export const getWeather = city => {
  return dispatch => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c36de55d2876618e06c7ba365992b895&units=imperial`)
      .then(data => dispatch({ type: 'GET_WEATHER', payload: data }))
      .catch(err => dispatch({ type: 'GET_WEATHER_FAIL', error: true }))


  }
}