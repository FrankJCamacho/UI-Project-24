const Login = () => {
    return(
        <div>
            <h2>Login Here!</h2>
            <div classNameName="shadow p-3 mb-5 bg-body rounded">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputUsername1" className="form-label">Username</label>
                        <input type="username" className="form-control" id="exampleInputUsername1"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;