import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default MyButton = (props) => {

    return (
        props.disabled ?
            <TouchableOpacity
                {...props}
                accessible={false}>
                <View style={[styles.LoginBtnLogin]}>
                    {
                        props.Icon && props.Icon
                    }
                    <Text style={[styles.defoulteBtnTextLogin, props.labelStyle]}>{props.TextLabel}</Text>
                    {props.children}
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity
                {...props}
                accessible={false}>
                <View style={[styles.LoginBtnLogin]}>
                    {
                        props.Icon && props.Icon
                    }
                    <Text style={[styles.defoulteBtnTextLogin, props.labelStyle]}>{props.TextLabel}</Text>
                    {props.children}
                </View>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    LoginBtnLogin: {
        height: '100%',
        width: '100%',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    defoulteBtnTextLogin: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});