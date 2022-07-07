import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { wrapperLogin } from "./_loginPageStyle";
import { cx } from "emotion";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/appContext";
interface IStateLogin {
  username: string;
  password: string;
}

const history = createBrowserHistory();

function Intro() {
  const [state, setValue] = useState<IStateLogin>({
    username: "",
    password: "",
  });
  const { globalState, setState } = useAppContext();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const users = ["anita", "john", "admin"];
    console.log(users.some((user: string) => user === state.username));
    if (users.some((user: string) => user === state.username)) {
      setState({ isLogin: true });
      history.push("/dashboard");
    }
  };
  return (
    <section className={cx(wrapperLogin, "wrapper")}>
      <div className="bg-container"></div>
      <div className="content">
        <h2>Sign in to us</h2>

        <div className="msg-error">Incorrect username or password.</div>

        <div className="text-center m-5-auto">
          <form onSubmit={handleSubmit}>
            <p>
              <label>Username or email address</label>
              <br />
              <input
                placeholder="Username"
                type="text"
                name="first_name"
                value={state.username}
                onChange={(e) =>
                  setValue({ ...state, username: e.target.value })
                }
                required
              />
            </p>
            <p>
              <label>Password</label>
              <Link to="#">
                <label className="right-label">Forget password?</label>
              </Link>
              <br />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={state.password}
                onChange={(e) =>
                  setValue({ ...state, password: e.target.value })
                }
                required
              />
            </p>
            <p>
              <button id="sub_btn" type="submit">
                Login
              </button>
            </p>
          </form>
          <footer>
            <p>
              First time? <Link to="/#">Create an account</Link>.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Intro;
