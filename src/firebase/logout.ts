import firebase from "./init";

export default function logout() {
  firebase.auth().signOut();
}
