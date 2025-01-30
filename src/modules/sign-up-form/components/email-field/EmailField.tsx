import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import Input from "../../../../ui/input";
import { FormSchema } from "../../utils/validation-schema";

const EmailField = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext<FormSchema>();

  const isSuccess = touchedFields.email && !errors.email;

  return (
    <div {...props}>
      <Input
        type="email"
        register={register('email')}
        error={Boolean(errors.email)}
        errorMsg={errors.email?.message}
        success={isSuccess}
        placeholder="Email"
        aria-label="Email"
      />
    </div>
  );
};

export default EmailField;
