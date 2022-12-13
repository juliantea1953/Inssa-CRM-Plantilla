/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ThemeProvider from "./redux/providers/theme-provider";
import PersistProvider from "./redux/providers/persist-provider";
import { store } from "./redux/store";
import App from "../src/App";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

/* import awsExports from "./aws-exports"; */
Amplify.configure(awsExports);

const container = document.getElementById("root")!;
const root = createRoot(container);

/* const root = ReactDom.createRoot(document.getElementById("inicio")!); */

root.render(
    <Provider store={store}>
        <PersistProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </PersistProvider>
    </Provider>
);
