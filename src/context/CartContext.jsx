import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Lazy initialize state to prevent empty cart flash and avoid race conditions
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCart = localStorage.getItem("cyber-cart");
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (e) {
        console.error("Failed to parse cart storage", e);
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null); // { id, message, type, title }

  // Save cart to local storage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cyber-cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart]);

  const showToast = (message, title = "HARDWARE ACQUIRED", type = "success") => {
    const id = Date.now();
    setToast({ id, message, title, type });
  };

  const closeToast = () => setToast(null);

  const addToCart = (product, quantity = 1, openDrawer = false) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });

    showToast(`${product.name} linked to loadout`);
    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const item = prevCart.find(p => p.id === id);
      if (item) {
        showToast(`${item.name} ejected from loadout`, "HARDWARE DEPLOYED", "info");
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast("Armory loadout purged", "LOADOUT RESET", "info");
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        toast,
        showToast,
        closeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
