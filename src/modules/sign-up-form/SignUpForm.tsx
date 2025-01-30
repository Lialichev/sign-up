import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailField from "./components/email-field";
import PasswordField from "./components/password-field";
import Button from "../../ui/button";
import { formSchema, FormSchema } from "./utils/validation-schema";

const SignupForm = () => {
  const formMethods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    // can be used if needed
    // reValidateMode: 'onBlur',
  });

  const onSubmit = (data: FormSchema) => console.log('Submitted data:', data);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <EmailField/>
        <PasswordField className="mt-5"/>
        <Button className="mt-9" type="submit" aria-label="Sign up">
          Sign Up
        </Button>
      </form>
    </FormProvider>
  );
}

export default SignupForm;