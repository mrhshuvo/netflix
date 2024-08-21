import "./Login.css";

const Login = () => {
    return (
        <>
           <nav>
              <a href="#"><img src="./src/assets/logo.png" alt="" /></a>
           </nav>
           <div className="form-wrapper">
             <h2>Sing In</h2>
             <form action="#">
              <div className="form-control">
                <input type="text" required />
                <label htmlFor="">Email Or Phone Number</label>
              </div>
              <div className="form-control">
                <input type="password" required />
                <label htmlFor="">Password</label>
              </div>
              <button type="submit">Sing In</button>
              <div className="form-help">
                <div className="remember-me">
                  <input type="checkbox"  id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
              </div>
             </form>
             <p>New to Netflix?<a href="#">Sing up now</a></p>
             <small>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
               <a href="#">Learn more.</a>
             </small>
           </div>
        </>
    )
};


export default Login;