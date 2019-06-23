import * as React from 'react'
import { Component } from 'react'
import { IWeatherData } from './types'


interface IProps {
	weather: IWeatherData
}

class WeatherDetails extends Component <IProps> {
	public render() {
	return(
		<React.Fragment>
			<div className='weatherDetails'>
				<h4>Weather Details</h4>
				<p>{this.props.weather.city}, {this.props.weather.country} <img src={`http://openweathermap.org/img/w/${this.props.weather.icon}.png`} alt='weather icon'/></p>
				<table>
					<thead>
						<tr >
						<th>Temp Min</th>
						<th>Temp Max</th>
						<th>Humidity</th> 
						<th>Pressure</th>
						<th>Condition</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{this.props.weather.minTemperature} <>&#x2103;</></td>
							<td>{this.props.weather.maxTemperature} <>&#x2103;</></td>
							<td>{this.props.weather.humidity} <>&#37;</></td>
							<td>{this.props.weather.pressure} hPa</td>
							<td>{this.props.weather.description}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	)
	}
}

export default WeatherDetails
