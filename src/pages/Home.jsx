import React, {useState, useEffect} from "react";
import {View, Image, Text, FlatList, StyleSheet, TouchableOpacity,} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {api} from '../pages/services/api'
import {useNavigation} from '@react-navigation/native'
export function Home (){
    const [users, setUsers] = useState([])
    const navigation = useNavigation()

    async function getUsers (){
        const response = await api.get("?results=20&nat=BR");
        setUsers(response.data.results)
       }

    useEffect (()=>{
       getUsers();
    },[])
    return(
        <View style={styles.container}>
            <FlatList data={users} keyExtractor={item=>String(item.login.uuid)}
            renderItem={({item})=>(
                <View style={styles.userContainer}>
                    <Image source = {{ uri: item.picture.medium}} style={styles.image}/>
                    <Text style={styles.title}>{item.name.first}</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("detail", {item})}>
                    <MaterialCommunityIcons name="chevron-right" size={40}/>
                    </TouchableOpacity>
                </View>
            )}
            />
        </View>
    );
} 

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f2f6f7',
},

userContainer:{
backgroundColor: '#e9f0f2',
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
padding: 15,
marginBottom: 5,

},
image:{
height: 90,
width: 90,
borderRadius: 50,
},
title:{
    marginTop: 5,
    fontSize: 20,
    flexDirection:"column"
},
})