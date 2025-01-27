import { Route, Routes } from "react-router"
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading";
const Layout = lazy(() => import('./layout/Layout'));
const ShopPage = lazy(() => import("./pages/shopPage/ShopPage"));
const HomePage = lazy(() => import("./pages/home/Home"));
const ProductDetailsPage = lazy(() => import("./pages/productDetails/ProductDetails"));
function App() {
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="shop" element={< ShopPage/>} />
          <Route path="*"  element={<HomePage />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  )
}

export default App




