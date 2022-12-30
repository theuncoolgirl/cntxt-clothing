import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxPa4KmNOy0o60UCP6B8dWZgmXGfeVbos',
  authDomain: 'cntxt-clothing-db.firebaseapp.com',
  projectId: 'cntxt-clothing-db',
  storageBucket: 'cntxt-clothing-db.appspot.com',
  messagingSenderId: '226186080160',
  appId: '1:226186080160:web:1f35987938b9be19363ec5',
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider instance and set custom parameters for the instance
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize & export authentication instance and function to trigger signin
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Instantiate Firestore database
export const db = getFirestore();

// Check if the user exists, and if not, create a new user document.
export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('error creating the user: ', err.message);
    }
  }

  return userDocRef;
};
