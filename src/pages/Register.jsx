import Add from '../img/add200.png'

export const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">FireChat</span>
                <span className="title">Register</span>
               <form>
                   <input placeholder="display name"/>
                   <input type="email" placeholder="email"/>
                   <input type="password" placeholder="password"/>
                   <input style={{display:"none"}} type="file" id="file"/>
                   <label htmlFor="file">
                       <img src={Add} alt="" />
                       <span>Add an avatar</span>
                   </label>
                   <button>Sign up</button>
               </form>
                <p>You do not have an account? Login</p>
            </div>
        </div>
    )
}