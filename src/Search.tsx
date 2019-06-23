import * as React from 'react';
import { IWeatherData } from './types';
import * as request from 'superagent';

const API_KEY = "30f7d6bf3fa61ff34cadd980de4c718c"

interface IState {
    inputCity: string
    searchedCity: string
}

interface IProps {
    onWeatherLoaded: (weather: IWeatherData) => void
}


export default class Search extends React.Component <IProps & { className: string }, IState> {
    public state: IState = {   
      inputCity: '',
      searchedCity: ''
  }

    public searchHandler = (event: React.FormEvent <HTMLInputElement>) : void => {
        this.setState({inputCity : event.currentTarget.value})
    }

    public handleSubmit = (event: React.FormEvent <HTMLFormElement>) : void => {
        this.setState({searchedCity : this.state.inputCity}, this.fetchWeather)
        event.preventDefault()
    }

    public fetchWeather = () => {
        request.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchedCity}&appid=${API_KEY}&units=metric`)
            .then(res => {
                // console.log(res)
                const data: any = res.body   
                this.props.onWeatherLoaded({
                    city: data.name,
                    country: data.sys.country,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    icon: data.weather[0].icon,
                    maxTemperature: data.main.temp_max,
                    minTemperature: data.main.temp_min,
                    pressure: data.main.pressure,
                    temperature: data.main.temp,
                })
            })
            .catch(err => {
                if(err) {
                    alert('Unable to find city')
                }
            })
    }

    public render() { 
      return ( 
          <div className='searchField'>
              <form onSubmit={this.handleSubmit}>
                  <label>
                      <input type='text' name='search' placeholder='enter city' 
                          onChange={this.searchHandler} 
                          value={this.state.inputCity} />
                  </label>
                  <button type='submit' value='Submit'> Search </button>
              </form>
          </div>
      )
  } 
  }

