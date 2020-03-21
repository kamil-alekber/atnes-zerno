import firebase from "firebase/app";
import Menu from "../components/Menu/Menu";
import "semantic-ui-css/semantic.min.css";
import "../public/style/main.scss";

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

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

function App({ Component, pageProps }) {
  return (
    <main id="main">
      <Menu>
        <Component {...pageProps} app={app} />
      </Menu>
    </main>
  );
}

export default App;
