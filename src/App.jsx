import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Products />
    </div>
  )
}

export default App
