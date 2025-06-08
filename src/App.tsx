import { Routes, Route} from "react-router"
import { LandingPage } from "./modules"
const App = () => {
  return (
    <Routes>
      <Route 
      key={"index"}
      path={"/"}
      element={<LandingPage/>}
      />
    </Routes>
  )
}

export default App