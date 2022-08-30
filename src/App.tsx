import * as C from './App.styles';
import { Login } from './components/Login';
import { Header } from './components/Header';

const App = () => {
  return (
    <>
      <C.Section1>
        <Header />
        <Login />
      </C.Section1>
    </>
  )
}

export default App