import React, { Component } from "react";
import { View, Text, Container, Content, Card, CardItem, Body, ListItem, Separator, Thumbnail, Button, Form, Item, Label, Input } from "native-base";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { StyleSheet } from "react-native";
import AccordionList from "accordion-collapse-react-native/build/components/AccordionList";
import { TextInput } from "react-native-gesture-handler";

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

      <AccordionList
        list = { this.state.data }
        header = { this._head }
        body = { this._body }
      />
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

export default DealerVegetables;