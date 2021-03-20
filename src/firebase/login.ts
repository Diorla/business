import firebase from "./init";

export function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then((googleRes) => console.log({ googleRes }))
    .catch((googleErr) => console.log({ googleErr }));
}

export function loginWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then((fbRes) => console.log({ fbRes }))
    .catch((fbErr) => console.log({ fbErr }));
}

export interface loginWithEmailProps {
  email: string;
  password: string;
}

export function loginWithEmail({ email, password }: loginWithEmailProps) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((loginRes) => console.log({ loginRes }))
    .catch((loginErr) => console.log({ loginErr }));
}

export function signUpWithEmail({
  email,
  password,
}: loginWithEmailProps) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((signUpRes) => console.log({ signUpRes }))
    .catch((signUpErr) => console.log({ signUpErr }));
}
