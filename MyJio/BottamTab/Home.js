import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Stories from '../Screens/Stories'
import Post from '../Screens/Post'
import Ionic from 'react-native-vector-icons/Ionicons';
const Home = () => {
  return (
    <View style={styles.MainContener}>
      <StatusBar backgroundColor={'white'}barStyle={"dark-content"}animated={true}/>
      <View style={styles.MainHeader}>
        <FontAwesome name='plus-square-o' style={{fontSize:24,color:"black"}}/>
        <Text style={styles.MainHeaderTextStyle}>Instagram</Text>
        <Feather name='navigation' style={{fontSize:24,color:"black"}}/>
      </View>
      <ScrollView>
        <Stories/>
        <Post/>
        <View style={{justifyContent:"center",alignItems:"center",padding:20}}>
<Ionic 
name="reload-circle-sharp"
style={{fontSize:60,opacity:0.2}}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  MainContener:{backgroundColor:"white",height:"100%"},
  MainHeader:{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:15,alignItems:"center"},
  MainHeaderTextStyle:{fontFamily:"Lobster-Regular" ,fontSize:25,fontWeight:'500',color:"black"}, 
})