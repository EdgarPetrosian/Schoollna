// import React, { useEffect } from 'react';
// import { StatusBar, View, Text, StyleSheet } from 'react-native';

// export default (props) => {

//     useEffect(() => {
//         mounted = true;
//         return () => { mounted = false };
//     }, []);

//     return (
//         <View
//             style={{
// backgroundColor: "#ffffff",
// alignItems: 'center',
// justifyContent: 'center',
// flex: 1,
// borderRadius: 25,
//             }}>
//             <StatusBar />
//             <Text >Login </Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     headerTitleStyle: {
//         color: '#ffffff',
//         fontSize: 18,
//         fontWeight: '400',
//         textAlign: 'center',
//     },
// })

import React, { useState, useEffect, useRef, useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainView from '../componets/MainView';
import MyButton from '../componets/MyButton';
import MyInput from '../componets/MyInput';
import MyTextInputClearable from '../componets/MyTextInputClearable';
import { AuthContext } from '../service/context';
import ColorsLib from '../themes/ColorsLib';
import SvgLoginPassLogo from '../themes/SVG/SvgLoginPassLogo';
import SvgLoginUserLogo from '../themes/SVG/SvgLoginUserLogo';

export const handleUnhandledTouches = () => {
    Keyboard.dismiss()
    return false;
}

export const handleBiometricSecure = () => {

    return true;
}

const LoginScreen = () => {
    let mounted = false;
    const { signIn } = useContext(AuthContext);
    const [login, updateLogin] = useState("");
    const [password, updatePassword] = useState("");
    const [isLoading] = useState(false);
    const refInputPassword = useRef();

    const focusInputPassword = () => {
        refInputPassword.current.focus()
    };

    const isDebugMode = () => {
        updateLogin("edgar")
        updatePassword("1234")
    };

    const getUserLoginData = async () => {

    }

    useEffect(() => {
        mounted = true;
        const setAppLanguage = () => {
        }
        if (mounted) {
            setAppLanguage()
            getUserLoginData()
        }
        return () => { mounted = false };
    }, [])

    useEffect(() => {
        mounted = true;
        const setUser = async () => {
        }
        if (mounted) {
            setUser()
        }
        return () => { mounted = false };
    }, [])

    return (
        <MainView showModal>
            <StatusBar barStyle="dark-content" backgroundColor={"#00E1DB"} />
            <TouchableWithoutFeedback
                onPress={() => {
                    handleUnhandledTouches()
                }}>
                <View
                    style={styles.LinearcontainerLogin}>
                    <KeyboardAvoidingView
                        style={styles.keyAvoidingViewLogin}
                        keyboardVerticalOffset={Platform.select({ ios: 0, android: 35 })}
                        behavior="position"
                        enabled={true}>
                        <Text style={styles.topTitle}>Wellcome...</Text>
                        <Text style={styles.topTitle}>Let's get you <Text style={styles.topSecondTitle}>Connected</Text></Text>

                        <MyInput
                            style={{ paddingTop: 20, }}
                            label={'Username'}
                            placeholder={'Enter your username'}
                            value={login}
                            onChangeText={(value) => {
                                updateLogin(value);
                            }}
                        />
                        <MyInput
                            style={{ paddingTop: 15, }}
                            label={'Password'}
                            placeholder={'Enter your Password'}
                            value={password}
                            onChangeText={(value) => {
                                updatePassword(value)
                            }}
                        />
                        <TouchableOpacity style={styles.forgotTouchCont}>
                            <Text
                                style={styles.forgotTouchText}>
                                Forgot your password?
                        </Text>
                        </TouchableOpacity >
                        <MyButton
                            disabled={isLoading}
                            labelStyle={styles.labelStyle}
                            style={styles.SectionButtonStyleLogin}
                            onPress={() => {
                                console.log('login  = ', login, password);
                                signIn(login, password)
                            }}
                            TextLabel={'Sign In'} >
                            {
                                isLoading &&
                                <ActivityIndicator style={styles.ProgressStyle} size='small' color="#A4A9B9" />
                            }
                        </MyButton>
                        <Text
                            style={styles.dontHaveAccountText}>
                            Don't have an account yet?
                        </Text>
                        <MyButton
                            disabled={isLoading}
                            labelStyle={styles.signUplabelStyle}
                            style={[styles.signUpBtn, styles.shadowStyle]}
                            onPress={() => {

                            }}
                            TextLabel={'Sign Up'} >
                            {
                                isLoading &&
                                <ActivityIndicator style={styles.ProgressStyle} size='small' color="#A4A9B9" />
                            }
                        </MyButton>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </MainView>
    );
};

const styles = StyleSheet.create({
    forgotTouchCont: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 15,
    },
    dontHaveAccountText: {
        color: '#313131',
        fontWeight: '400',
        fontSize: 9,
        textAlign: 'center',
        paddingTop: 20,
    },
    forgotTouchText: {
        color: '#F4B220',
        fontWeight: '400',
        fontSize: 12,
    },
    topTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#313131',
    },
    topSecondTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#313131',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    svgUbicross: { marginBottom: 5 },
    GeneralViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyAvoidingViewLogin: {
        width: '100%',
        paddingLeft: 36,
        paddingRight: 36,
        paddingTop: 22,
    },
    marginBottom: {
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    LinearcontainerLogin: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: "#ffffff",
        alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        borderRadius: 25,
    },
    InpuStyleLogin: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
        color: '#474657',
        paddingTop: 0,
        paddingBottom: 0,
        height: 50,
    },
    iconLogin: {
        width: 15,
        height: 15,
        marginLeft: 15,
        resizeMode: 'contain',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    SectionStyleLogin: {
        height: 50,
        alignItems: 'center',
    },
    SectionButtonStyleLogin: {
        marginTop: 106,
        width: 302,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007481'
    },
    signUpBtn: {
        marginTop: 20,
        width: 302,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
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
    labelStyle: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
    },
    signUplabelStyle: {
        color: '#007481',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
    },
    ProgressStyle: {
        position: 'absolute',
        right: 15,
    },
    AboutDiviceView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15
    },
    aboutVersionTextLogin: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 5,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    byUbicross: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 3.4,
        marginBottom: 5,
        color: '#B4C3CF',
        fontWeight: 'bold',
    },
    aboutDeviceTextLogin: {
        fontSize: 10,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        marginBottom: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        opacity: 0.5,
    },
    copyRightsTextLogin: {
        fontSize: 8,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        marginBottom: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        opacity: 0.5,
    },
});

export default LoginScreen