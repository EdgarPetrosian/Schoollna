import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import SvgBottomSplashPattern from '../themes/SVG/SvgBottomSplashPattern';
import SvgLeftBottomSplash from '../themes/SVG/SvgLeftBottomSplash';
import SvgLogoSplash from '../themes/SVG/SvgLogoSplash';
import SvgTopSplashPattern from '../themes/SVG/SvgTopSplashPattern';
const { width } = Dimensions.get('window');
const splashTopPattern = <SvgTopSplashPattern width={width + 10} height={250} style={{
    position: 'absolute',
    top: -10,
    left: 0,
    right: 0,
}} />;
const splashBottomPattern = <SvgBottomSplashPattern width={width} height={170} style={{
    position: 'absolute',
    bottom: -10,
    left: 0,
    right: 0,
}} />;
const splashLeftBottom = <SvgLeftBottomSplash />;
const splashLogo = <SvgLogoSplash style={{ alignSelf: 'center', }} />;

export default function Splash() {
    return (
        <View style={[styles.container]}>
            <View style={styles.containerFirst} >
                <View/>
                {splashTopPattern}
                {splashLogo}
            </View>
            <View style={styles.containerSecond} >
                <View style={styles.containerAbsolut}>
                    {splashLeftBottom}
                </View>
                {splashBottomPattern}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerFirst: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerSecond: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    containerAbsolut: {
        position: 'absolute',
        bottom: 17,
        left: 17,
        zIndex: 10000,
    }
})
