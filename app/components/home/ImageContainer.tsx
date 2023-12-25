import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ACCESS_KEY } from "@env"
import axios from 'axios' 

const ImageContainer = () => {
 
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}` // Replace with your Unsplash Access Key
          },
        });

        setImages(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

     fetchData();
  }, []);
   console.log(images[0])

  return (
    <View className='mt-[-56] bg-white p-8 rounded-t-2xl'>
      <Text>New stock imges</Text>
    </View>
  )
}

export default ImageContainer