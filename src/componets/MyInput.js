import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View } from "react-native";
import ColorsLib from "../themes/ColorsLib";
import MyTextInputClearable from "./MyTextInputClearable";
const MyInput = (props) => {
    return (
        <View style={props.style}>
            <Text style={styles.inputLabel}>
                {props.label}
            </Text>
            <View
                style={[styles.labelCont, styles.shadowStyle]}>
                <MyTextInputClearable
                    containerStyle={styles.inputTextCont}
                    style={styles.inputText}
                    onSubmitEditing={props.onSubmitEditing}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={props.placeholder ? props.placeholder : props.label}
                    placeholderTextColor={'#cccccc'}
                    editable={props.editable}
                    onPressClear={() => {
                        if (props.onPressClear) {
                            props.onPressClear('');
                        } else if (props.onChangeText) {
                            props.onChangeText('');
                        }
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputLabel: {
        color: "#CCCCCC",
        fontWeight: '400',
        fontSize: 12,
        paddingBottom: 7
    },
    labelCont: {
        alignItems: 'center',
    },
    inputText: {
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        fontSize: 9,
        fontWeight: '400',
        paddingLeft: 17,
        paddingRight: 7,
        color: '#474657',
        paddingTop: 0,
        paddingBottom: 0,
        width: 302,
        height: 30,
    },
    inputTextCont: {
        height: 30,
    },
    shadowStyle: {
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowColor: "black",
        elevation: 2,
        overflow: 'visible',
    },
})

export default MyInput;