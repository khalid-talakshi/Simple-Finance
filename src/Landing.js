import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnPrimary}>
                    <Text style={styles.txtBtnPrimary}>Hello World!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#474787',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPrimary: {
        width: 129,
        height: 48,
        borderColor: '#33D9B2',
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 4,
        //backgroundColor:'#33D9B2',
        color: '#33D9B2'
    },
    txtBtnPrimary: {
        color: '#fff',
        alignSelf: 'center',
        paddingTop: '10%'
    }
});