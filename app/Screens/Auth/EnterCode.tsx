import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Customotp from '../../components/Input/Customotp';
import Button from '../../components/Button/Button';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';

type EnterCodeScreenProps = StackScreenProps<RootStackParamList, 'EnterCode'>;

const EnterCode = ({ navigation } : EnterCodeScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (
        <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, backgroundColor: colors.background, flex: 1 }]}>
            <View>
                <View style={{overflow:'hidden'}}>
                    <Image
                        style={{ height:null, aspectRatio: 2.3 / 1, width: '100%'}}
                        source={IMAGES.item4}
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
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 28, color: colors.title, marginBottom: 5,textTransform:'uppercase' }}>Enter Code</Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title }}>An Authentication Code Has Sent To </Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color:COLORS.primary}}>testing@gmail.com </Text>
                    </View>
                    <View style={[{ alignItems: 'center', marginTop: 30 }]}>
                        <View style={{alignItems:'center',paddingLeft:15}}>
                            <Customotp />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title }}>If you don't receive code! </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ForgatPassword')}
                            >
                                <Text style={{ ...FONTS.fontRegular,fontSize: 16, color:COLORS.primary }}>Resend</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Button
                        title={'Verify and proceed'}
                        onPress={() => navigation.navigate('NewPassword')}
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
        </SafeAreaView>
    )
}

export default EnterCode;