import React, { Component } from "react";
import { Form, Item, Label, View, Button, Text } from "native-base";
import { StyleSheet } from "react-native";

class DealerRegisterComponent extends Component {
    render() {
        return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                    </Item>
                    <Item floatingLabel>
                        <Label>Email</Label>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                    </Item>
                    <Item floatingLabel>
                        <Label>City</Label>
                    </Item>
                    <Item floatingLabel>
                        <Label>Mobile No</Label>
                    </Item>
                    <Button style = { styles.registerButton }>
                        <Text>
                            Register
                        </Text>
                    </Button>
                </Form>
                <View style = { styles.signInLink }>
                    <Text>
                    Already have an account? 
                    </Text>
                    <Button transparent onPress = { () => this.props.navigation.navigate('DealerLogin') }>
                        <Text>Sign In.</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    registerButton: {
        margin: 20
    },
    signInLink: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    }
})

export default DealerRegisterComponent;