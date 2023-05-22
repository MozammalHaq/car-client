import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

<div className="divider divider-horizontal">OR</div>

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">G</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;