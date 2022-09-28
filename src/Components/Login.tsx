import React, {useEffect} from "react";
import GoogleLogin from "react-google-login";
import {gapi } from 'gapi-script'
export const Login = () => {
  const responseGoogle = (response: any) => {
    console.log("google", response);
  };
const responseGoogleFail=(response:any)=>{
    console.log("fail", response);

}
useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);
  return (
    <div>
        <button> login</button>
      <GoogleLogin
        clientId="1048605690149-ege2nfk2878k4fmaftehh9ijfeltsj53.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogleFail}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
