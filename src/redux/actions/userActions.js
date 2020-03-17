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

// export const signUp = newUser => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(newUser.email, newUser.password)
//       .then(response => {
//         return firestore
//           .collection('users')
//           .doc(response.user.uid)
//           .set({
//             firstName: newUser.firstName,
//             lastName: newUser.lastName,
//             initials: newUser.firstName[0] + newUser.lastName[0]
//           });
//       })
//       .then(() => {
//         dispatch({ type: 'SIGNUP_SUCCESS' });
//       })
//       .catch(err => {
//         dispatch({ type: 'SIGNUP_ERROR', err });
//       });
//   };
// };

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

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const file = newUser.rawImage;
    const firestore = getFirestore();
    const firebase = getFirebase();
    const storage = firebase.storage();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
        if (newUser.rawImage) {
          return storage
            .ref('avatars/' + response.user.uid)
            .put(file)
            .then(snapshot => {
              return snapshot.ref.getDownloadURL();
            })
            .then(url => {
              firestore
                .collection('users')
                .doc(firebase.auth().currentUser.uid)
                .update({ photoUrl: url });
            });
        }
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
        console.log('sign up success');
      })
      .catch(err => dispatch({ type: 'SIGNUP_ERROR', err })); //if fails on creating user
  };
};

export const findUser = userId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('users')
      .doc(userId)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          dispatch({ type: 'FETCH_USER_SUCCESS', user: doc.data() });
        } else {
          dispatch({ type: 'FETCH_USER_ERROR', payload: 'No such user' });
        }
      })
      .catch(err => {
        dispatch({ type: 'FETCH_USER_ERROR', payload: err.message });
      });
  };
};
