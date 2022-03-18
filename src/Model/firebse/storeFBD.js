import firestore from "@react-native-firebase/firestore";

export const storeUserDetaiInFirebase =  ({userData})=>{
    const {name,picture,email} = userData;
    try {
        firestore().collection("Users").add({'userId':null,'userName':name,email,'userImage':picture.data.url,})
    } catch (error) {
        console.log("error occur while storing data in firebase",{error});
    }
}

export const getStoredUserDataFromFirebase = async ()=>{
    try {
        return await firestore().collection('Users').get()
    } catch (error) {
    console.log('error occur while getting user initial data from firebase',{error});
    }
}

export const setUserId = ({uid})=>{
    // console.log("workiing",email);
    try {
        getStoredUserDataFromFirebase().then(querySnapshot=>{
            querySnapshot.forEach(documentSnapshot=>{
                // console.log({email:documentSnapshot.data().email},email);
                if(documentSnapshot.id=== uid){
                    // console.log({'currentUserId':documentSnapshot.id});
                    firestore().collection('Users').doc(documentSnapshot.id).update({"userId":uid})
                }else{
                    console.log("userIsNotUpdated");
                }
            })
        })
    } catch (error) {
        console.log("Error occur while updating the user Id");
    }

}