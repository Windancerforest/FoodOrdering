import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { useLocalSearchParams,Stack} from 'expo-router'
import products from '@assets/data/products'
import { defaultPizzaImage } from '@/components/ProductList'
import { useState } from 'react'


const sizes=['S','M','L','XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize,setSelectedSize] = useState('M');
   
  const product = products.find((p)=>p.id.toString()===id);

  if(!product){
    return<Text>未找到您的餐品</Text>
  }
  return (
    <View>
      <Stack.Screen options={{title:"定制您的 "+product.name}}/>
      <Image source={{uri:product.image||defaultPizzaImage}} style={styles.imgage} />
      <Text>Select size</Text>
      <View style={styles.sizes}>
      {
        sizes.map((size)=>(
          <View key={size} style={[styles.size,{backgroundColor:selectedSize===size?'gainsboro':'white'}]}>
            <Text style={styles.sizeText}>{size}</Text>
          </View>
      ))
      }
      </View>
      

      <Text style={styles.price}>价格:￥{product.price}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    padding:10,

  },
  imgage:{
    width:'100%',
    aspectRatio:1,
  },
  price:{
    fontSize:19,
    fontWeight:'bold',
  },
  sizes:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  size:{
    backgroundColor:'gainsboro',
    width:50,
    aspectRatio:1,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
  },
  sizeText:{
    fontSize:20,
    fontWeight:'500',
  }

})

export default ProductDetailsScreen;