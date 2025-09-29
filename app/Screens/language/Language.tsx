import React, { useState } from 'react';
import { View,SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import Button from '../../components/Button/Button';
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import BottomSheet2 from '../Shortcode/BottomSheet2';
import { COLORS } from '../../constants/theme';


const Language = () => {

    const moresheet = React.useRef<any>();

    const [Language, setLanguage] = useState<any>('English');

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const navigation = useNavigation<any>();


    return (
        <SafeAreaView style={{ backgroundColor: colors.card, flex: 1 }}>
            <Header
                leftIcon={'back'}
                title='Language'
            />
            <View style={[GlobalStyleSheet.container, { marginTop: 15 }]}>
                <View>
                    <View
                        style={[
                            GlobalStyleSheet.inputBox, {
                                borderColor:colors.border,
                                borderWidth: 1,
                                paddingLeft: 20
                            },
                        ]}
                    >
                        <Image
                            style={[GlobalStyleSheet.inputimage, { tintColor: colors.title, left: 'auto', right: 15, }]}
                            source={IMAGES.downaeeowsmall}
                        />

                        <TextInput
                            editable={false}
                            style={[{ color: colors.title, }]}
                            value={Language}
                            placeholderTextColor={colors.border}
                        />
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
                       onPress={() => moresheet.current.openSheet('Language')}
                    ></TouchableOpacity>
                </View>
                <Button
                    onPress={() => navigation.goBack()}
                    color={theme.dark ? COLORS.white :COLORS.primary}
                    text={colors.card}
                    title="Save"
                    btnRounded
                />
            </View>
            <BottomSheet2
                ref={moresheet}
                setLanguage={setLanguage}
            />
        </SafeAreaView>
    )
}

export default Language