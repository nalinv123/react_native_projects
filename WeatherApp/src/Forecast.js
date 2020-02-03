import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Forecast extends Component {
    
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current Condition : {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp}°F
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { height: 130 },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#000000"
    },
    mainText: { flex: 1, fontSize: 16, textAlign: "center", color: "#000000" }
});

export default Forecast;