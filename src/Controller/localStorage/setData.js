import AsyncStorage from '@react-native-async-storage/async-storage';
export const setUserDate = async ({key,data})=>{
    try {
        const userData = JSON.stringify(data);
        await AsyncStorage.setItem(key,userData)
    } catch (error) {
        console.log("error occur while setting data",{error});
    }
}