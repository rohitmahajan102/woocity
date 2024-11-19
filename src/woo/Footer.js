
import logoTwo from './assets/images/logo2.png';

function Footer() {
    return (
        <footer className="site-footer">
        <div className="container">
           <div className="row">
              <div className="col-md-6 col-lg-4">
                 <div className="site-logo">
                    <img src={logoTwo} alt="logo" />
                 </div>
              </div>
              <div className="col-md-6 col-lg-4">
                 <h4>Quick Links</h4>
                 <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Restaurants</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Booking Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                 </ul>
              </div>
              <div className="col-md-12 col-lg-4">
                 <h4>Subscribe to Our Newsletter</h4>
                 <form>
                    <div className="form-group">
                       <input type="email" name="email" placeholder="Email address" />
                       <button type="submit" className="sub-btn">Subscribe</button>
                    </div>
                 </form>
              </div>
           </div>
           <div className="copyright">
              <p>All rights Reserved ©wowmycity, 2023</p>
           </div>
        </div>
     </footer>
    );
}

export default Footer;