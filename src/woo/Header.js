import logo from './assets/images/logo.png';
import language from './assets/images/language.svg';

function Header() {
    return (
        <header className="site-header">
         <div className="top-head">
            <div className="container">
               <div className="head-layout">
                  <a className="site-logo" href="index.html">
                      <img src={logo} alt="logo" />
                  </a>
                  <form className="search-form">
                      <input className="form-control" type="search" placeholder="Search by dish name, restaurant" aria-label="Search" />
                      <button className="btn btn-search" type="submit"><i className="fa fa-search"></i></button>
                  </form>
                  <div className="drop-box">
                      <div className="dropdown">
                        <button className="language-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={language} /> English
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">Arabic</a></li>
                            <li><a className="dropdown-item" href="#">Italian</a></li>
                        </ul>
                      </div>
                      <div className="dropdown">
                        <button className="account-btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="far fa-user"></i>
                        My Account
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                            <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                      </div>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                      </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="nav-bar">
            <div className="container">
               <nav className="navbar navbar-expand-lg">
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                     <div className="navbar-nav">
                        <a className="nav-link active" href="index.html">Home</a>
                        <a className="nav-link" href="about-us.html">About Us</a>
                        <a className="nav-link" href="restaurants.html">Restaurants</a>
                        <a className="nav-link" href="contact-us.html">Contact Us</a>
                     </div>   
                  </div>
               </nav>
            </div>
         </div>
      </header>
    );
}

export default Header;