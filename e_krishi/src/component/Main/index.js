import React, { Component } from "react";
import { Button, Text, View } from 'native-base';
import { ImageBackground, StyleSheet } from "react-native";

class MainComponent extends Component {

    render() {
        return (
            <ImageBackground source={require("../../assets/images/backhome.jpg")} style =  {styles.backgroundImage} >
                 <Text style = { styles.Header }>E-Krishi</Text>
                 <View style = { styles.ButtonView }>
                     <Button transparent style = { styles.ButtonStyle } onPress = { () => this.props.navigation.navigate('CropSearch') }>
                         <Text>Farmer</Text>
                     </Button>
                    <Button transparent style = { styles.ButtonStyle } onPress = { () => this.props.navigation.navigate('DealerLogin') }>
                        <Text>Dealer</Text>
                    </Button>
                 </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
    Header: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    ButtonView: {
        flexDirection: 'row',
    },
    ButtonStyle: {
        margin: 20
    }
})

export default MainComponent;