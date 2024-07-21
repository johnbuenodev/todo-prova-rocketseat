import { Image, StyleSheet, Platform, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

//Biblioteca https://github.com/WrathChaos/react-native-bouncy-checkbox

type Props = {
 name: string;
 checked: boolean;
 onCheckedItem: () => void;
 onRemove: () => void;
}
//onRemove
export function TasksItem({name, checked, onRemove, onCheckedItem}: Props) { //desestruturação

    //<Ionicons name="ellipse-outline" size={20} color="#4EA8DE" />
    //<Ionicons name="checkmark-circle" size={20} color="#5E60CE" />
    
  function handleDelete() {
    //console.log(newParticipant);
  }

  return (
    <View style={styles.container}>

           <BouncyCheckbox 
           size={20}
           isChecked={checked}
           fillColor={checked ? '#8284FA' : '#4EA8DE'}
           unFillColor="#282828"
           style={styles.checkCustom}
           iconStyle={checked ? { borderColor: '#8284FA'} :{ borderColor: '#4EA8DE' }}
           onPress={onCheckedItem} />

      <Text style={[styles.name, checked ? {textDecorationLine:'line-through', color:'#808080'} : {textDecorationLine:'none'}]}>{name} - {String(checked)}</Text>
      
      <TouchableOpacity 
        style={styles.buttonCustom}
        onPress={onRemove}>
        <Text style={styles.titleButton}>
          <Ionicons name="trash-outline" size={20} color="#808080" />
        </Text>
      </TouchableOpacity>

    </View>  
  );
}


