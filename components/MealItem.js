import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InfoDetails from './InfoDetails';

function MealItem({id,title, duration, complexity, affordability, imageURL}) {
    const navigation =useNavigation();

    function selectMealItemHandler(){

        navigation.navigate('InfoDetail', {
            mealId: id
        });
    }

    return(
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={require('../assets/AILogo.png')}
                    style={{ width:'100%', height:350 }}/>
                        <Text style={styles.title}>{title}</Text>npm start
                    </View>
                    <InfoDetails 
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                     />
                </View>    
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'black',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        fontSize: 20,
    },
    image:{
        width:'100%',
        height:200,
    }, 
    buttonPressed: {
        opacity:0.50,
        },
    innerContainer: {
        borderRadius: 8,
        overflow:'hidden',
        fontSize: 20,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin:8,
        color: 'white'
    },
})