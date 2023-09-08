import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SearchBox from '../Screens/SearchBox'
import SearchContent from '../Screens/SearchContent'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
const Search = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  console.log("name",name)
  const getData = (data, data1) => {
    setImage(data);
    setName(data1);
  };

  
  
  const windowWidth = Dimensions.get('window').width;
  const windoeHeight = Dimensions.get('window').height;
  return (
    <View style={styles.MainContainerStyleCss}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox/>
        <SearchContent data={getData}/>
        <TouchableOpacity
          style={styles.PluseIconPressStyleCss}>
          <AntDesign name="pluscircleo" style={styles.pluseIconStyleCss} />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View
          style={styles.ImagePopupMainContainerStyleCss}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={[styles.ImagePopupWhiteStyleCss,{ top: windoeHeight / 6,
            left: windowWidth / 18,}]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 17, fontWeight: 'bold',color:"red"}}>
                 {name}
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <Ionic name="heart-outline" style={styles.IconsStyleCss} />
              <Ionic name="person-circle-outline" style={styles.IconsStyleCss} />
              <Feather name="navigation" style={styles.IconsStyleCss} />
              <Feather name='more-vertical' style={styles.IconsStyleCss} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  MainContainerStyleCss:{width:"100%",height:"100%",backgroundColor:'white',position:"absolute"},
  IconsStyleCss:{ fontSize: 26, color: "black" },
  PluseIconPressStyleCss:{
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pluseIconStyleCss:{fontSize: 40, opacity: 0.5},
  ImagePopupMainContainerStyleCss:{
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52,52,52,0.8)',
  },
  ImagePopupWhiteStyleCss:{
    position: 'absolute',
   
    backgroundColor: 'white',
    width: '90%',
    height: 465,
    borderRadius: 15,
    zIndex: 1,
    elevation: 50,
  }
})