import './style/navBar.css';
import saveImg from './assets/save.svg';
import downLoadImg from './assets/download.svg';

function NavBar({ downloadPdf }) {
  return (
    <nav className='nav-bar'>
      <ul className='nav-list'>
        <li className='nav-list-li'>
          <button className='save-button button'>
            <img src={saveImg} alt='save' className='save-img' />
            Save
          </button>
        </li>
        <li className='nav-list-li'>
          <button className='download-button button' onClick={downloadPdf}>
            <img src={downLoadImg} alt='save' className='download-img' />
            Download
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
