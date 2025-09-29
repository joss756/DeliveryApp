import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Platform } from 'react-native';
import { FONTS, COLORS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";

type ForgatPasswordScreenProps = StackScreenProps<RootStackParamList, 'ForgatPassword'>;

const ForgatPassword = ({ navigation } : ForgatPasswordScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [email, setEmail] = useState("");

    const [isFocused , setisFocused] = useState(false);

    return (
        <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, backgroundColor: colors.background, flex: 1 }]}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <View style={{overflow:'hidden'}}>
                        <Image
                            style={{ height:null, aspectRatio: 2.3 / 1, width: '100%'}}
                            source={IMAGES.item6}
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
                            <Text  style={{ ...FONTS.DKDisplayPatrol, fontSize: 28, color: colors.title, marginBottom: 5,textTransform:'uppercase' }}>Forgot Password</Text>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.text }}>Enter the email associated with your account and we'll send and email to reset your password</Text>
                        </View>
                        <View style={{ marginBottom: 15, marginTop: 30 }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.textLight,marginBottom:5 }}>Email Address<Text style={{ color: '#FF0000' }}>*</Text></Text>
                            <CustomInput
                                  onFocus={() => setisFocused(true)}
                                  onBlur={() => setisFocused(false)}
                                  isFocused={isFocused}
                                onChangeText={setEmail}
                                value={email}
                            />
                        </View>
                    </View>
                    <View style={{}}>
                        <Button
                            title={'Send Mail'}
                            onPress={async () => {
                                if (!email) {
                                    alert("Por favor ingresa tu correo");
                                    return;
                                }
                                try {
                                    await sendPasswordResetEmail(auth, email);
                                    alert("Revisa tu correo para restablecer la contraseña");
                                    navigation.navigate('SignIn'); // Opcional
                                } catch (error: any) {
                                    console.log("Error:", error.message);
                                    alert("Ocurrió un error al enviar el correo");
                                }
                            }}
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

export default ForgatPassword;