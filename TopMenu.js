import React, {Component} from "react";
import {Animated, StyleSheet, TouchableWithoutFeedback, View} from "react-native";

export default class TopMenu extends Component {
    state = {
        played: false,
        text: 'Click Me, to open menu!',
        animation: new Animated.Value(100),
    };

    closeAnimation = () => {

        Animated.sequence([
            Animated.timing(this.state.animation, {
                toValue: 50,
                duration: 250
            }),

        ]).start(() => {
            this.setState({
                text: 'Click me, to close menu!',
                played: false
            });
        });
    };

    openAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.animation, {
                toValue: 150, //Dimensions.get('window').height,
                duration: 250
            }),
        ]).start(() => {
            this.setState({
                played: true,
                text: 'Click Me, to open menu!'
            });
        });
    };

    startAnimation = () => {
        if(!this.state.played) {
            this.openAnimation();
        } else {
            this.closeAnimation();
        }
    };

    render() {
        const animatedStyles = {
            height: this.state.animation,
            width: "100%"

        };
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]}>
                        <Animated.Text style={[ styles.intro ]}>{this.state.text}</Animated.Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    intro: {
        color: 'white',
        fontSize: 22,
        width: "100%",
        textAlign:'center'

    },
    box: {
        width: "100%",
        height: 50,
        backgroundColor: "tomato",
        alignItems: 'center',
        justifyContent: 'center',
    }
});
