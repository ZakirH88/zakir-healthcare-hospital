import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect} from "react";
import initializeAuthentication from "../Firebase/firebase.initialize"; 

initializeAuthentication();

const useFirebase = () =>{
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();

	const signInUsingGoogle = () =>{
		// e.preventDefault();
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
		.then(result =>{
			setUser(result.user);
		})
		.finally(()=>setIsLoading(false));

	}

	const handleSignIn = e =>{
		e.preventDefault();
		console.log(email, password);
		createUserWithEmailAndPassword(auth, email, password)
		.then(result => {
		  // Signed in 
		  const user = result.user;
		  // console.log(user);
		})

	}


	// observe user state change (Manege users).
	useEffect( () =>{
		const unsubscribed = onAuthStateChanged(auth, user => {
			if(user){
				setUser(user);
			}
			else{
				setUser({})
			}
			setIsLoading(false);
		});
		return () => unsubscribed;

	}, [])

	
	const logOut =()=>{
		setIsLoading(true);
		signOut(auth)
		.then(() => {
			// Sign-out successful.
		  })
		  .finally(()=>setIsLoading(false));

	}

	return{
		user,
		isLoading,
		signInUsingGoogle,
		handleSignIn, 
		logOut
	}

}
export default useFirebase;