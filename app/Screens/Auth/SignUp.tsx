import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({ navigation } : SignUpScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [isFocused , setisFocused] = useState(false);
    const [isFocused2 , setisFocused2] = useState(false);
    const [isFocused3 , setisFocused3] = useState(false);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, backgroundColor: colors.background, flex: 1 }]}>
                <View>
                    <View>
                        <Image
                            style={{ height: null, aspectRatio: 2.3 / 1, width: '100%', }}
                            source={IMAGES.item5}
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
                <View style={[GlobalStyleSheet.container, { paddingHorizontal: 30, paddingTop: 20 }]}>
                    <View>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 28, color: colors.title, marginBottom: 5,textTransform:'uppercase' }}>Create your account</Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.text }}>Welcome back! Please enter your details</Text>
                    </View>
                    <View style={{ marginBottom: 15, marginTop: 30 }}>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5  }}>Name<Text style={{ color: '#FF0000' }}>*</Text></Text>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{  ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5  }}>Email Address<Text style={{ color: '#FF0000' }}>*</Text></Text>
                        <CustomInput
                            onFocus={() => setisFocused2(true)}
                            onBlur={() => setisFocused2(false)}
                            isFocused={isFocused2}
                            onChangeText={(value: any) => setEmail(value)}
                            value={email}
                        />
                    </View>
                    <View>
                        <Text style={{  ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5  }}>Password<Text style={{ color: '#FF0000' }}>*</Text></Text>
                        <CustomInput
                            onFocus={() => setisFocused3(true)}
                            onBlur={() => setisFocused3(false)}
                            isFocused={isFocused3}
                            type={'password'}
                            onChangeText={(value: any) => setPassword(value)}
                            value={password}
                        />
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Button
                          title={'Sign Up'}
                          onPress={async () => {
                            if (!email || !password) {
                                alert("Por favor completa todos los campos");
                                return;
                            }
                            try {
                              await createUserWithEmailAndPassword(auth, email, password);
                              navigation.navigate('SignIn');
                            } catch (error: any) {
                              console.log("Error en registro:", error.message);
                              alert("Ocurrió un error al registrarte");
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
                                marginHorizontal: 14,
                                fontSize: 13
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
                        marginTop: 10, 
                        flexDirection: 'row', 
                        justifyContent: 'center',
                        marginBottom:10 
                    }]}
                >
                    <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title }}>Already have and account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={{
                            ...FONTS.fontRegular,
                            fontSize:16,
                            color:COLORS.primary
                        }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUp;