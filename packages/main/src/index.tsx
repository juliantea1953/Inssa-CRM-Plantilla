/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ThemeProvider from "./redux/providers/theme-provider";
import PersistProvider from "./redux/providers/persist-provider";
import { store } from "./redux/store";
import App from "../src/App";
import React from "react";
import ReactDom from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container);

/* const root = ReactDom.createRoot(document.getElementById("root")); */

root.render(
    <Provider store={store}>
        <PersistProvider>
            <ThemeProvider>
                <h1>hola mundo</h1>
                <App />
            </ThemeProvider>
        </PersistProvider>
    </Provider>
);
