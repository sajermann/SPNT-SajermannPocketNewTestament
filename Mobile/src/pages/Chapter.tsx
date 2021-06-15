import React, { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Dimensions, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/core';
import api from '../services/api';
import Biblia from '../models/Biblia';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { groupChapter } from '../utils/Group';
import { BibliaContext } from '../context/BibliaContext';

interface ParamsRoute{
  book: string;
}

export function Chapter(){
  const { biblias } = useContext(BibliaContext);
	const navigation = useNavigation();
  const routes = useRoute();
  const { book } = routes.params as ParamsRoute;
	function handleNavigateToVerse(chapter: string){
		navigation.navigate('Verse', {
      book,
      chapter 
    });
	}

  useEffect(()=>{
    console.log('entro no chapter', book)
  },[]);

  if(!biblias){
    return <></>
  }

	return(
    <SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
        <View style={styles.viewHeader}>
          <View style={styles.viewButtonBack}>
            <TouchableOpacity style={styles.buttonBack} activeOpacity={0.7} onPress={() => navigation.goBack()} >
              <MaterialIcons name="arrow-back" style={styles.iconBack} />
            </TouchableOpacity>
          </View>
          <View style={styles.viewHeaderTexts}>
            <Text style={styles.textBook}>Escolha o Capítulo do livro </Text>
            <Text style={styles.textChapter}>{book}</Text>
          </View>
        </View>
			  <View style={styles.viewMain}>
          <FlatList
            data={groupChapter(biblias, book)}
            keyExtractor={(item)=>String(item)}
            renderItem={({item})=>(
              <TouchableOpacity style={styles.buttonCard} activeOpacity={0.7} onPress={()=>handleNavigateToVerse(item)} >
                <Text style={styles.textCard}>
                  {item}
                </Text>
                {/* <Feather name="arrow-right" style={styles.iconEnter} />  */}
              </TouchableOpacity>
            )}
            numColumns={4}
            showsVerticalScrollIndicator={true}
          />
        </View>
			</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  wrapper:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  viewMain:{
		flex:1,
		width: '100%',
		justifyContent: 'center',
    padding: 10,
  },
  buttonBack: {
  },
  iconBack:{
		fontSize: 42,
  },
  viewHeaderTexts:{
    width: '89%',
    // flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  textBook:{
    fontSize: 22,
    overflow: 'scroll'
  },
  textChapter:{
    fontSize: 18
  },
  viewButtonBack:{
    position: 'relative',
    width: '10%'
  },
  buttonCard:{
    height: 50,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    width: '23%',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#53f83d',
    fontSize: 22,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: '1%'
  },
  textCard:{
    // textAlign: 'center',
    fontSize: 42,
    color: 'red',
  },
});