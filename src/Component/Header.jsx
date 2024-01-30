import SignIn from "./SignIn";

const NavBar = () => {
    return (
      <>
        <div className="header">
          <h3>Logo</h3>
          <nav>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <button onClick={SignIn()}>Sign In</button>
          </nav>
        </div>
      </>
    )
}

export default NavBar;