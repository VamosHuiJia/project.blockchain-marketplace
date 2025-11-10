import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import CreateProduct from "./components/CreateProduct"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import Transactions from "./components/Transactions"
import UpdateProduct from "./components/UpdateProduct"
import LoadingPage from "./components/LoadingPage"
import Alert from "./components/Alert"
import Author from "./components/Author"

import { useEffect } from "react"
import { isWalletConnected } from "./Blockchain.services"


const App = () => {
  // Giữ trạng thái khi kết nối thành công
  useEffect(async () => {
    await isWalletConnected()
    // await getAllNFTs()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
      </div>
      <Routes>
        <Route
          path="/products"
          element={
            <>
              <Hero />
              <Products />
              <Transactions />
              
              <CreateProduct />
              <ProductDetail />
              <UpdateProduct />
              <LoadingPage />
              <Alert />
            </>
          }
        />
        <Route path="/authors" element={<Author />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
