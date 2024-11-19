
import logo from './assets/images/white-logo.png';

function SideLogo() {
    return (
        <div className="image-area">
            <div className="site-logo">
                <a href="index.html">
                    <img src={logo} alt="logo" />
                </a>
            </div>
        </div>
    );
}

export default SideLogo;