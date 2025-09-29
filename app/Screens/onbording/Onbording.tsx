import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, SafeAreaView, Text, Image, ScrollView, Platform } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Button from '../../components/Button/Button';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';


type OnbordingScreenProps = StackScreenProps<RootStackParamList, 'Onbording'>;

const Onbording = ({ navigation } : OnbordingScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;
    return (
        <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, flex: 1, backgroundColor: colors.card }]}>
            <Image
                style={{width:'100%',height:null,aspectRatio:1/2.1,position:'absolute'}}
                source={IMAGES.onboardingpic1}
            />
            <ScrollView contentContainerStyle={{ flexGrow:1 }}>
                <View 
                    style={[
                        GlobalStyleSheet.container,
                        {
                            paddingTop:50,
                            padding:0,
                            position:'absolute',
                            bottom:0,
                            backgroundColor:colors.background,
                        }
                    ]}
                >
                    <Image
                        style={{resizeMode:'contain',width:'100%',position:'absolute',top:Platform.OS === 'web' ? -70 :-65,tintColor:colors.background}}
                        source={Platform.OS === 'web' ? IMAGES.onboardingVector2 : IMAGES.onboardingVector}
                    />
                    <View style={{paddingHorizontal:30,paddingBottom:20}}>
                        <Text style={{ ...FONTS.DKDisplayPatrol,fontSize:50, textAlign:'center', color:colors.title,textTransform:'uppercase' }}><Text style={{color:COLORS.primary}}>Welcome</Text> to our sweet bakery <Text style={{color:COLORS.primary}}>haven</Text>!</Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 18, textAlign:'center', lineHeight: 24, color:colors.title, paddingTop: 10,paddingHorizontal:40 }}>The most delicious cakes with the best quality is here..</Text>
                    </View>
                    <View style={GlobalStyleSheet.container}>
                        <View style={{ paddingHorizontal: 20, paddingBottom: 5, paddingTop: 0 }}>
                            <Button
                                title={'Let’s get Started'}
                                onPress={() => navigation.navigate('SignIn')}
                                color={theme.dark ? COLORS.white :COLORS.primary}
                                text={colors.card}
                                btnRounded
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Onbording;