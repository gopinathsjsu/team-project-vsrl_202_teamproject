import { Link,useHistory } from "react-router-dom";
import { signout } from "../authHelper";

const SignOut =()=> {
    const history=useHistory();
    return(
        <Link to="/signout" onClick={()=>{
            signout(()=>{
                history.push("/");
            });
        }}>Signout</Link>
            );
}

export default SignOut;