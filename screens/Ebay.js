import { Linking, ActivityIndicator, View, Image, SafeAreaView, FlatList, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';

const width = (Dimensions.get('window').width - 4 * 10) / 2;

const Ebay = () => {

{/* Fetch */}
// const [isLoading, setLoading] = useState(true);
// const [data, setData] = useState([]);
// useEffect(() => {
//   fetch('https://best-deals-api.onrender.com/ebay')
//     .then((response) => response.json())
//     .then((json) => setData(json))
//     .catch((error) => console.error(error))
//     .finally(() => setLoading(false));
// }, []);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://best-deals-api.onrender.com/ebay');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);



const renderItem = ({item}) => {
      return ( 
        <SafeAreaView style={styles.container}>
          <View style={styles.productWrapper}>
            <Image source={{uri:item.imgUrl}} style={styles.productImage}/>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text> 
            <Text style={styles.productBeforePrice}>{item.priceBefore}</Text>
            <Text style={styles.productDiscount}>{item.discount}</Text>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.button}>
                {/* <Text>{item.url}</Text> */}
                <Text style={styles.buttonText}>View More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )
    }

  return (
    <View>
        {isLoading ? <ActivityIndicator size="small" color="#A6D0DD"/> : (
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
        />)}
    </View>
  )
}

export default Ebay

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  productWrapper: {
    marginTop: 15,
    // backgroundColor: '#f2f2f2',
    padding: 15,
    margin: 5,
    flex: 0.5,
     
  },
  productImage: {
    borderRadius: 7,
    height: 100,
    width: 150,
    resizeMode: 'contain',
    backgroundColor: '#f3f3f3',
    alignSelf: 'center'
  }, 
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',  
    marginTop: 10  
  },
  button: {
    borderRadius: 5,
    height: 30,
    // width: 100,
    backgroundColor: '#537FE7', 
    alignSelf: 'flex-end',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 6,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  },
  productTitle: {
    fontWeight: '700',
    marginVertical: 7
  },
  productPrice: {
    color: '#2a957c',
    fontWeight: '700',
  },
  productBeforePrice: {
    textDecorationLine: 'line-through',
    color: 'grey',
    fontSize: 11
  },
  productDiscount: {
    color: '#FF6969',
    alignSelf: 'flex-start',
    padding: 4
  }
})