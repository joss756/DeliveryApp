import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const CustomInput = (props : any) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [passwordShow, setPasswordShow] = useState(true);

    const handndleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }

    return (
        <>
            {props.isFocused && 
                <View
                    style={{
                        height:54,
                        backgroundColor:COLORS.primaryLight,
                        borderRadius:SIZES.radius_lg,
                    }}
                />
            }
            <View style={{ position: 'relative', justifyContent: 'center' }}>
                <View style={{
                    position: 'absolute',
                    height: 48,
                    width: 48,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    //top:16,
                }}>
                    {props.icon && props.icon}
                </View>
                <TextInput
                    secureTextEntry={props.type === "password" ? passwordShow : false}
                    style={[{
                        ...FONTS.fontRegular,
                        fontSize: 16,
                        height: 48,
                        color: colors.title,
                        paddingVertical: 12,
                        backgroundColor:props.background ? theme.dark ? colors.background :'#F8F4F2' : colors.input,
                        paddingHorizontal: 15,
                        borderRadius:SIZES.radius_lg,
                    }, props.icon && {
                        paddingLeft: 50,
                    }, props.inputLg && {
                        height: 98,
                        // paddingVertical: 18,
                    }, props.inputSm && {
                        paddingVertical: 7,
                        height: 45,
                    }, props.inputRounded && {
                        borderRadius: 30,
                    }, props.inputBorder && {
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        borderRadius: 0,
                        backgroundColor: colors.card,
                    },props.isFocused && {
                        borderWidth:1,
                        borderColor:COLORS.primary,
                        marginHorizontal:4,
                        marginTop:-54
                    }]}
                    placeholderTextColor={colors.textLight}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    defaultValue={props.defaultValue}
                    multiline={props.inputLg}
                    keyboardType={props.keyboardType}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                />
                {props.type === "password" &&
                    <TouchableOpacity
                        accessible={true}
                        accessibilityLabel="Password"
                        accessibilityHint="Password show and hidden"
                        onPress={() => handndleShowPassword()}
                        style={[styles.eyeIcon,props.isFocused && {top:-53}]}>
                        <Feather color={theme.dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'} size={18} name={passwordShow ? 'eye-off' : 'eye'} />
                    </TouchableOpacity>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    eyeIcon: {
        position: 'absolute',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        zIndex: 1,
        top: 0,
    }
})

export default CustomInput;