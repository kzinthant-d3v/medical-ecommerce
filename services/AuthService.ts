import firebase from '../firebase/config';

interface User {
  user: {
    displayName: string;
  };
}
console.log(process.env.NEXT_PUBLIC_TESTING);
export async function login(email: string, password: string): Promise<User> {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    return error.message;
  }
}
