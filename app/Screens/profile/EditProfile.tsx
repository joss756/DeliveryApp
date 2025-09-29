import { View, Text, SafeAreaView, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';

type EditProfileScreenProps = StackScreenProps<RootStackParamList, 'EditProfile'>;

const EditProfile = ({ navigation } : EditProfileScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Edit Profile"}
                leftIcon={'back'}               
            />
            <ScrollView>
                <View style={[GlobalStyleSheet.container, { flex: 1 }]}>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ borderWidth: 2, borderColor:COLORS.secondary, height: 150, width: 150, borderRadius: 150, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ height: 140, width: 140, borderRadius: 100 }}
                                source={IMAGES.itemDetails8}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.9} style={{ height: 45, width: 45, borderRadius: 45, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, right: 120 }}>
                            <View style={{ height: 40, width: 40, borderRadius: 40, alignItems: 'center', justifyContent: 'center', backgroundColor:COLORS.secondary }}>
                                <Image
                                    style={{ height: 18, width: 18, resizeMode: 'contain', tintColor:COLORS.white }}
                                    source={IMAGES.write}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 15, marginTop: 30 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Full Name</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Mobile Number</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                            keyboardType={'number-pad'}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Email</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Location</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{ height: 88, width: '100%', backgroundColor:theme.dark ? colors.background : colors.card,borderTopLeftRadius:20,borderTopRightRadius:20 }}>
                <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 20, paddingTop: 0 }]}>
                    <Button
                        title={"Update Profile"}
                        color={theme.dark ? COLORS.white :COLORS.primary}
                        text={colors.card}
                        onPress={() => navigation.navigate('Profile')}
                        btnRounded
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditProfile