import { Provider } from "react-redux";
// Adjust the path to point to your Redux store
import "@/styles/globals.css";
import { store } from "@/store/store";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
