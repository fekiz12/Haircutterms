import { createContext, useEffect, useState } from "react";
import { urun_list as initialUrunList } from "../Assets/assets.js";
import { hizmet_list } from "../Assets/hizmet";
import { personel_list, personel_menu } from "../Assets/calisan";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "https://haircutterms-api.vercel.app";
    const [token, setToken] = useState("");
    const [urunList, setUrunList] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = urunList.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchProductList = async () => {
        try {
            const response = await axios.get(url + "/api/product/list");
            setUrunList(response.data.data);
        } catch (error) {
            console.error("Failed to fetch product list:", error);
        }
    };

    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            setCartItems(response.data.cartData);
        } catch (error) {
            console.error("Failed to load cart data:", error);
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchProductList();
            if (localStorage.getItem("token")) {
                const token = localStorage.getItem("token");
                setToken(token);
                await loadCartData(token);
            }
        }
        loadData();
    }, []);

    const contextValue = {
        personel_list,
        personel_menu,
        urunList: urunList.length ? urunList : initialUrunList,
        hizmet_list,
        cartItems,
        getTotalCartAmount,
        setCartItems,
        addToCart,
        removeFromCart,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
