import { Modal, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Spinner } from 'native-base';

function Loader(props) {
    //console.log("insidel loader ", props);
        return (
            <Modal
            transparent = { true }
            animationType = { 'none' }
            visible = { props.loadingState.isLoading }
            onRequestClose = { () => { console.log("close modal") } }>
                <View style = { styles.modalBackground }>
                    <View style = { styles.activityIndicatorWrapper }>
                        <Spinner animating = { props.loadingState.isLoading } />
                    </View>
                </View>
        </Modal>
        )
}

const styles = StyleSheet.create(
    {
        modalBackground: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: '#00000040'
        },
        activityIndicatorWrapper: {
            backgroundColor: "#ffffff",
            height: 100,
            width: 100,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        }
    }
)

export default Loader;