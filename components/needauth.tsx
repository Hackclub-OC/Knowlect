// code which can be used to show if the user is not authenticated
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button as AuthLinkButton } from "@/components/core/button";
import { Navbar } from "./navbar";

export const NeedAuth = () => {
  return (
    <>
      <Navbar />
      <div className="mt-40 bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h2 className="mt-6 text-3xl text-primary">
            Authentication Required
          </h2>
          <p className="mt-2 text-2xl italic text-muted-foreground">
            Please Log In or Sign Up to access the learning content.
          </p>
        </div>
      </div>
    </>
  );
};


{  /*
   code for login and sign up button similar to the one on the homepage

  <div className="mt-6 space-y-4">
            <LoginLink className="">
              <AuthLinkButton
                size="large"
                variant="outline"
                className="w-[200px] "
              >
                Log In
              </AuthLinkButton>
            </LoginLink>
            <RegisterLink className="">
              <AuthLinkButton
                size="large"
                variant="gradient"
                className="w-[200px] sm:ml-10 mt-4"
              >
                Sign Up
              </AuthLinkButton>
            </RegisterLink>
          </div> */
}
