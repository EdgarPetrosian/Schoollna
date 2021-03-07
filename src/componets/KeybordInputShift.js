import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Keyboard, TouchableWithoutFeedback, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')
const KeybordInputShift = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={height <= 667 ? 65 : 90}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                    {props.children}
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
});

export default KeybordInputShift;