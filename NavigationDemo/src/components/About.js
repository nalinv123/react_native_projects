import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AboutComponent extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>AboutComponent</Text>
                <Button
                    title = "Go To Contact"
                    onPress = {() => this.props.navigation.navigate('Contact')}>
                </Button>
                <Button
                    title = "Go Back"
                    onPress = {() => this.props.navigation.goBack()}>
                </Button>
            </View>
        )
    }
}

export default AboutComponent;