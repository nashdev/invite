import cn from "classnames";
import s from "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuVisible: false
    };
  }

  toggleMobileMenu = () => {
    this.setState({
      mobileMenuVisible: !this.state.mobileMenuVisible
    });
  };

  render() {
    const mobileNavClasses = cn({
      "navbar-menu": true,
      "is-active": this.state.mobileMenuVisible
    });

    const navbarBurgerClasses = cn({
      "navbar-burger": true,
      burger: true,
      "is-active": this.state.mobileMenuVisible
    });

    return (
      <nav className="navbar">
        <div className="container">
          <div className={cn("navbar-brand", s.brand)}>
            <a href="/" className="navbar-item">
              NashDev/<span>Slack</span>
            </a>

            <div
              className={navbarBurgerClasses}
              onClick={this.toggleMobileMenu}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="mobile-nav" className={mobileNavClasses}>
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                <span>Invite</span>
              </a>

              <a className="navbar-item" href="https:///jobs.nashdev.com">
                <span>Jobs</span>
              </a>

              <a className="navbar-item" href="/conduct">
                <span>Conduct</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
