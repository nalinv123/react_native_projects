import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

class HomeComponent extends Component {

    render() {
        return (
            <View style = { styles.container }>
                <Text>We have { this.props.friends.current.length } friends!</Text>
                <Button
                    title = "Add some friends"
                    onPress = {
                        () => this.props.navigation.navigate('Friends')
                    }>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// This function maps the state to the components prop.
const mapStateToProps = (state) => {
    const { friends } = state;
    return { friends };
}

export default connect(mapStateToProps)(HomeComponent);