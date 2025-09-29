import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CreditCard from '../../components/Card/CreditCard';
import CustomInput from '../../components/Input/CustomInput';
import { COLORS, FONTS } from '../../constants/theme';

import Button from '../../components/Button/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';

type AddCardScreenProps = StackScreenProps<RootStackParamList, 'AddCard'>;

const AddCard = ({ navigation } : AddCardScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Add Card"}
                leftIcon={'back'}
                titleLeft
            />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 70 }}
            >
                <View style={GlobalStyleSheet.container}>
                    <CreditCard
                        creditCard
                    />
                    <View style={{ marginBottom: 15, marginTop: 20 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Card Name</Text>
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
                            <CustomInput
                                onChangeText={(value: any) => console.log(value)}
                            />
                        </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase'  }}>Card Number</Text>
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
                            <CustomInput
                                onChangeText={(value: any) => console.log(value)}
                                keyboardType={'number-pad'}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20, paddingRight: 20 }}>
                        <View style={{ marginBottom: 15, width: '50%' }}>
                            <Text style={{...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase'  }}>Expiry Date</Text>
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
                                <CustomInput
                                    onChangeText={(value: any) => console.log(value)}
                                    keyboardType={'number-pad'}
                                />
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, width: '50%' }}>
                            <Text style={{...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase'  }}>CVV</Text>
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
                                <CustomInput
                                    onChangeText={(value: any) => console.log(value)}
                                    keyboardType={'number-pad'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View
                style={[{
                   shadowColor: 'rgba(0, 0, 0, 0.10)',
                    shadowOffset: {
                        width: -2,
                        height: 3,
                    },
                    shadowOpacity: .2,
                    shadowRadius: 5,
                    position: 'absolute', 
                    bottom: 0,
                    width:'100%'
                }, Platform.OS === "ios" && {
                    backgroundColor: colors.card,
                    borderRadius:35
                }]}
            >
                <View style={{ height: 88, backgroundColor:theme.dark ? colors.background : colors.card,borderTopWidth:1,borderTopColor:colors.background,borderTopLeftRadius:20,borderTopRightRadius:20 }}>
                    <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 15, paddingTop: 0 }]}>
                        <Button
                            title={"Add Card"}
                            onPress={() => navigation.navigate('Payment')}
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

export default AddCard