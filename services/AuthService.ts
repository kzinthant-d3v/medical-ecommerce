import firebase from '../firebase/config';

export async function login(email: string, password: string) {
  console.log(`checking ${email} ${password}`);
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(user);
    return user;
  } catch (error) {
    return error.message;
  }
}
