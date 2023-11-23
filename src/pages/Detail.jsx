import React from "react";
import {useRoute} from '@react-navigation/native'
import {View, Text, Image, StyleSheet} from 'react-native';


export function Detail(){
    const {params} = useRoute ()
    return(
    <View style={styles.container}>
        <Image source={{uri: params.item.picture.medium}} style={styles.image}/>
        <Text style={styles.title}>Name: {`${params.item.name.first} ${params.item.name.last}`}</Text>
        <Text style={styles.title}>Email: {params.item.email}</Text>
        <Text style={styles.title}>Telephone: {params.item.phone}</Text>
        <Text style={styles.title}>Cell: {params.item.cell}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f6f7' ,
},

image:{
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 5,
},
title:{
    textAlign: 'center',
    fontSize: 20,
    padding: 8,
},
})