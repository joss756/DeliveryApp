import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import {  FONTS, COLORS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';

type NewPasswordScreenProps = StackScreenProps<RootStackParamList, 'NewPassword'>;

const NewPassword = ({ navigation } : NewPasswordScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [isFocused , setisFocused] = useState(false);
    const [isFocused2 , setisFocused2] = useState(false);

    return (
        <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, backgroundColor: colors.background, flex: 1 }]}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <View style={{overflow:'hidden'}}>
                        <Image
                            style={{ height:null, aspectRatio: 2.3 / 1, width: '100%'}}
                            source={IMAGES.item7}
                        />
                        <View style={{width:'100%',height:20,backgroundColor:colors.background,borderTopRightRadius:20,borderTopLeftRadius:20,position:'absolute',bottom:0}}/>
                    </View>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 15,
                            left: 15
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <View style={GlobalStyleSheet.background}>
                            <Image
                                style={{ height: 18, width: 18, resizeMode: 'contain', tintColor: COLORS.white }}
                                source={IMAGES.arrowleft}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[GlobalStyleSheet.container, { paddingHorizontal: 30, paddingTop: 20, flex: 1 }]}>
                    <View style={{ flex: 1 }}>
                        <View>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 28, color: colors.title, marginBottom: 5,textTransform:'uppercase' }}>Enter New Password</Text>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.text }}>Your new password must be different from
                                previously used password.</Text>
                        </View>
                        <View style={{ marginBottom: 15, marginTop: 30 }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5 }}>Password<Text style={{ color: '#FF0000' }}>*</Text></Text>
                            <CustomInput
                                onFocus={() => setisFocused(true)}
                                onBlur={() => setisFocused(false)}
                                isFocused={isFocused}
                                onChangeText={(value: any) => console.log(value)}
                                type={'password'}
                            />
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5 }}>Confirm Password<Text style={{ color: '#FF0000' }}>*</Text></Text>
                            <CustomInput
                                onFocus={() => setisFocused2(true)}
                                onBlur={() => setisFocused2(false)}
                                isFocused={isFocused2}
                                onChangeText={(value: any) => console.log(value)}
                                type={'password'}
                            />
                        </View>
                    </View>
                    <View style={{}}>
                        <Button
                            title={'Continue'}
                            onPress={() => navigation.navigate('SignIn')}
                            color={theme.dark ? COLORS.white :COLORS.primary}
                            text={colors.card}
                            btnRounded
                        />
                        <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title }}>Back To </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignIn')}
                            >
                                <Text style={{
                                    ...FONTS.fontRegular,
                                    fontSize:16,
                                    color:COLORS.primary
                                }}>
                                    Sign In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewPassword;