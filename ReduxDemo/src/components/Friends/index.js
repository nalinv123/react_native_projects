import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFriend } from '../../actions/FriendActions';

class FriendsComponet extends Component {

    render() {
        return (
            <View style = { styles.container }>
                <Text>Add friends here!</Text>
                {
                    this.props.friends.possible.map((friend, index) => (
                    <Button
                        key={ friend }
                        title={ `Add ${ friend }` }
                        onPress={() =>
                            this.props.addFriend(index)
                        }
                    />
                )
            )
            }
                <Button
                    title = "Back To Home"
                    onPress = {
                        () => this.props.navigation.popToTop()
                    }>
                </Button>
            </View>
        )
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

// This function is used for dispatching the actions to the redux store.
const mapDispatchToProps = dispath => (
    bindActionCreators({
        addFriend,
    }, dispath)
);

// Componets can not access the redux store direcctly so we are using connect method to access the store.
export default connect(mapStateToProps, mapDispatchToProps)(FriendsComponet);