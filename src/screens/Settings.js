import React, { useEffect } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

export default (props) => {

    useEffect(() => {
        mounted = true;
        const fill = async () => {
            props.navigation.setOptions({

                headerTitle: () => (
                    <Text style={[styles.headerTitleStyle]}>
                        {'Settings'}
                    </Text>
                ),
            });
        }
        if (mounted) {
            fill();
        }
        return () => { mounted = false };
    }, []);

    return (
        <View
            style={{
                backgroundColor: "#ffffff",
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                borderRadius: 25,

            }}>
            <StatusBar />
            <Text >
                Settings
      </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerTitleStyle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
})