import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import Navbar from "./components/Navbar"
import { Container } from "@chakra-ui/react"


function App() {

  return (
    <>
      <Container maxW={"1200px"}>
        <Routes>
          {routes.map((route, idx) => (
            <Route key={idx} path={route.path} element={
              <>
                <Navbar key="navbar" />
                <route.element key={idx} />
              </>
            } />
          ))}
        </Routes>
      </Container>

    </>
  )
}

export default App
