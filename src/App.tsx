import * as React from 'react'
import { IWeatherData } from './types'
import './App.css';
import Search from './Search'
import WeatherDetails from './WeatherDetails'

interface IState {
  weather:IWeatherData | null
}

class App extends React.Component< {}, IState> {
  public readonly state: Readonly<IState> = {
    weather: null
  }

  public setWeatherDetails = (weather: IWeatherData) : any => {
    this.setState ({weather})
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search weather for your city</h1>
        </header>
        <Search className='searchField' onWeatherLoaded={this.setWeatherDetails}/>
        {this.state.weather ? 
          <WeatherDetails 
            weather={this.state.weather}
              /> 
            : null 
        }
      </div>
    );
  }
}

export default App
