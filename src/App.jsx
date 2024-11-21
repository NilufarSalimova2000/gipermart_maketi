import DrowerProvider from "./context/drowerOpen"
import { Router } from "./router"

function App() {


  return (
    <>
      <DrowerProvider>
        <Router />
      </DrowerProvider>

    </>
  )
}

export default App
