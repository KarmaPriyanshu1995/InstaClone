// import { SwiperFlatList } from 'react-native-swiper-flatlist';
// import Feather from 'react-native-vector-icons/Feather';
// import ReelsComponent from './ReelsComponent';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Video from 'react-native-video'
// // import Feather from 'react-native-vector-icons/Feather';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const Reels = () => {
//     const [videoData, setVideoData] = useState([
//         {
//             Video: require('../Storage/Video/Video3.mp4'),
//             PostProfile: require('../Storage/Images/Profile1.jpeg'),
//             Titel: "Nature Love",
//             Description: "Fell The Nature As A Friend",
//             likes: '245k',
//             isLike: false
//         },
//         {
//             Video: require('../Storage/Video/Video2.mp4'),
//             PostProfile: require('../Storage/Images/Profile2.jpeg'),
//             Titel: "Rules Of Success",
//             Description: "ImproveYourSelf For Become SuccessFull",
//             likes: '545k',
//             isLike: false
//         },
//         {
//             Video: require('../Storage/Video/Video1.mp4'),
//             PostProfile: require('../Storage/Images/Profile3.jpeg'),
//             Titel: "Song Love",
//             Description: "Kya Pata",
//             likes: '565k',
//             isLike: false
//         },
//         {
//             Video: require('../Storage/Video/Video4.mp4'),
//             PostProfile: require('../Storage/Images/Profile4.jpeg'),
//             Titel: "Breakup",
//             Description: "Felling Is So Rude",
//             likes: '245k',
//             isLike: false
//         },


//     ])

//     const [mute, setMute] = useState(false);
//     const [like, setLike] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const videoRef = useRef(null)
//     const onBuffer = buffer => {
//         console.log("buffering", buffer)
//     }
//     const onError = error => {
//         console.log("Error", error)
//     }
//     const handleChangeIndexValue = (index) => {
//         setCurrentIndex(index)
//     }
//     return (
//         <View style={[styles.mainView, {
//             width: windowWidth,
//             height: windowHeight,
//         }]}>
//             <View style={styles.cameraandTextHeader}>
//                 <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Reels</Text>
//                 <Feather name='camera' style={{ fontSize: 25, color: 'white' }} />
//             </View>
//             <View style={{ flex: 1 }}>
//                 <SwiperFlatList
//                     data={videoData}
//                     onChangeIndex={handleChangeIndexValue}
//                     vertical={true}
//                     renderItem={({ item, index }) => (

//                         <View style={[styles.MainComponent, {
//                             width: windowWidth,
//                             height: windowHeight,
//                         }]}>
//                             <TouchableOpacity
//                                 activeOpacity={0.9}
//                                 onPress={() => setMute(!mute)}
//                                 style={styles.TouchableVideoStyle}>
//                                 <Video
//                                     videoRef={videoRef}
//                                     onBuffer={onBuffer}
//                                     onError={onError}
//                                     repeat={true}
//                                     resizeMode='cover'
//                                     paused={currentIndex == index ? false : true}
//                                     muted={mute}
//                                     source={item.Video}
//                                     style={{
//                                         width: "100%",
//                                         height: "100%",
//                                         position: 'absolute'
//                                     }}
//                                 />
//                             </TouchableOpacity>

//                             {/* muteIconeStyle */}

//                             <Ionic
//                                 name="volume-mute"
//                                 style={{
//                                     fontSize: mute ? 20 : 0,
//                                     color: 'white',
//                                     position: 'absolute',
//                                     top: windowHeight / 2.3,
//                                     left: windowWidth / 2.3,
//                                     backgroundColor: 'rgba(52,52,52,0.6)',
//                                     borderRadius: 100,
//                                     padding: mute ? 20 : 0,
//                                 }}
//                             />
//                             <View
//                                 style={{
//                                     position: 'absolute',
//                                     width: windowWidth,
//                                     zIndex: 1,
//                                     bottom: 0, //edited
//                                     padding: 10,
//                                 }}>
//                                 <View style={{}}>
//                                     <TouchableOpacity style={{ width: 150 }}>
//                                         <View
//                                             style={{ width: 100, flexDirection: 'row', alignItems: 'center' }}>
//                                             <View
//                                                 style={{
//                                                     width: 32,
//                                                     height: 32,
//                                                     borderRadius: 100,
//                                                     backgroundColor: 'white',
//                                                     margin: 10,
//                                                 }}>
//                                                 <Image
//                                                     source={item.PostProfile}
//                                                     style={{
//                                                         width: '100%',
//                                                         height: '100%',
//                                                         resizeMode: 'cover',
//                                                         borderRadius: 100,
//                                                     }}
//                                                 />
//                                             </View>
//                                             <Text style={{ color: 'white', fontSize: 16 }}>{item.Titel}</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                     <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10 }}>
//                                         {item.Description}
//                                     </Text>
//                                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                                         <Ionic
//                                             name="musical-note"
//                                             style={{ color: 'white', fontSize: 16 }}
//                                         />
//                                         <Text style={{ color: 'white' }}>Original Audio</Text>
//                                     </View>
//                                 </View>
//                             </View>
//                             <View
//                                 style={{
//                                     position: 'absolute',
//                                     bottom: 10, //edited
//                                     right: 0,
//                                 }}>
//                                 <TouchableOpacity onPress={() => setLike(!like)} style={{ padding: 10 }}>
//                                     <AntDesign
//                                         name={like ? 'heart' : 'hearto'}
//                                         style={{ color: like ? 'red' : 'white', fontSize: 25 }}
//                                     />
//                                     <Text style={{ color: 'white' }}>{item.likes}</Text>
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={{ padding: 10 }}>
//                                     <Ionic
//                                         name="chatbubble-outline"
//                                         style={{ color: 'white', fontSize: 25 }}
//                                     />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={{ padding: 10 }}>
//                                     <Ionic
//                                         name="paper-plane-outline"
//                                         style={{ color: 'white', fontSize: 25 }}
//                                     />
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={{ padding: 10 }}>
//                                     <Feather
//                                         name="more-vertical"
//                                         style={{ color: 'white', fontSize: 25 }}
//                                     />
//                                 </TouchableOpacity>
//                                 <View
//                                     style={{
//                                         width: 30,
//                                         height: 30,
//                                         borderRadius: 10,
//                                         borderWidth: 2,
//                                         borderColor: 'white',
//                                         margin: 10,
//                                     }}>
//                                     <Image
//                                         source={item.PostProfile}
//                                         style={{
//                                             width: '100%',
//                                             height: '100%',
//                                             borderRadius: 10,
//                                             resizeMode: 'cover',
//                                         }}
//                                     />
//                                 </View>
//                             </View>
//                         </View>)
//                     }
//                     keyExtractor={(item, index) => index}
//                 />
//                 {/* <View style={[styles.MainComponent,{ width:windowWidth,
//       height:windowHeight,}]}> */}

//             </View>
//         </View>
//         // </View>

//     )
// }
// export default Reels;

// const styles = StyleSheet.create({
//     mainView: {

//         backgroundColor: 'white',
//         position: "relative",
//         backgroundColor: "black",
//     },
//     cameraandTextHeader: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         zIndex: 1,
//         padding: 10,
//     },

//     TouchableVideoStyle: {
//         width: "100%",
//         height: "100%",
//         position: "absolute"
//     },
//     MainComponent: {

//         position: 'relative'
//     },
// });