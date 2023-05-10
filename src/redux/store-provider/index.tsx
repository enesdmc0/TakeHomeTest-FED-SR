"use client"
import { Provider } from "react-redux";
import store from "@/redux/store";

interface ParentComponentProps {
    children: React.ReactNode;
}
const StoreProvider: React.FC<ParentComponentProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
