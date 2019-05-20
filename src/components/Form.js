import React from 'react';

const Form = props => (
    <div>
            <form onSubmit={props.getWeather}>
                <div>
                <input type="text" name="city" placeholder="City..."/>
                <button>Get weather</button>
                </div>
            </form>
       </div>
);

export default Form;
