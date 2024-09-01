import back from '../assets/back.svg';
import download from '../assets/download.svg';
import A4 from './a4Page';
function CloseOrOpenDIv(openOrClose, setOpenOrClose) {
  const openDiv = () => {
    setOpenOrClose(openOrClose === 'open' ? 'close' : 'open');
  };
  return (
    <>
      {openOrClose === 'open' && (
        <div className="page-a4-container">
          <nav className="nav-a4">
            <ul className="a4-list">
              <li>
                <button className="back-button button">
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
      )}
    </>
  );
}
