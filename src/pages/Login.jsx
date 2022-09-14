

export const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">FireChat</span>
                <span className="title">Register</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign in</button>
                </form>
                <p>Do you not have an account? Register</p>
            </div>
        </div>
    )
}