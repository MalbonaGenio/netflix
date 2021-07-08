import Firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
//seed
import { seedDatabase } from "../seed"

//firebase config
const config = {
    apiKey: "AIzaSyAAhCJDxQAeyiPfSXpDDoJ-Acwz_vSceBY",
    authDomain: "netflix-clone-5ed15.firebaseapp.com",
    projectId: "netflix-clone-5ed15",
    storageBucket: "netflix-clone-5ed15.appspot.com",
    messagingSenderId: "553656299733",
    appId: "1:553656299733:web:09415e81676fe59fb0f25c"
}

const firebase = Firebase.initializeApp(config)

export { firebase }