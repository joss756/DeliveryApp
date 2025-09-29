import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { FONTS, COLORS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';
import SocialBtn from '../../components/Socials/SocialBtn';
import {FontAwesome} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';


type SignInScreenProps = StackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({ navigation } : SignInScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [isFocused , setisFocused] = useState(false);
    const [isFocused2 , setisFocused2] = useState(false);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, backgroundColor: colors.background, flex: 1 }]}>
                <View>
                    <View style={{overflow:'hidden'}}>
                        <Image
                            style={{ height:null, aspectRatio: 2.3 / 1, width: '100%'}}
                            source={IMAGES.item4}
                        />
                        <View style={{width:'100%',height:20,backgroundColor:colors.background,borderTopRightRadius:20,borderTopLeftRadius:20,position:'absolute',bottom:0}}/>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container, { paddingHorizontal: 30, paddingTop: 20 }]}>
                    <View>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 28, color: colors.title, marginBottom: 5,textTransform:'uppercase' }}>Inicia sesión en tu cuenta</Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.text }}>¡Bienvenido de nuevo, te extrañamos!</Text>
                    </View>
                    <View style={{ marginBottom: 15, marginTop: 30 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5 }}>Correo electrónico<Text style={{ color: '#FF0000' }}>*</Text></Text>
                        <CustomInput
                            onFocus={() => setisFocused(true)}
                            onBlur={() => setisFocused(false)}
                            isFocused={isFocused}
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <View>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5 }}>Contraseña<Text style={{ color: '#FF0000' }}>*</Text></Text>
                        <CustomInput
                            onFocus={() => setisFocused2(true)}
                            onBlur={() => setisFocused2(false)}
                            isFocused={isFocused2}
                            type={'password'}
                            onChangeText={(value: any) => console.log(value)}
                        />
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                bottom: -25,
                                right: 0
                            }}
                            onPress={() => navigation.navigate('ForgatPassword')}
                        >
                            <Text style={{
                                ...FONTS.fontRegular,
                                fontSize: 15,
                                color: colors.text,
                            }}>
                                ¿Olvidaste la contraseña?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 72 }}>
                        <Button
                            title={'Iniciar sesión'}
                            onPress={() => navigation.navigate('DrawerNavigation',{screen : 'Home'})}
                            color={theme.dark ? COLORS.white :COLORS.primary}
                            text={colors.card}
                            btnRounded
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 37,
                                marginBottom: 30,
                            }}
                        >
                            <View
                                style={{
                                    height: 1,
                                    flex: 1,
                                    backgroundColor: colors.title,
                                }}
                            />
                            <Text style={{
                                ...FONTS.fontRegular,
                                color: colors.title,
                                marginHorizontal: 15,
                                fontSize: 14
                            }}>O continua con</Text>
                            <View
                                style={{
                                    height: 1,
                                    flex: 1,
                                    backgroundColor: colors.title,
                                }}
                            />
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <SocialBtn
                                icon={<Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={IMAGES.google2} />}
                                text={'Ingresar con Google'}
                                textcolor
                            />
                        </View>
                        <View>
                            <SocialBtn
                                icon={<FontAwesome name='apple' size={20} color={colors.title} />}
                                text={'Ingresar con Apple'}
                                textcolor
                            />
                        </View>
                    </View>
                </View>
                <View 
                    style={[GlobalStyleSheet.container,{
                        padding:0,
                        alignItems: 'center', 
                        marginTop: 25, 
                        flexDirection: 'row', 
                        justifyContent: 'center' 
                    }]}
                >
                    <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title }}>¿No lo recuerdas?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={{
                            ...FONTS.fontRegular,
                            fontSize:16,
                            color:COLORS.primary
                        }}> Crear una cuenta</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignIn;
