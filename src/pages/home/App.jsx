import Header from "../header/Header.jsx"
import Principal from "../principal/Principal.jsx"
import Modelos from "../Modelos/Modelos.jsx"
import Servicos from "../Servicos/Servicos.jsx"
import Comprar from "../Comprar/Comprar.jsx"
import Comercial from "../Comercial/Comercial.jsx"
import Preenchimento from "../footer/Preenchimento.jsx"
import Footer from "../footer/Footer.jsx"

function App() {

  return (
    <div className="w-full h-full flex flex-col" >
      < Header />
      < Principal />
      < Modelos />
      < Servicos />
      < Comercial />
      < Comprar />
      < Preenchimento />
      < Footer />
    </div>
  )
}

export default App
