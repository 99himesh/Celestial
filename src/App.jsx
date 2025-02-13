import { Route, Routes } from "react-router"
import { lazy, Suspense, useEffect } from "react";
import Loading from "./components/loading/Loading";
import ViewCartPage from "./pages/viewCartPage/ViewCartPage";
import WishlistPage from "./pages/wishlistPage/WishListPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import ApiLoader from "./components/loading/ApiLoader";
import AdminLayout from "./components/admin/AdminLayout";
import AdminProductPage from "./pages/adminProductPage/AdminProductPage";
import AdminCreateFormPage from "./pages/adminCreateForm/AdminCreateFormPage";
import AdminProtectedRoute from "./utils/AdminProtectedRoute";
import NotFound from "./pages/notFound/NotfoundPage";
const Layout = lazy(() => import('./layout/Layout'));
const ShopPage = lazy(() => import("./pages/shopPage/ShopPage"));
const HomePage = lazy(() => import("./pages/home/Home"));
const ProductDetailsPage = lazy(() => import("./pages/productDetails/ProductDetails"));
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminOrdersPage from "./pages/adminOrder/AdminOrderPage";
function App() {
 
  return (
    <>
    <ToastContainer/>
    <ApiLoader/>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="shop" element={< ShopPage/>} />
          <Route path="viewcart"  element={<ProtectedRoute><ViewCartPage /></ProtectedRoute>} />
          <Route path="wishlist"  element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path="*"  element={<NotFound/>} />
        </Route>
        <Route path="/admin" element={<AdminProtectedRoute><AdminLayout /></AdminProtectedRoute>}>
        <Route path="products" element={<AdminProtectedRoute><AdminProductPage /></AdminProtectedRoute>} />
        <Route path="create-product" element={<AdminProtectedRoute><AdminCreateFormPage /></AdminProtectedRoute>} />
        <Route path="order" element={<AdminProtectedRoute><AdminOrdersPage /></AdminProtectedRoute>} />
        
        <Route path="*"  element={<NotFound/>} />

        

       
        </Route>

      </Routes>
      </Suspense>
    </>
  )
}

export default App




