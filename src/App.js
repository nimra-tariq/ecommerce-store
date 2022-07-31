import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import { CartContext } from "./context";
import useLocalStorage from "./hooks/useLocalStorage";
import RequireAuth from "./components/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";

function App() {
  const [items, setItems, addToCart, incrementItem, decrementItem, removeItem] =
    useLocalStorage();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CartContext.Provider
          value={[
            items,
            setItems,
            addToCart,
            incrementItem,
            decrementItem,
            removeItem,
          ]}
        >
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/SignIn" element={<SignIn />}></Route>
              <Route path="/SignUp" element={<SignUp />}></Route>
              <Route path="/Home" element={<Home />}></Route>
              <Route
                path="/Cart"
                element={
                  <RequireAuth children={<Cart />} redirectTo="/SignIn" />
                }
              ></Route>
              <Route path="/products/:id" element={<ProductDetail />}></Route>
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
