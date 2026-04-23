import { BrowserRouter, Route, Routes } from "react-router-dom";
import HouseExpensesPage from "../pages/HouseExpensesPage";
import UserPage from "../pages/UserPage";
import TransactionPage from "../pages/TransactionPage";
import CategoryPage from "../pages/CategoryPage";
import MenuPage from "../pages/MenuPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />}>
          <Route index element={<HouseExpensesPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="category" element={<CategoryPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
