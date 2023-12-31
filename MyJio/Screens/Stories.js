import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
const Stories = () => {
    const navigation =useNavigation()
    const storyInfo = [
        {
            id: 1,
            name: "Your Story",
            image: require('../Storage/Images/post1.jpg')
        },
        {
            id: 0,
            name: "Umesh_Dhaka",
            image: require('../Storage/Images/post2.jpg')
        },
        {
            id: 0,
            name: "bitu.adit",
            image: require('../Storage/Images/post3.jpg')
        },
        {
            id: 0,
            name: "chinky_18_12",
            image: require('../Storage/Images/post4.jpg')
        },
        {
            id: 0,
            name: "zaheen",
            image: require('../Storage/Images/post5.jpg')
        },
    ]
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 20 }}>
            {
                storyInfo.map((data, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={()=>navigation.push("Status",{
                            name:data.name,
                            image:data.image
                        })}>
                            <View style={{flexDirection:"column",paddingHorizontal:8,position:"relative"}}>
                                {
                                    data.id == 1 ?
                                        (
                                            <View style={{ position: 'absolute', bottom: 12, right: 5, zIndex: 1 }}>
                                                <Entypo name="circle-with-plus" style={{ fontSize: 20, color: "#405de6", backgroundColor: 'white', borderRadius: 100 }} />
                                            </View>
                                        ) : null
                                }
                                <View style={styles.StatusCircleStyleCss}>
                                    <Image
                                        source={data.image}
                                        style={{
                                            resizeMode: "cover",
                                            width: '92%',
                                            height: '92%',
                                            borderRadius: 100,
                                            backgroundColor: 'orange'
                                        }} 
                                        />
                                </View>
                                <Text style={{textAlign:"center",fontSize:10,opacity:data.id==0?1:0.5}}>
                                    {data.name}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default Stories

const styles = StyleSheet.create({
    StatusCircleStyleCss:{ width: 68, height: 68, backgroundColor: "white", borderWidth: 1.8, borderRadius: 100, borderColor: "#c13584", justifyContent: "center", alignItems: 'center' }
})