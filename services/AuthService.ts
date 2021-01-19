import firebase from '../firebase/config';

interface User {
  user: {
    displayName: string;
  };
}

export async function login(email: string, password: string): Promise<User> {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    return error.message;
  }
}
