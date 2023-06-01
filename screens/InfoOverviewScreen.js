import {View, Flatlist, StyleSheet} from 'react-native';

import {MealItem} from '../components/MealItem';
import { MEALS } from '../Data/data';

function InfoOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} />;
    }

    return (
        <View style={styles.container}>
            <Flatlist 
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem} 
            />
        </View>
    );
}

export default InfoOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
});