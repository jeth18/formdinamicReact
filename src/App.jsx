import './App.css'
import { SelectComponents } from './components/selectComponents'
import { ViewComponents } from './components/viewComponents'

function App() {
 return (
  <div className="grid grid-cols-2 h-full">
    <div className="border-r-4 border-black h-screen w-full">
      <ViewComponents/>
    </div>
    <div className="w-auto">
      <SelectComponents/>
    </div>
  </div>
 )
}

export default App
