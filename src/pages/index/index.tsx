import React from "react";
import firebase from "firebase/app";
import Menu from "../../components/Menu";

const firebaseConfig = {
  apiKey: "AIzaSyAogtjW-13s-seM51sVzij1nYQQ_QAvqYM",
  authDomain: "test-client-public.firebaseapp.com",
  databaseURL: "https://test-client-public.firebaseio.com",
  projectId: "test-client-public",
  storageBucket: "test-client-public.appspot.com",
  messagingSenderId: "1006150743739",
  appId: "1:1006150743739:web:de9588bfd423092ac05b9e",
  measurementId: "G-TWDZVLZ0KC"
};

const app = firebase.initializeApp(firebaseConfig);

export default function index() {
  const siteName = app.name;
  return (
    <div>
      <Menu name={siteName} />
      hello me from the past
    </div>
  );
}
