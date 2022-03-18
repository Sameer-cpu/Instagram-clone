import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStoredData = async(key)=>{
try {
    const data = await AsyncStorage.getItem(key)
    return data !==null? JSON.parse(data):null
} catch (error) {
    console.log("error occur while getting Data",{error});
}
}