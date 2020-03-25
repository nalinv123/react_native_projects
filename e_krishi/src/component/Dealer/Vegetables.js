import React, { Component } from "react";
import { View, Text, Separator, Button, Form, Item, Label, Input } from "native-base";
import { StyleSheet } from "react-native";
import AccordionList from "accordion-collapse-react-native/build/components/AccordionList";
import { connect } from 'react-redux';
import { delearAction } from "../../actions/action";
import Loader from "../loader";
import AsyncStorage from '@react-native-community/async-storage';

class DealerVegetables extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: 
      [
        {
          id: "1",
          title: "one",
          content: "hello"
        },
        {
          id: "2",
          title: "two",
          content: "bye"
        },
        {
          id: "3",
          title: "three",
          content: "goog"
        }
      ]
    };
  }
  
  UNSAFE_componentWillMount() {
    AsyncStorage.getItem('dealer', (error, result) => {
      if (result)
      {
        //console.log("In will mount : ", JSON.parse(result));
        const dealer = JSON.parse(result);
        if (dealer && dealer.token) {
          let email = (dealer.dealer || {}).email;
          const dealerEmail = {
            email: email
          };
          this.props.getDealerVegetables(dealerEmail, dealer.token);
        }
      } else {
        this.props.navigation.navigate('DealerLogin');
      }
    });
  }

  _head(item) {
    return (
      <Separator bordered style = {{ alignItems: "center" }}>
        <Text>{ item.title }</Text>
      </Separator>
    );
  }

  _body(item) {
    return (
      <View style = {{ padding: 10, flex: 1, flexDirection: "column" }}>
        <Form>
          <Item floatingLabel last>
            <Label>Price</Label>
            <Input />
          </Item>
          <Button style = { styles.addButton }>
            <Text>Add</Text>
          </Button>
        </Form>
      </View>
    );
  }
  
  render() {
    
    return (
      <View>
        <Loader loadingState = { this.props.loaderState } />
        
        <AccordionList
          list = { this.state.data }
          header = { this._head }
          body = { this._body }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    addButton: {
      margin: 20
  },
});

const mapStateToProps = (state) => {
  return {
    loaderState: state.loaderState,
  };
}

const mapDispatchToProps = dispatch => ({
  getDealerVegetables: (dealerEmail, token) => dispatch(delearAction.getDealerVegetables(dealerEmail.email, token))
});

export default connect(mapStateToProps, mapDispatchToProps) (DealerVegetables);