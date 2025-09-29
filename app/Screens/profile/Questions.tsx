import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import QuestionsAccordion from '../../components/Accordion/QuestionsAccordion';

const Questions = () => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Questions & Answers"}
                leftIcon={'back'}
                rightIcon4={'chat'}
            />
            <View style={GlobalStyleSheet.container}>
                <QuestionsAccordion />
            </View>
        </SafeAreaView>
    )
}

export default Questions