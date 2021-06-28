import { default as FB } from "firebase/app";
import "firebase/database";
import "@firebase/storage";

const config = {
  apiKey: "AIzaSyBS9IsgPs58oayF_k4u2P9-kkuAP5aRlY0",
  authDomain: "sb-demo-a3d09.firebaseapp.com",
  databaseURL: "https://sb-demo-a3d09-default-rtdb.firebaseio.com",
  projectId: "sb-demo-a3d09",
  storageBucket: "sb-demo-a3d09.appspot.com",
  messagingSenderId: "1009654910067",
};

class Firebase {
  constructor() {
    try {
      FB.initializeApp(config);
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
    }
    this.db = FB.database();
    this.store = FB.storage();
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
  storage = () => this.store.ref();
}

export default Firebase;
