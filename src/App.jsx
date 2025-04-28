
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {

  return (
    <>
     <div>
     <div style={{display:"flex",justifyContent:"space-around"}}>
        <div>
        <Signin />
        </div>
        <div>
        <Signup />
        </div>
        <hr />
      </div>
     
     </div>
    </>
  )
}

export default App
