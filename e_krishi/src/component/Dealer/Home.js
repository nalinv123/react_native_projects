import React, { Component } from "react";
import { Text, Container, Footer, FooterTab, Button, Content, Header, Tabs, Tab, TabHeading, View } from "native-base";
import { StyleSheet } from "react-native";
import DealerVegetables from "./Vegetables";
import DealerProfile from "./Profile";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOutAlt, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons'

class DealerHome extends Component {
    

    static navigationOptions = {
        headerLeft: () => null,
        headerRight: () => (
            <Button transparent>
                <FontAwesomeIcon icon = { faSignOutAlt } size = { 20 }></FontAwesomeIcon>
                <Text>Logout</Text>
            </Button>
        )
    };

    render() {
        return (
            <Container>
                <View>
                    <Text> { this.props.dealer.email } </Text>
                </View>
                <Header style = { styles.tabHeader } hasTabs />
                <Tabs>
                    <Tab heading = { <TabHeading><FontAwesomeIcon icon={ faSeedling } size = { 25 } /><Text>Vegetables</Text></TabHeading>}>
                        <DealerVegetables />
                    </Tab>
                    <Tab heading = { <TabHeading><FontAwesomeIcon icon = { faUser } size = { 25 }/><Text>Profile</Text></TabHeading> }>
                        <DealerProfile />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    tabHeader: {
        flex: 1,
        marginTop: 0
    }
});

const mapStateToProps = (state) => {
    const { dealer } = state;
    return { dealer };
}

export default DealerHome;