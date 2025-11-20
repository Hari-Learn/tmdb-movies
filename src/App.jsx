import { Routes,Route } from "react-router"
import HomePage from "./pages/HomePage"
import MainLayout from "./layout/MainLayout"

function App() {


  return (
    <>
      
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
        </Routes>
      </MainLayout>

    </>
  )
}

export default App
