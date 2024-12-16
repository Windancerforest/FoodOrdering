import { StyleSheet,Text,View,Image,FlatList} from 'react-native';

import products from '@assets/data/products'
import ProductListItem from '@/components/ProductList';





export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[1]}/>
      <ProductListItem product={products[7]}/>  */}
      <FlatList 
      data={products}
      renderItem={({item})=>
        <ProductListItem product={item}/>
      }
      numColumns={2}
      contentContainerStyle={{gap:10,padding:8}}
      columnWrapperStyle={{gap:10}}
      />


    </View>
  );
}


