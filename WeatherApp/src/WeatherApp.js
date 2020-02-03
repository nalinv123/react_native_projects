import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map';

/**
 * This is first componet which gets displayed on screen as soon as application started
 */
class WeatherApp extends Component {
    
    constructor(props) {
        super(props);
        this.state = { zip: "", forcast: null};
    }

    /**
     * This is callback function for a text input.
     * 
     * It is get executed when user enter the input and press the enter key.
     */
    _handleTextChange = event => {
        //taking the value enter by the user in text input.
        let zip = event.nativeEvent.text;

        /**
         * calling the function from Forcast.js component to fetch the current temparature from OpenWeatherMap API.
         */
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            console.log(forecast);
            this.setState({ forcast: forecast})
        });
        this.setState({zip: event.nativeEvent.text})
    }

    /**
     * This function actually renders the UI on screen
     */
    render() {
        let content = null;

        /**
         * Check the forecast variable value
         * 
         * if value is not null then initializing the content variable.
         */
        if (this.state.forcast !== null) {
            content = (
                <Forecast 
                    main={this.state.forcast.main}
                    description={this.state.forcast.description}
                    temp={this.state.forcast.temp}
                />
            );
        }
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input { this.state.zip }
                </Text>
                {content}
                <TextInput style={styles.input} onSubmitEditing={this._handleTextChange}></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    welcome: { fontSize: 20, textAlign: "center", margin: 10 },
    input: {
        fontSize: 20,
        borderWidth: 2,
        padding: 2,
        height: 40,
        width: 100,
        textAlign: "center"
    }
});

export default WeatherApp;