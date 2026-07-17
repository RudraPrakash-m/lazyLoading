import { createRoot } from "react-dom/client"
import App from "./App"
import store from "./redux/store"
import { Provider } from "react-redux"
import ProductContext from "./context/productContext/ProductContext"

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ProductContext>
            <App />
        </ProductContext>
    </Provider>
)   