import '../../style/footer.css';
import { FaGithub, FaLinkedin, FaYoutube, FaGooglePlusG } from 'react-icons/fa';

import FooterStyle from './styled';

function Footer() {
  return (
    <FooterStyle>
      <FooterStyle.Row>
        <FooterStyle.Column>
          <FooterStyle.Title>WondeShi.</FooterStyle.Title>

          <FooterStyle.Social>
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
          </FooterStyle.Social>
          <FooterStyle.Break />
        </FooterStyle.Column>

        <FooterStyle.Column>
          <FooterStyle.Link href="#">FAQ</FooterStyle.Link>
          <FooterStyle.Link href="#">Investor Relations</FooterStyle.Link>
          <FooterStyle.Link href="#">Ways to Watch</FooterStyle.Link>
          <FooterStyle.Link href="#">Corporate Information</FooterStyle.Link>
          <FooterStyle.Link href="#">Movies Originals</FooterStyle.Link>
        </FooterStyle.Column>

        <FooterStyle.Column>
          <FooterStyle.Link href="#">Help Centre</FooterStyle.Link>
          <FooterStyle.Link href="#">Jobs</FooterStyle.Link>
          <FooterStyle.Link href="#">Terms of Use</FooterStyle.Link>
          <FooterStyle.Link href="#">Contact Us</FooterStyle.Link>
        </FooterStyle.Column>

        <FooterStyle.Column>
          <FooterStyle.Link href="#">Account</FooterStyle.Link>
          <FooterStyle.Link href="#">Redeem gift cards</FooterStyle.Link>
          <FooterStyle.Link href="#">Privacy</FooterStyle.Link>
          <FooterStyle.Link href="#">Speed Test</FooterStyle.Link>
        </FooterStyle.Column>
      </FooterStyle.Row>
      <FooterStyle.Break />
      <div className="copyRight">
        <FooterStyle.Text>
          &copy; {new Date().getFullYear().toString()} Wonde. All Right Reserved
        </FooterStyle.Text>
      </div>
    </FooterStyle>
  );
}

export default Footer;
