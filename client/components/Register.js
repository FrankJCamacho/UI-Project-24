const Register = () => {
    return(
        <div>
            <h2>Register Here!</h2>
            <div classNameName="shadow p-3 mb-5 bg-body rounded">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputUsername1" className="form-label">Username</label>
                        <input type="username" className="form-control" id="exampleInputUsername1"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputFirst1" className="form-label">First Name</label>
                        <input type="firstname" className="form-control" id="exampleInputFirst1" aria-describedby="optionalHelp"></input>
                        <div id="optionalBlock" className="form-text text-info">
                            Optional
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputLast1" className="form-label">Last Name</label>
                        <input type="lastname" className="form-control" id="exampleInputLast1" aria-describedby="optionalHelp"></input>
                        <div id="optionalBlock" className="form-text text-info">
                            Optional
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelpBlock"></input>
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;