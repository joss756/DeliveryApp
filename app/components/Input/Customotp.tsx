import React from 'react'
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';
import { COLORS, SIZES } from '../../constants/theme';

const Customotp = () => {

    const { colors } : {colors : any} = useTheme();

    return (
        <View style={{alignItems:'center'}}>
            <OTPTextInput 
                tintColor={colors.border}
                inputCount={4}
                textInputStyle={{
                    borderBottomWidth:1,
                    height:48,
                    width:48,
                    borderRadius:SIZES.radius_sm,
                    borderWidth:1,
                    backgroundColor:colors.input,
                    borderColor:colors.border,
                    color:colors.title,
                }}
                
            />
        </View>
    )
}

export default Customotp