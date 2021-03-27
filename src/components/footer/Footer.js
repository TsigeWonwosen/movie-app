import '../../style/footer.css';
import { FaGithub, FaLinkedin, FaYoutube, FaGooglePlusG } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-address">
        <div>
          <FaGithub />
        </div>
        <div>
          <FaLinkedin />
        </div>
        <div>
          <FaYoutube />
        </div>
        <div>
          <FaGooglePlusG />
        </div>
      </div>
      <div className="copyRight">
        <h5>
          &copy; {new Date().getFullYear().toString()} Wonde. All Right Reserved
        </h5>
      </div>
    </div>
  );
}

export default Footer;
