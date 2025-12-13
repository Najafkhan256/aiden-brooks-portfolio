import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="footer-sub-col">
          <div className="footer-link">&#x2192; Enquiries</div>
        </div>
        <div className="footer-sub-col">
          <div className="footer-link">&#x2192; Instagram</div>
          <div className="footer-link">&#x2192; Chat</div>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-link">
          <p>&copy; Aiden Brooks 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
