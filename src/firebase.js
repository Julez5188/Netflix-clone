import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIDNOkM8BynPpB8fKfZjpEvtXI_SS1Jbg",
  authDomain: "netflix-clone-7e5c7.firebaseapp.com",
  projectId: "netflix-clone-7e5c7",
  storageBucket: "netflix-clone-7e5c7.firebasestorage.app",
  messagingSenderId: "1085024155754",
  appId: "1:1085024155754:web:839d5bdc19f1b95af9f213"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, user), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

const logout = ()=>{
  signOut(auth);
}

export { auth, db, signup, login, logout }