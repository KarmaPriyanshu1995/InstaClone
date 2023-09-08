import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchContent = (props) => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../Storage/Images/post1.jpg'),
        require('../Storage/Images/post2.jpg'),
        require('../Storage/Images/post3.jpg'),
        require('../Storage/Images/post4.jpg'),
        require('../Storage/Images/post5.jpg'),
        require('../Storage/Images/post6.jpg'),
        require('../Storage/Images/post7.jpg'),
        require('../Storage/Images/post8.jpg'),
        require('../Storage/Images/post9.jpg'),
       
      ],
      Name: ["Adit","Umesh","Nikita","Lucky"]
    },
    {
      id: 1,
      images: [
        require('../Storage/Images/post10.jpg'),
        require('../Storage/Images/post11.jpg'),
        require('../Storage/Images/post12.jpg'),
        require('../Storage/Images/post13.jpg'),
        require('../Storage/Images/post14.jpg'),
        require('../Storage/Images/post15.jpg'),
        require('../Storage/Images/post16.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../Storage/Images/post17.jpg'),
        require('../Storage/Images/post18.jpg'),
        require('../Storage/Images/post19.jpg'),
        require('../Storage/Images/post20.jpg'),
        require('../Storage/Images/post21.jpg'),
        require('../Storage/Images/post22.jpg'),
      ],
    },
  ]
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 && (
              <View key={index} style={styles.SquareImageCss}>
                
                {data.images.map((imageData, imgIndex) => {
                  // console.log(images)
                  return (
                    <TouchableOpacity
                    key={imgIndex}
                    onPressIn={() => props.data(imageData, data?.Name ? data?.Name[imgIndex] : '')}
                    onPressOut={() => props.data(null, '')} style={{ paddingBottom: 2 }}>
                      <Image
                        source={imageData}
                        style={{ width: 119, height: 150 }} />
                    </TouchableOpacity>
                  )
                })}
              </View>
            )}
           
              {data.id === 1 ? (
              <View key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width:'66.5%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2,width:'49.5%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={{marginLeft: 2,width:'33%'}}>
                  <Image
                    source={data.images[5]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
              {data.id === 2 ? (
              <View key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={{paddingRight: 2,width:'66.5%'}}>
                  <Image
                    source={data.images[2]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2,width:'100%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        )
      })}
    </View>
  )
}

export default SearchContent

const styles = StyleSheet.create({
  SquareImageCss: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
})