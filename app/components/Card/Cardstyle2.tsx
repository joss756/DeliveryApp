import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FONTS, COLORS } from '../../constants/theme';
import { useTheme } from '@react-navigation/native';

type Props = {
    id : string,
    title : string;
    price ?: string;
    image ?: any;
    delivery?:any;
    mindiscount?:any;
    discount?:any;
    onPress ?:any,
    onPress1 ?: (e : any) => void,
}

const Cardstyle2 = ({ id, image, price, discount, delivery, title, mindiscount, onPress } : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{ backgroundColor: colors.card, borderRadius: 15 }}
            onPress={() => onPress && onPress()}
        >
            <Image
                style={{ width: '100%', height: undefined, aspectRatio: 1 / 1, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                source={image}
            />
            <View style={{ padding: 10 }}>
                <Text numberOfLines={1} style={{ ...FONTS.fontMedium, fontSize: mindiscount ? 14 : 12, color: colors.title, paddingRight: 20 }}>{title}</Text>
                {mindiscount
                    ?
                    <View>
                        <Text style={{ ...FONTS.fontSemiBold, fontSize: 15, color: COLORS.success }}>{discount}</Text>
                    </View>
                    :
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Text style={{ ...FONTS.fontSemiBold, fontSize: 14, color: colors.title, marginTop: 2 }}>{price}</Text>
                        <Text
                            style={{
                                ...FONTS.fontRegular,
                                fontSize: 12,
                                textDecorationLine: 'line-through',
                                textDecorationColor: 'rgba(0, 0, 0, 0.70)',
                                color: theme.dark ? 'rgba(255,255,255, .7)' : 'rgba(0, 0, 0, 0.70)',
                                marginRight: 5
                            }}>{discount}
                        </Text>
                        <Text numberOfLines={1} style={{ ...FONTS.fontMedium, fontSize: 13, color: COLORS.success ,paddingRight:60}}>{delivery}</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}

export default Cardstyle2