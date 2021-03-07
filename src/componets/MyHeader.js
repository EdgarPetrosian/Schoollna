import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useEffect, useState } from 'react';
import IconM from 'react-native-vector-icons/MaterialIcons';
import SvgMenuIcon from "../themes/SVG/SvgMenuIcon";
import SvgNotification from "../themes/SVG/SvgNotification";
import { useIsDrawerOpen } from '@react-navigation/drawer';
import SvgNoUserImage from "../themes/SVG/SvgNoUserImage";
const menuIcon = <SvgMenuIcon />;
const notificationIcon = <SvgNotification />;
const noimageIcon = <SvgNoUserImage width={25} height={25} />;
const closeIcon = <IconM name="close" color={'#fff'} size={35} />;

const MyHeader = (props) => {

    const [changeIcon, setChangeIcon] = useState(false)
    const [user, setUser] = useState(null)
    const [notificationCount, setNotificationCount] = useState(3)
    const isOpen = useIsDrawerOpen()
    useEffect(() => {
        if (!isOpen) {
            setChangeIcon(false)
        }
    }, [isOpen])
    // "route": {"key": "Home-nqkTiugCNzCLU4Sp2oSZg", "name": "Home", "params": undefined}
    console.log(props.navigation.navigate);
    // const { options } = scene.descriptor;
    // const title =
    //     options.headerTitle !== undefined
    //         ? options.headerTitle
    //         : options.title !== undefined
    //             ? options.title
    //             : scene.route.name;

    return {
        cardStyle: styles.cardStyle,
        headerStyle: styles.headerStyle,
        title: props.route.name,
        headerLeft: () => (
            <TouchableOpacity onPress={() => {
                props.navigation.openDrawer()
                setChangeIcon(!changeIcon)
            }}
                style={{ paddingLeft: 31 }}>
                {changeIcon ? closeIcon : menuIcon}
            </TouchableOpacity>
        ),
        headerRight: () => (
            <View style={styles.headerRightCont}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Notification')
                }}
                    style={styles.rightIconLeftCont}>
                    {
                        notificationCount ?
                            <View style={styles.notificationCountCont}>
                                <Text style={styles.notificationCountText}>
                                    {notificationCount}
                                </Text>
                            </View> : null
                    }
                    {notificationIcon}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('MyProfile')
                    // setChangeIcon(!changeIcon)
                }}
                    style={{ paddingRight: 31 }}>
                    {
                        user ? <Image
                            source={{
                                uri: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg',
                            }}
                            resizeMode="center"
                            style={styles.avatar}
                        /> : noimageIcon
                    }
                </TouchableOpacity>
            </View>
        ),
    }
};

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#010020',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderColor: 'transparent',
        borderWidth: 0,
    },
    headerStyle: {
        backgroundColor: '#010020',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
    },
    headerRightCont: {
        flexDirection: 'row'
    },
    rightIconLeftCont: {
        paddingRight: 20,
        justifyContent: 'flex-end',
        paddingBottom: 5,
    }
})

export default MyHeader;