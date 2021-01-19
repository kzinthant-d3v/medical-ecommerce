import firebase from '../firebase/config';

export async function login(email: string, password: string): Promise<any> {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    return error.message;
  }
}
