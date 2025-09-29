import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES, } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';
import { IMAGES } from '../../constants/Images';


type Props = {
    shortRef :any
}

const ShortSheet2 = ({shortRef} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const GenderData = ["Cookies", "Cake",];

    const [activeSize, setActiveSize] = useState(GenderData[0]);

    return (
        <View style={[GlobalStyleSheet.container, { paddingTop: 0 }]}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    paddingVertical: 15,
                    marginHorizontal: -15,
                    paddingHorizontal: 15
                }}
            >
                <Text style={[FONTS.DKDisplayPatrol, { color: colors.title,  fontSize: 20}]}>Short</Text>
                <TouchableOpacity
                    style={{ height: 38, width: 38, backgroundColor: colors.card, borderRadius: 38, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => shortRef.current.close()}
                >
                    <Image
                        style={{ width: 18, height: 18, resizeMode: 'contain', tintColor: colors.title }}
                        source={IMAGES.close}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 20 }}>
                {GenderData.map((data, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setActiveSize(data)}
                            key={index}
                            style={[{
                                backgroundColor:theme.dark ? colors.background :'#FCF7F3',
                                borderRadius:SIZES.radius_sm,
                                height: 34,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                marginBottom: 5
                            }, activeSize === data && {
                                backgroundColor:COLORS.primary,
                            }]}
                        >
                            <Text style={[{ ...FONTS.fontMedium, fontSize: 14, color: colors.title,lineHeight:16,textTransform:'uppercase' }, activeSize === data && { color:COLORS.card }]}>{data}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default ShortSheet2;