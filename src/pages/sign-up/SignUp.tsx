import Layout from "./Layout";
import SignUpForm from "../../modules/sign-up-form";

const SignUp = () => (
  <Layout>
    <h1 className="font-bold text-3xl text-dark-blue z-10">Sign up</h1>
    <div className="mt-9 w-full max-w-sm z-10">
      <SignUpForm/>
    </div>
  </Layout>
);

export default SignUp;