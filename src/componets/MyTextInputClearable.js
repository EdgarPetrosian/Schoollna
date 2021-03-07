import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SvgClear from '../themes/SVG/SvgClear';

class MyTextInputClearable extends Component {
    constructor(props) {
        super(props);
    }

    renderClearable = () => {
        if (this.props.hasOwnProperty("editable") && this.props.editable === false) {
            return null;
        }
        if (this.props.value && this.props.value.length > 0) {
            return (
                <TouchableOpacity
                    style={styles.clearBtn}
                    onPress={() => {
                        this.props.onPressClear && this.props.onPressClear();
                        if (this.refTextInput) {
                            this.refTextInput.focus();
                        }
                    }}>
                    <View style={styles.closeIconCircle}>
                        <SvgClear width={10} height={10} color={'#3A0F57'} />
                    </View>
                </TouchableOpacity>
            )
        }
    }

    focus() {
        this.refTextInput.focus();
    }

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle && this.props.containerStyle]}>
                {this.props.children}
                <TextInput
                    ref={(ref) => { this.refTextInput = ref }}
                    style={this.props.style}
                    onChangeText={(txt) => {
                        this.props.onChangeText && this.props.onChangeText(txt)
                    }}
                    onSubmitEditing={() => {
                        this.props.onSubmitEditing && this.props.onSubmitEditing()
                    }}
                    value={this.props.value}
                    underlineColorAndroid="transparent"
                    autoCapitalize={'none'}
                    returnKeyType={this.props.returnKeyType}
                    keyboardType={this.props.keyboardType}
                    autoCorrect={false}
                    blurOnSubmit={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    secureTextEntry={this.props.secureTextEntry}
                    editable={!this.props.editable ? this.props.editable : true}
                    autoFocus={this.props.autoFocus ? this.props.autoFocus : false}
                    numberOfLines={this.props.numberOfLines ? this.props.numberOfLines : 1}
                    multiline={this.props.multiline ? this.props.multiline : false}
                    maxLength={this.props.maxLength ? this.props.maxLength : 100}
                />
                {
                    this.renderClearable()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 11,
    },
    closeIconCircle: {
        height: 18,
        width: 18,
        borderRadius: 9,
        backgroundColor: 'rgba(255, 255, 255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearBtn: {
        position: 'absolute',
        right: 0,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyTextInputClearable;