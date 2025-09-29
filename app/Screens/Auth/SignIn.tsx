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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

type SignInScreenProps = StackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({ navigation } : SignInScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 28, color: colors.title, marginBottom: 5,textTransform:'uppercase' }}>Sign in to your account</Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.text }}>Welcome Back You've Been Missed!</Text>
                    </View>
                    <View style={{ marginBottom: 15, marginTop: 30 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5 }}>Email Address<Text style={{ color: '#FF0000' }}>*</Text></Text>
                        <CustomInput
                            onFocus={() => setisFocused(true)}
                            onBlur={() => setisFocused(false)}
                            isFocused={isFocused}
                            onChangeText={(value: string) => setEmail(value)}
                            value={email}
                        />
                    </View>
                    <View>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5 }}>Password<Text style={{ color: '#FF0000' }}>*</Text></Text>
                        <CustomInput
                            onFocus={() => setisFocused2(true)}
                            onBlur={() => setisFocused2(false)}
                            isFocused={isFocused2}
                            type={'password'}
                            onChangeText={(value: string) => setPassword(value)}
                            value={password}
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
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 72 }}>
                        <Button
                            title={'Sign in'}
                            onPress={async () => {
                                if (!email || !password) {
                                    alert("Por favor completa todos los campos");
                                    return;
                                }
                                try {
                                  await signInWithEmailAndPassword(auth, email, password);
                                  navigation.navigate('DrawerNavigation',{screen : 'Home'});
                                } catch (error: any) {
                                  console.log("Error en login:", error.message);
                                  alert("Correo o contraseña incorrectos");
                            }  
                            }}   
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
                            }}>Or continue with</Text>
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
                                text={'Sign in with google'}
                                textcolor
                            />
                        </View>
                        <View>
                            <SocialBtn
                                icon={<FontAwesome name='apple' size={20} color={colors.title} />}
                                text={'Sign in with apple'}
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
                    <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title }}>Not a member?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={{
                            ...FONTS.fontRegular,
                            fontSize:16,
                            color:COLORS.primary
                        }}> Create an account</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignIn;