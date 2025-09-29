import React, { useState } from 'react';
import { Pressable } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { COLORS } from '../constants/theme';
import { useTheme } from '@react-navigation/native';

type Props = {
    heartwhite ?: any;
    onPress ?: any;
    inWishlist: any;
    id ?: any;
}

const LikeBtn = ({heartwhite,onPress,inWishlist,id} : Props) => {

    // const [isLike, setIsLike] = useState(false);

    const theme = useTheme();

    return (
        <Pressable
            accessible={true}
            accessibilityLabel="Like Btn"
            accessibilityHint="Like this item"
            onPress={() =>  onPress ? onPress() : ""}
            style={{
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
           {inWishlist().includes(id) ?
                 <FontAwesome size={16} color={COLORS.danger} name="heart" />
                 :
                 <FontAwesome size={16} color={'#D7CCBF'} name="heart" />
            }
        </Pressable>
    );
};


export default LikeBtn;