import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, } from 'react-native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { useNavigation, useTheme } from '@react-navigation/native';
import Button from '../Button/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';

type Props = {
  sheetRef :any
}

const FilterSheet2 = ({sheetRef} : Props) => {
  
  const theme = useTheme();
  const { colors } : {colors : any} = theme;

  const navigation = useNavigation<any>();

  const brandData = ["chocolate", "truffle", "pineapple", "vanilla", "blackforest"];

  const [activeSize, setActiveSize] = useState(brandData[0]);

  const categoriesData = ["All", "cream", "fondant", "designer", "photo", "dry","pinata","other"];

  const [active1Size, setActive1Size] = useState(categoriesData[0]);

  const sizeData = ["round", "heart", "square", "others"];

  const [active2Size, setActive2Size] = useState(sizeData[0]);

  const [multiSliderValue, setMultiSliderValue] = useState([200, 270])

  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values)

  return (
      <View style={[GlobalStyleSheet.container, { paddingTop: 0 }]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: colors.background,
            paddingVertical: 15,
            marginHorizontal: -15,
            paddingHorizontal: 15
          }}
        >
            <Text style={[FONTS.DKDisplayPatrol, { color: colors.title, fontSize: 20 }]}>Filters</Text>
            <TouchableOpacity
              style={{ height: 38, width: 38, backgroundColor: colors.card,alignItems: 'center', justifyContent: 'center' }}
              onPress={() => sheetRef.current.close()}
            >
              <Image
                style={{ width:22, height:22, resizeMode: 'contain', tintColor: colors.title }}
                source={IMAGES.close}
              />
            </TouchableOpacity>
        </View>
        <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
              <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title }}>flavour</Text>
              <TouchableOpacity
                  onPress={() => sheetRef.current.close()}
              >
                <Text style={{ ...FONTS.fontMedium, fontSize: 14, color:COLORS.primary }}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 5 }}>
              {brandData.map((data, index) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        key={index}
                        onPress={() => setActiveSize(data)}
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
                      <Text style={[{ ...FONTS.fontMedium, fontSize: 14, color: colors.title,lineHeight:16,textTransform:'uppercase' }, activeSize === data && {  color:COLORS.card}]}>{data}</Text>
                    </TouchableOpacity>
                )
              })}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title }}>cake type:</Text>
              <TouchableOpacity
                  onPress={() => sheetRef.current.close()}
              >
                <Text style={{  ...FONTS.fontMedium, fontSize: 14, color:COLORS.primary  }}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 10 }}>
              {categoriesData.map((data, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => setActive1Size(data)}
                    key={index}
                    style={[{
                      backgroundColor: theme.dark ? colors.background :'#FCF7F3',
                      borderRadius:SIZES.radius_sm,
                      height: 34,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 20,
                      paddingVertical: 5,
                      marginBottom: 5
                    }, active1Size === data && {
                      backgroundColor:COLORS.primary,
                    }]}
                  >
                    <Text style={[{ ...FONTS.fontMedium, fontSize: 14, color: colors.title,lineHeight:16 ,textTransform:'uppercase'}, active1Size === data && {  color:COLORS.card}]}>{data}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title}}>shape:</Text>
              <TouchableOpacity
                  onPress={() => sheetRef.current.close()}
              >
                <Text style={{  ...FONTS.fontMedium, fontSize: 14, color:COLORS.primary }}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: 10 }}>
              {sizeData.map((data, index) => {
                return (
                    <TouchableOpacity
                      onPress={() => setActive2Size(data)}
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
                      }, active2Size === data && {
                        backgroundColor:COLORS.primary,
                      }]}
                    >
                      <Text style={[{ ...FONTS.fontMedium, fontSize: 14, color: colors.title,lineHeight:16,textTransform:'uppercase' }, active2Size === data && { color:COLORS.card }]}>{data}</Text>
                    </TouchableOpacity>
                )
              })}
            </View>
            <View style={{ flexDirection: 'row', gap: 10, paddingRight: 10, marginTop: 20,marginBottom:50 }}>
              <View style={{ width: '50%' }}>
                <Button
                  onPress={() => sheetRef.current.close()}
                  title={"Reset"}
                  text={colors.title}
                  color={theme.dark ? colors.background :'#FCF7F3'}
                  btnRounded
                />
              </View>
              <View style={{ width: '50%' }}>
                <Button
                  onPress={() => sheetRef.current.close()}
                  title={"Apply"}
                  color={theme.dark ? COLORS.white :COLORS.primary}
                  text={colors.card}
                  btnRounded
                />
              </View>
            </View>
        </ScrollView>
      </View>
  );
};

export default FilterSheet2;
