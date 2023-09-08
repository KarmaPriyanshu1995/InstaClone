import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
const Post = () => {

    const postinfo = [
        {
            postTitle: "mr perfect",
            postPersonImage: require('../Storage/Images/Profile1.jpeg'),
            postImage: require('../Storage/Images/post1.jpg'),
            likes: 100,
            isLiked: false
        },
        {
            postTitle: "mr_cool",
            postPersonImage: require('../Storage/Images/Profile2.jpeg'),
            postImage: require('../Storage/Images/post2.jpg'),
            likes: 150,
            isLiked: false
        },
        {
            postTitle: "umesh_Dhaka",
            postPersonImage: require('../Storage/Images/Profile3.jpeg'),
            postImage: require('../Storage/Images/post3.jpg'),
            likes: 200,
            isLiked: false
        },
        {
            postTitle: "mr_specilist",
            postPersonImage: require('../Storage/Images/Profile4.jpeg'),
            postImage: require('../Storage/Images/post4.jpg'),
            likes: 130,
            isLiked: false
        },
        {
            postTitle: "mr perfect",
            postPersonImage: require('../Storage/Images/Profile1.jpeg'),
            postImage: require('../Storage/Images/post5.jpg'),
            likes: 100,
            isLiked: false
        },
        {
            postTitle: "mr_cool",
            postPersonImage: require('../Storage/Images/Profile2.jpeg'),
            postImage: require('../Storage/Images/post6.jpg'),
            likes: 150,
            isLiked: false
        },
    ];
    return (
        <View>
            {postinfo.map((data, index) => {
                const [like, setLike] = useState(data.isLiked);
                return (
                    <View
                        key={index}
                        style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", padding: 15 }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={data.postPersonImage}
                                    style={{ width: 40, height: 40, borderRadius: 100 }} />
                                <View style={{ paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 15, fontStyle: "normal", fontWeight: "bold", color: "black" }}>{data.postTitle}</Text>
                                </View>
                            </View>
                            <Feather name='more-vertical' style={{ fontSize: 20, color: "black" }} />
                        </View>
                        <View style={{
                            position: "relative",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image
                                source={data.postImage}
                                style={{ width: "100%", height: 400 }} />

                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            alignItems: "center",
                            paddingHorizontal: 12,
                            paddingVertical: 15,
                        }}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => setLike(!like)}>
                                    <AntDesign
                                        name={like ? 'heart' : 'hearto'}
                                        style={{
                                            paddingRight: 10,
                                            fontSize: 20,
                                            color: like ? 'red' : 'black',
                                        }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionic
                                        name="chatbubble-outline"
                                        style={styles.IconColorStyleCss} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather
                                        name="navigation"
                                        style={styles.IconColorStyleCss} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Feather
                                    name="bookmark"
                                    style={styles.IconColorStyleCss} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingVertical: 10, paddingLeft: 12 }}>
                            <Text>Liked by {like ? 'you and ' : ""}{''}
                                {like ? data.likes + 1 : data.likes} others</Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, paddingVertical: 2 }}>HardWork Is The Key To Success</Text>
                            <Text style={{ opacity: 0.4, paddingVertical: 2 }}>View All Comment</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={data.postPersonImage}
                                        style={{
                                            width: 25,
                                            height: 25,
                                            borderRadius: 100,
                                            backgroundColor: 'orange',
                                            marginRight: 10,
                                        }} />
                                    <TextInput placeholder='Add a comment'
                                        style={{ opacity: 0.5 }} />
                                </View>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Entypo
                                    name="emoji-happy" 
                                    style={{fontSize:15,color:'lightgreen',marginRight:10}}/>
                                     <Entypo
                                    name="emoji-neutral" 
                                    style={{fontSize:15,color:'pink',marginRight:10}}/>
                                     <Entypo
                                    name="emoji-sad" 
                                    style={{fontSize:15,color:'red',marginRight:10}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    IconColorStyleCss: {
        paddingRight: 10,
        fontSize: 20,
        color: "black"
    }
})