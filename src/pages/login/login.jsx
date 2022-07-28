import { useRef } from "react";
// import bgLogin from '../../images/bg-login.png'

function Login() {
  const email = useRef();
  const password = useRef();
  return (
    <>
      <div class="accountbg"></div>
      <div class="home-btn d-none d-sm-block">
        <a href="/" class="text-white">
          <i class="fa-solid fa-house"></i>
        </a>
      </div>
      <div class="wrapper-page">
        <div class="card card-pages shadow-none">
          <div class="card-avto-body">
            <div class="text-center m-t-0 m-b-15">
              <a href="" class="logo logo-admin">
                <h1>RAUTO</h1>
              </a>
            </div>
            <h5 class="font-18 text-center"></h5>
            <form
              class="form-horizontal m-t-30 el_form"
              onSubmit={(e) => {
                e.preventDefault();
                fetch("http://localhost:3001/admin/login/", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: email.current.value,
                    password: password.current.value,
                  }),
                })
                  .then(function (res) {
                    return res.json();
                  })
                  .then(function (data) {
                    window.localStorage.setItem("token", JSON.stringify(data));
                    window.location = "/admin/yangilik";
                  });
              }}
            >
              <div class="form-group">
                <div class="col-12">
                  <label>Email</label>
                  <input
                    ref={email}
                    class="form-control email_input"
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-12">
                  <label>Password</label>
                  <input
                    ref={password}
                    class="form-control password_input"
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="form-group text-center m-t-20">
                <div class="col-12">
                  <button
                    class="btn btn-primary btn-block btn-lg waves-effect waves-light"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
