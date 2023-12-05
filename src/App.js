import ChatApp from './componets/ChatApp'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/'  element={<ChatApp/>} />
    </Routes>
    
 </BrowserRouter>
  );
}

export default App;
