import './App.scss'
import { Banner } from './components/Banner/Banner'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <main>
        <h1>hello</h1>
      </main>
    </div>
  )
}

export default App
