import { Pressable,View, Text, StyleSheet, Platform} from 'react-native';

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
        <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({ pressed }) => [
            styles.button, 
            pressed ? styles.buttonPressed : null,
            ]}
            onPress={onPress}
            >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        borderColor:'white',
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.50,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        textAlign:'center',
        
    },
    button:{
        flex: 1,
    },
   buttonPressed: {
    opacity:0.10,
   },
    innerContainer: {
        flex: 1,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        borderColor: 'white',
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15, 
        color:'white', 
    }
});