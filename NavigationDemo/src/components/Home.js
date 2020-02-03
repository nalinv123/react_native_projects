import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

class HomeComponent extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>HomeComponent</Text>
                <Button
                    title = "Go To About Us"
                    onPress = {() => this.props.navigation.navigate('About')}></Button>
            </View>
        );
    }
}

export default HomeComponent;