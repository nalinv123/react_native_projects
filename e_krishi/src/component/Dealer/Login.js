import React, { Component } from "react";
import { View, Form, Item, Label, Text, Button, Input } from "native-base";
import { StyleSheet } from "react-native";
import { validateField } from "../../validator/validationService";

class DealerLoginComponet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    _onSubmit() {
        //this.props.navigation.navigate('DealerHome')
        //navigate.navigate('DealerHome');
        const email = validateField('email', this.state.email);
        const password = validateField('password', this.state.password);

        if(!email && !password) {
            alert("correct");
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = { styles.container }>
                <View style = { styles.headerView }>
                    <Text style = { styles.headerText }>Login</Text>
                </View>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            onChangeText = { (text) => this.setState({ email: text })}
                            value = { this.state.email }
                            // onBlur =
                        />
                    </Item>
                    <Text value = { this.state }></Text>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input 
                            secureTextEntry = { true }
                            onChangeText = { (password) => this.setState({ password })}
                            value = { this.state.password }
                        />
                    </Item>
                    <Button style = { styles.loginButton } onPress = { this._onSubmit }>
                        <Text>Login</Text>
                    </Button>
                </Form>
                <View style = { styles.signUpNowLink }>
                    <Text>
                        Does not have account?
                    </Text>
                    <Button transparent onPress = { () => this.props.navigation.navigate('DealerRegister') }>
                        <Text>
                            Sign up now.
                        </Text>
                    </Button>
                </View>
            </View>
        )
    }
}

// This function maps the state to the components prop.
// const mapStateToProps = (state) => {
//     const { delearState } = state;
//     return { delearState };
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20
    },
    loginButton: {
        margin: 20
    },
    signUpNowLink: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    }
})

export default DealerLoginComponet;