import {default as FB} from "firebase/app";
import "firebase/database";
import '@firebase/storage'

const config = {
  apiKey: 'AIzaSyB3ncRFzyrDTVFQHvaxr0qAHylSs6nrJgg',
  authDomain: 'test-cc2c7.firebaseapp.com',
  databaseURL: 'https://test-cc2c7.firebaseio.com',
  projectId: 'test-cc2c7',
  storageBucket: 'test-cc2c7.appspot.com',
  messagingSenderId: '885801384381'
};


class Firebase {
  constructor() {
    try {
      FB.initializeApp(config);
    } catch(err){
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)}
    }
    this.db = FB.database();
    this.store = FB.storage()
  }

  //  Builder Items
  // Old
  items = () => this.db.ref("items");
  // New
  layouts = () => this.db.ref("layouts");

  // Choose your project sections
  projectSections = () => this.db.ref("project-sections");
  newlyAddedLabel = () => this.db.ref("newly-added-label");

  // Single Section to make a variant of
  variants = () => this.db.ref("variants");

  // Image Bucket
  storage = () => this.store.ref()
}

export default Firebase;
