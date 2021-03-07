import React, { useEffect } from 'react';
import { StatusBar, View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default (props) => {

    useEffect(() => {
        mounted = true;
        // const fill = async () => {
        //     props.navigation.setOptions({

        //         headerTitle: () => (
        //             <Text style={[styles.headerTitleStyle]}>
        //                 {'Home'}
        //             </Text>
        //         ),
        //     });
        // }
        // if (mounted) {
        //     fill();
        // }
        return () => { mounted = false };
    }, []);

    return (
        <View
            style={{
                backgroundColor: "#fff",
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                borderRadius: 25,
            }}>
            <StatusBar />
            <Text >
                Home
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