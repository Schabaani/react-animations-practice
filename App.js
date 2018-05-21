/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing, Button
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(){
        super();
        this.spinValue = new Animated.Value(0);
        this.clickMe = this.clickMe.bind(this);
    }
    componentDidMount () {

    }

    clickMe(){
        this.spin()
    }
    spin () {
        // this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    render () {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={styles.container}>
                <Button onPress={()=> this.clickMe()} title="Rotate me!"/>
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{rotate: spin}] }}
                    source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
