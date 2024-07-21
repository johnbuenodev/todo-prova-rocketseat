import {useEffect, useState} from 'react';
import { Image, StyleSheet, Platform, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { TasksItem } from '../../components/TasksItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

interface TaskClass {
  title?: string,
  checked?: boolean,
}

export function Home() {

  const [enterFocus, setEnterFocus] = useState<boolean>(false);

  function handleFocus() {
    setEnterFocus(true);
  }

  function handleBlur() {
    setEnterFocus(false);
  }

  const [taskList, setTaskList] = useState<TaskClass[]>(
    [
      {title: "1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", checked: false},
      {title: "2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", checked: false},
      {title: "3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", checked: true},
      {title: "4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", checked: true}
    ]
  );

  const [newTask, setNewTask] = useState<string>("");

  const [done, setDone] = useState<number>(0);

  function handleTaskAdd() {
   console.log(newTask);
   if(taskList.includes({title: newTask, checked: false})) {
     Alert.alert("Atenção","Essa Tarefa já existe na lista!"); 
     return;
   } else {
     Alert.alert("Novo registro","Add nova tarefa na lista.");
     //... spread operator desestrutura tudo que tem dentro da array
     //passando para dentro dessa nova array 
     //setParticipantList([...participantList,newParticipant]);
     setTaskList(prevState => [...prevState, {title: newTask, checked: false}]);  
     setNewTask("");
    }
  }

  function handleTaskDelete(name: string) {
    Alert.alert(
      "Remover Tarefa",
      `Deseja remover a tarefa ${name} ?`,
      [
        {
          text: 'Cancelar',
          onPress: () => {}
        },
        {
          text: 'Ok',
          onPress: () => deleteItem(name)
        }
      ]); 
    //console.log(`removendo registro: ${name}` );
  }

  async function deleteItem(value: string) {
    setEnterFocus(false);
    let newArray : TaskClass[] = [];
    let countDone = 0;
    
    await taskList.forEach((item) => {
     if(item.title !== value) {
       newArray.push(item);   
     }
    });

    await setTaskList(newArray);

    await newArray.forEach((item) => {
      if(item.checked == true) {
         countDone = countDone + 1;
      }
    });
   
    await setDone(countDone);
    //await setTaskList(prevState => prevState.filter(p => p.title !== value));
  }

  async function handleCheckedItem(title: string) {

    setEnterFocus(false);

    console.log("Atualizando inicio");
    console.log(title);
    let newTasks : TaskClass[] = [];
    await taskList.map((p) => 
    {
     if(p.title === title) {
      console.log("Atualizado");
      p.checked = !p.checked;
     }
     newTasks.push(p);
    }
    );

    await setTaskList(newTasks);
    await countStatus();
  }

  async function countStatus() {
    let countDone = 0;

    await taskList.forEach((item) => {
     if(item.checked == true) {
        countDone = countDone + 1;
     }
    });
  
    await setDone(countDone);

  }

  useEffect(() => {
    countStatus();
  },[]);

  return (
    <View style={styles.container}>
    <View>

      <View style={styles.form}>
      <TextInput 
        style={[{ borderColor: enterFocus == true ? '#5E60CE' : '#262626' }, styles.inputCustom]}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor="#6B6B6B"
        onChangeText={value => {setNewTask(value)}}
        onFocus={handleFocus}
        onPress={handleFocus}
        onBlur={handleBlur}
        value={newTask}
      />

      <TouchableOpacity style={styles.buttonCustom}
      onPress={handleTaskAdd}
      disabled={newTask.length < 3}>
        <Text style={styles.titleButton}>
         <Ionicons name="add-circle-outline" size={22} color="#F2F2F2" />
        </Text>
      </TouchableOpacity>
      </View>
      
      <View style={{ width:'100%', height:'100%', backgroundColor: '#191919' }}>
      <View style={styles.progressTasks}>
        <View style={styles.progressContainer}>
          <Text style={styles.titleCreated}>
            Criadas
          </Text>
          <View style={styles.totalCreatedDone}>
           <Text style={styles.totalValue}>{taskList.length}</Text>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.titleDone}>
           Concluidas
          </Text>
          <View style={styles.totalCreatedDone}>
             <Text style={styles.totalValue}>{done}</Text>
          </View>
        </View>
      </View>
     
      <FlatList 
        data={taskList}
        keyExtractor={(item: TaskClass) => String(item.title!)}
        renderItem={({item}) => (
          <TasksItem key={item.title!} name={item.title!} checked={item.checked!} onRemove={() => handleTaskDelete(item.title!)} onCheckedItem={() => handleCheckedItem(item.title!)} />
        )}
        onTouchMove={() => {setEnterFocus(false)}}
        onTouchStart={() => {setEnterFocus(false)}}
        ListEmptyComponent={() => (
          <View style={styles.containerEmpty}>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'center',marginBottom: 24}}>
              <Ionicons name="clipboard-outline" size={70} color="#6B6B6B" />
            </View>
            <Text style={styles.listEmptyText}>
               Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyTextSub}>
               Crie tarefas e organize seus itens a fazer
            </Text>
          </View>   
        )}
      />
      </View>
    </View>  
    </View>
  );
}

//<ScrollView>

// {

//   participantList.map((item) => {
//      return <Participant key={item} name={item}  onRemove={() => handleParticipantDelete(item)} />
//   })

//   }