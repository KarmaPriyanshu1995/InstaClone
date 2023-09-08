import { StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData } from './VideoStorage';
import SingleReels from './SingleReels';
const ReelsComponent = () => {
  const[currentIndex,setCurrentIndex]=useState(0);
  
  const handleChangeIndexValue=({index})=>{
    setCurrentIndex(index)
  }
  return (
   <SwiperFlatList
   data={videoData}
   onChangeIndex={handleChangeIndexValue}
   vertical={true}
   renderItem={({item, index}) => (
    <SingleReels item={item} index={index} currentIndex={currentIndex} />
  )}
   keyExtractor={(item,index)=> index}
   />
   
  )
}

export default ReelsComponent

const styles = StyleSheet.create({})