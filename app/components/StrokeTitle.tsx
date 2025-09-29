import { useTheme } from '@react-navigation/native';
import React from 'react'
import Svg, { Text } from "react-native-svg";


const StrokeTitle = () => {

    const theme = useTheme();
    const {colors} = theme;

    return (
        <Svg height="40" width="120">
            <Text
                stroke={colors.title}
                strokeWidth="2"
                fill={colors.background}
                color={colors.background}
                fontSize={48}
                fontFamily='DKDisplayPatrol'
                x="13"
                y="38"
            >
            Cake
            </Text>
        </Svg>
    )
}

export default StrokeTitle