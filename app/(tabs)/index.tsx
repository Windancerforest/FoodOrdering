import { StyleSheet,Text,View,Image} from 'react-native';
import Colors from '@/constants/Colors';
import products from '../../assets/data/products'


const product = products[9];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Image  source={{uri:product.image}} style={styles.image}/>
      <Text>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
  },
  image:{
    width:'90%',
    aspectRatio:1,

  },
  title: {
    fontSize:40,
    fontWeight:'600',
    marginVertical:10,
  },
  price:{
    color:Colors.light.tint,
    fontWeight:'bold',
  },
  

});
