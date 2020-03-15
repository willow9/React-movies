export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(payload => {
        dispatch({ type: 'LOGIN_SUCCESS', payload });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'SIGNOUT_ERROR', err });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  };
};

export const fetchUsers = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('users')
      .limit(10)
      .get()
      .then(querySnapshot => {
        const users = [];
        querySnapshot.forEach(doc => {
          users.push({ id: doc.id, ...doc.data() });
          return users;
        });
        dispatch({ type: 'FETCH_USERS_SUCCESS', users });
      });
  };
};

export const addMovieToUserCollection = (userUID, imdbId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firestore
      .collection('users')
      .doc(userUID)
      .update({ movies: firebase.firestore.FieldValue.arrayUnion(imdbId) })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addImage = rawImage => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const file = rawImage;
    const firestore = getFirestore();
    const firebase = getFirebase();
    const storage = firebase.storage();

    firebase
      .auth()
      .createUserWithEmailAndPassword('new22299User.email@mail.com', 'newUser.password')
      .then(response => {
        return storage.ref(response.user.uid).put(file);
      })
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(url => {
        console.log(url);
      });
  };
};
