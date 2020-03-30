import firebase, { FirebaseError } from "firebase/app";
import "firebase/analytics";
import React, { useState } from "react";

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

export function firebaseInitApp() {
  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  if (typeof window !== "undefined") {
    app.analytics().setAnalyticsCollectionEnabled(true);
    app.analytics().logEvent("site-visit-event");
    console.warn("SEND -> site visit event");
  }

  return app;
}

export const FirebaseContext = React.createContext<{ app?: firebase.app.App }>(
  {}
);

export default function WithFirebase({
  children
}: {
  children: React.ReactNode;
}) {
  const [app] = useState(firebaseInitApp);
  return (
    <FirebaseContext.Provider value={{ app }}>
      {children}
    </FirebaseContext.Provider>
  );
}
