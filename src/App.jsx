import CreateProduct from "./components/CreateProduct"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import Transactions from "./components/Transactions"
import UpdateProduct from "./components/UpdateProduct"
import LoadingPage from "./components/LoadingPage"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Products />
      <Transactions />
      <Footer />
      <CreateProduct />
      <ProductDetail />
      <UpdateProduct />
      <LoadingPage />
    </div>
  )
}

export default App
