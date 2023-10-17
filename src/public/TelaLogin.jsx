import './TelaLogin.css';

import { AiOutlineUser } from 'react-icons/ai';

import Icone_Logo from '../assets/icone_logo.png';
import PasswordHide from './PasswordHide';

function App() {
  return (
    <div className='App'>
      <form>
        <div className='Container'>
          <div className='Icon-Logo'>
            <img src={Icone_Logo} alt='logo da escola E.E.E.P Adriano Nobre' />
          </div>  

          <div className='Title'>
            <h1>Biblioteca</h1>
          </div>

          <div className='Campo-Group'>
            <AiOutlineUser className='Icon' />
            <input type='text' name='name' placeholder='Nome' required />
          </div>

          <PasswordHide />

          <div className='Remember'>
            <input type="checkbox" name="checkbox"/>
            <span>Lembrar-me</span>
          </div> 

          <div className='Links'>
            <a href='/#' className='Help-A'>Ajuda</a>
          </div>

          <div className='Campo-Group'>
            <input type='submit'
              className='Button'
              value='Entrar' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;