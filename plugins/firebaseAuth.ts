import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default defineNuxtPlugin(nuxtApp => {

    const config = useRuntimeConfig()
    
    const firebaseConfig = {
        apiKey: config.public.apiBase,
        authDomain: "cotec-api.firebaseapp.com",
        databaseURL: "https://cotec-api-default-rtdb.firebaseio.com",
        projectId: "cotec-api",
        storageBucket: "cotec-api.appspot.com",
        messagingSenderId: "428168289355",
        appId: "1:428168289355:web:e0d84ab5bfae810227c1ce"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getDatabase(app);
})