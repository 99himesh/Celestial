import { Route, Routes } from "react-router"
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading";
import ViewCartPage from "./pages/viewCartPage/ViewCartPage";
import WishlistPage from "./pages/wishlistPage/WishListPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import ApiLoader from "./components/loading/ApiLoader";
import AdminLayout from "./components/admin/AdminLayout";
import AdminProductPage from "./pages/adminProductPage/AdminProductPage";
import AdminCreateFormPage from "./pages/adminCreateForm/AdminCreateFormPage";
import AdminProtectedRoute from "./utils/AdminProtectedRoute";
const Layout = lazy(() => import('./layout/Layout'));
const ShopPage = lazy(() => import("./pages/shopPage/ShopPage"));
const HomePage = lazy(() => import("./pages/home/Home"));
const ProductDetailsPage = lazy(() => import("./pages/productDetails/ProductDetails"));

function App() {
  return (
    <>
    <ApiLoader/>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="shop" element={< ShopPage/>} />
          <Route path="viewcart"  element={<ProtectedRoute><ViewCartPage /></ProtectedRoute>} />
          <Route path="wishlist"  element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
          <Route path="*"  element={<div className="h-[600px] text-[#000]  pt-[300px]" >egy</div>} />
        </Route>
        <Route path="/admin" element={<AdminProtectedRoute><AdminLayout /></AdminProtectedRoute>}>
        <Route path="products" element={<AdminProtectedRoute><AdminProductPage /></AdminProtectedRoute>} />
        <Route path="create-product" element={<AdminProtectedRoute><AdminCreateFormPage /></AdminProtectedRoute>} />
        <Route path="*"  element={<div className="h-[600px] text-[#000]  pt-[300px]" >404</div>} />

        

       
        </Route>

      </Routes>
      </Suspense>
    </>
  )
}

export default App




