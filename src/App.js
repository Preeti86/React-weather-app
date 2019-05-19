import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY= '46699eb5ebcf527b5236072a90e9c972';

class App extends React.Component {
    state = {
        
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
    }
    render() {
        return (
             <div className="container">
                   <Titles />
                    <Form getWeather={this.getWeather}/>
                     <Weather />

             </div>
        );
    }

}

export default App;