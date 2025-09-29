import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, FONTS } from '../../constants/theme';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';

type SavedAddressesScreenProps = StackScreenProps<RootStackParamList, 'SavedAddresses'>;

const SavedAddresses = ({ navigation } : SavedAddressesScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const productSizes = ["Home", "Shop", "Office"];

    const [activeSize, setActiveSize] = useState(productSizes[0]);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Add Delivery Address"}
                leftIcon={"back"}
            />
            <ScrollView
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ paddingBottom: 80 }}
            >
                <View style={GlobalStyleSheet.container}>
                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title }}>Contact Details</Text>
                    <View style={{ marginBottom: 15, marginTop: 10 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Full Name</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Mobile No.</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                            keyboardType={'number-pad'}
                        />
                    </View>
                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title }}>Address</Text>
                    <View style={{ marginBottom: 15, marginTop: 10 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Pin Code</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                            keyboardType={'number-pad'}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Address</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Locality/Town</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>City/District</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>State</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title }}>Save Address As</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingTop: 10,
                            paddingBottom: 10
                        }}
                    >
                        {productSizes.map((data, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setActiveSize(data)}
                                    style={[{
                                        height: 34,
                                        width: 75,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginHorizontal: 4,
                                        backgroundColor: colors.card,
                                        borderRadius:10,
                                    }, activeSize === data && {
                                        backgroundColor:COLORS.primary,
                                    }]}
                                >
                                    <Text style={[{ ...FONTS.fontSemiBold, fontSize: 15, color: colors.title,textTransform:'uppercase' }, activeSize === data && { color:COLORS.card }]}>{data}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
            <View
                style={[{
                   shadowColor: 'rgba(0, 0, 0, 0.10)',
                    shadowOffset: {
                        width: 2,
                        height: 3,
                    },
                    shadowOpacity: .1,
                    shadowRadius: 5,
                }, Platform.OS === "ios" && {
                    backgroundColor: colors.card,
                    borderRadius:35
                }]}
            >
                <View style={{ height: 88, backgroundColor:theme.dark ? colors.background : colors.card,borderTopWidth:1,borderTopColor:colors.background,borderTopLeftRadius:20,borderTopRightRadius:20 }}>
                    <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 15, paddingTop: 0 }]}>
                        <Button
                            title={"Save Address"}
                            onPress={() => navigation.navigate('SaveAddress')}
                            color={theme.dark ? COLORS.white :COLORS.primary}
                            text={colors.card}
                            btnRounded
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SavedAddresses