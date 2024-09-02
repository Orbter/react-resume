import back from '../assets/back.svg';
import download from '../assets/download.svg';
import A4 from './a4Page';
import '../style/openA4.css';
function CloseOrOpenDIv(openA4, setOpenA4) {
  const openDiv = () => {
    setOpenA4(openA4 === 'open' ? 'close' : 'open');
  };
  return (
    <div className="page-a4-container">
      <nav className="nav-a4">
        <ul className="a4-list">
          <li>
            <button className="back-button button" onClick={openDiv}>
              <img src={back} className="back-svg" alt="back-to-div" />
            </button>
            <button className="download-button button">
              <img src={download} alt="download-resume" />
            </button>
          </li>
        </ul>
      </nav>
      <A4 />
    </div>
  );
}

export { CloseOrOpenDIv };
