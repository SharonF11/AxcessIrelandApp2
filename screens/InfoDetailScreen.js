import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import Subtitle from '../components/InfoDetail /Subtitle';
import List from '../components/InfoDetail /List';
import InfoDetails from '../components/InfoDetails';

import { MEALS } from "../Data/data";

function InfoDetailScreen({route}){
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return (
    <ScrollView style={styles.rootContainer}>
        <Image source={require('../assets/GovBuildings.png')}
                    style={{ width:'100%', height:250 }}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <InfoDetails 
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity} 
            affordability={selectedMeal.affordability} 
            textStyle={styles.detailText} 
        />
        <View style={styles.listContainer}>
            <Subtitle>Information</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>Contacts</Subtitle>
            <List data={selectedMeal.steps}/>
        </View>     
    </ScrollView>
    );
}

export default InfoDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:30,

    },
    image:{
        width: '50%',
        height: 100,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 8,
        textAlign:'center',
        color:'white',
    }, 
    detailText:{
        color:'white',
        textAlign: 'center',
    },
    listContainer:{
      width:'80%', 
      textAlign:'center'
    } 
});