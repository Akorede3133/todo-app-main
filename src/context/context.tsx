import { useContext, createContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '../firebase/firebase';
import {nanoid} from 'nanoid';
import { setDoc, collection, doc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore'

interface childrenProp {
    children: React.ReactNode;
}
interface contextProp {
    imgUrl: string | null
    setImgUrl: React.Dispatch<React.SetStateAction<string | null>>
    signIn(): void;
    handleSignOut(): void;
    addToList(e): void;
    listItem: listProps[]
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    setListItem: React.Dispatch<React.SetStateAction<listProps[]>>;
    currentUser: any;
    handleCompleted(): void;
    showAll(): void
    showActive(): void
    clearCompleted(): void
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    darkMode: boolean
}
export interface listProps {
    desc: string;
    checked: boolean;
    id: string;
}


const globalContext = createContext({} as contextProp);

const AppGlobalContext = ({children}: childrenProp) => {
    const navigate = useNavigate();
    const colRef = collection(db, 'list')
    const [currentUser, setCurrentUser] = useState<any>({})
    const [listItem, setListItem] = useState<listProps[]>([])
    const [tempList, setTempList] = useState<listProps[]>([]);
    const [text, setText] = useState<string>(''); 
    const [darkMode, setDarkMode] =  useState<boolean>(false);
    const [imgUrl, setImgUrl] = useState<string | null>('https://ionicframework.com/docs/img/demos/avatar.svg');
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setImgUrl(user.photoURL)
                setCurrentUser(user);
            }
        })
    }, [currentUser])
    useEffect(()=> {
        showAll();
    }, [])    
    const signIn = async () => {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      const listRef = doc(db, 'list', cred.user.uid)
      showAll();
      await setDoc(listRef, {
        list: listItem
      });
      navigate('/');
    }
    const handleSignOut = async () => {
        await signOut(auth)
        navigate('/login');
    }
    const addToList = async (e) => {
        e.preventDefault();
        const listRef = doc(db, 'list', currentUser.uid)
        if (text) {
            await updateDoc(listRef, {
                list: arrayUnion({desc: text, checked: false, id: nanoid()})
            })
            setText('')
        }
    }
    const handleCompleted = () => {
        const newList = tempList.filter(item =>  item.checked === true)
        setListItem(newList);
    }
    const showAll = () => {
        const ref = collection(db, 'list');
        onSnapshot(ref, (snapshot) => {
            snapshot.forEach(doc => {
                setListItem(doc.data().list)
                setTempList(doc.data().list);
            })
        })
    }
    const showActive = () => {            
        const newList = tempList.filter(item =>  item.checked === false)
        setListItem(newList);
        
    }
    const clearCompleted = async () => {
        const listRef = doc(db, 'list', currentUser.uid)
        const newList = tempList.filter(item =>  item.checked === false)
        await updateDoc(listRef, {
            list: newList
        })

    }
    return <globalContext.Provider value={{
        imgUrl,
        setImgUrl,
        listItem,
        signIn,
        handleSignOut,
        addToList,
        text,
        setText,
        setListItem,
        currentUser,
        handleCompleted,
        showAll,
        showActive,
        clearCompleted,
        darkMode,
        setDarkMode
    }}>
        {children}
    </globalContext.Provider>
}
const useGlobalContext = () => {
    return useContext(globalContext);
}
export {useGlobalContext, AppGlobalContext}