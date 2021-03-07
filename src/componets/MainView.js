import React from 'react';
import { View, StyleSheet, StatusBar, } from 'react-native';

const MainView = (props) => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} />
            <View
                style={[styles.generalCont, props.style]}>
                {props.children}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    generalCont: {
        // flex: 1,
        // backgroundColor: '#ffffff'
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 25,
    },
})

export default MainView;