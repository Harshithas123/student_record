import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authpage from './pages/authpage/auth.component';
import RecordData from './pages/authpage/record/RecordData.component';
import RecordList from './pages/authpage/record/recordlist/RecordList.component.js'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Authpage/>} />
      <Route path='/record-data' element={<RecordData/>} />
      <Route path='/record-list' element={<RecordList/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
