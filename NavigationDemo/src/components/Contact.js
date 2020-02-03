import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ContactComponent extends Component {

    render() {
        return (
            <View>
                <Text>ContactComponent</Text>
                <Button
                    title = "Go To Home"
                    onPress = {() => this.props.navigation.popToTop()}></Button>
            </View>
        )
    }
}

export default ContactComponent;