import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import CartPage from "./pages/CartPage.vue";
import CheckoutPage from "./pages/CheckoutPage.vue";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import ProductPage from "./pages/ProductPage.vue";
import ShopPage from "./pages/ShopPage.vue";
import SignupPage from "./pages/SignupPage.vue";
import "./style.css";

const routes = [
  { path: "/", component: HomePage },
  { path: "/signup", component: SignupPage },
  { path: "/login", component: LoginPage },
  { path: "/shop", component: ShopPage },
  { path: "/product/:id", component: ProductPage },
  { path: "/checkout", component: CheckoutPage },
  { path: "/cart", component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
