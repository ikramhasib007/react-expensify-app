
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA09afgbboWraY8Gto6rilEXFnGp2tBSPk",
  authDomain: "expensify-490b5.firebaseapp.com",
  databaseURL: "https://expensify-490b5.firebaseio.com",
  projectId: "expensify-490b5",
  storageBucket: "expensify-490b5.appspot.com",
  messagingSenderId: "187226756187"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {firebase, googleAuthProvider, facebookAuthProvider, database as default};



// const expenses = [{
//     amount: 500,
//     description: 'House Rent',
//     note: '',
//     createdAt: 15623762390
// }, {
//     amount: 1000,
//     description: 'Water Bill',
//     note: '',
//     createdAt: 15623764350
// },{
//     amount: 1200,
//     description: 'Gas Bill',
//     note: '',
//     createdAt: 156543532390
// }];
// expenses.map((expense)=>{
//     database.ref('expenses').push(expense);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     })
//     .catch((e)=>{
//         console.log('Error here: ', e);
//     });

    // database.ref('expenses').on('value', (snapshot) => {
    //     const expenses = [];
    //     snapshot.forEach((childSnapshot) => {
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     });
    //     console.log(expenses);
    // });
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });