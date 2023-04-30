import  React,{useState} from "react";
import { View , Text , StyleSheet ,FlatList,Alert} from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem" ;
import AddItem from "./components/AddItem";
//  import uuid from 'react-native-uuid';
// import uuid from "uuidv4"
const App = ()=>{
  const [items,setItems]=useState([
    {id: Math.random(),text:"Milk"},
    {id:  Math.random() ,text:"eggs"},
    {id:  Math.random() ,text:"bread"},
    {id:  Math.random(),text:"juice"},
  ]);
  const deleteItem = (id)=>{
    setItems(prevItems =>{
      return prevItems.filter(item=>item.id !=id);})
    };
    const AddItem=(text)=>{
      if(!text){
        Alert.alert('Error','please enter an icon',{text:'ok'});  
      }
      else{
        setItems(prevItems=>{
          return [{id:Math.random(),text},...prevItems]
        })
      }
      
    }
  
  return(
    <View style={styles.container}>
      <Header /> 
      <AddItem addItem={addItem}/>   
      <FlatList 
      data={items}
      renderItem={({item})=><ListItem item={item} deleteItem ={deleteItem}/>}/>
    </View>
  )}

const styles = StyleSheet.create({
  container:{
    flex : 1 ,
    paddingTop:60 ,
  }
})
export default App;