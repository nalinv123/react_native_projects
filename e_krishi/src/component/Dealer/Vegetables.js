import React, { Component } from "react";
import { View, Text, Separator, Button, Form, Item, Label, Input } from "native-base";
import { StyleSheet } from "react-native";
import AccordionList from "accordion-collapse-react-native/build/components/AccordionList";
import { connect } from 'react-redux';
import { delearAction } from "../../actions/action";
import Loader from "../loader";
import AsyncStorage from '@react-native-community/async-storage';
import ValidationError from "../ValidationError";

class DealerVegetables extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
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

  UNSAFE_componentWillReceiveProps(props) {
    //console.log("vegetables props : ", props)
    let dealerVegetables = ( props.dealerState.dealer || {}).dealerVegetables;
    //console.log("vegetables props : ", dealerVegetables)
    if (dealerVegetables !== undefined && dealerVegetables.length !== 0) {
      this.setState({
        data: this._addKeysToVegetables(dealerVegetables)
      })
    }
  }

  _head(item) {
    //console.log(item)
    return (
      <Separator bordered style = {{ alignItems: "center" }}>
        <Text>{ item.vegetables.name }</Text>
      </Separator>
    );
  }

  _body(item) {
    //console.log(item);
    return (
      <View style = {{ padding: 10, flex: 1, flexDirection: "column" }}>
        <Form>
          <Item floatingLabel last>
            <Label>Price</Label>
            <Input
              value = { item.price }
            />
          </Item>
          <Button style = { styles.addButton }>
            <Text>Add</Text>
          </Button>
        </Form>
      </View>
    );
  }

  _addKeysToVegetables = vegetables => {
    //console.log(vegetables)
    return vegetables.map(vegetable => {
      return Object.assign(vegetable, { key: vegetable.vegetables.name });
    });
  }

  render() {
    //console.log("In vegetables render state ", this.state.demo)
    //console.log("In vegetables render props ", this.props.dealerState)
    let noVegetablesNotice;
    if ( this.state.data.length === 0 ) {
      noVegetablesNotice = <ValidationError Error = "You have not added any vegetable. Please click on Add to add the vegetable." />
    }

    return (
      <View style = { styles.container }>
        <Loader loadingState = { this.props.loaderState } />

        <View>{ noVegetablesNotice }</View>

        <AccordionList
          list = { this.state.data }
          header = { this._head }
          body = { this._body }
        />
        
        <Button style = { styles.addButton }>
          <Text>
            Add New vegetable
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  addButton: {
    margin: 20
  },
});

const mapStateToProps = (state) => {
  return {
    dealerState: state.dealerState,
    loaderState: state.loaderState,
  };
}

const mapDispatchToProps = dispatch => ({
  getDealerVegetables: (dealerEmail, token) => dispatch(delearAction.getDealerVegetables(dealerEmail, token))
});

export default connect(mapStateToProps, mapDispatchToProps) (DealerVegetables);
