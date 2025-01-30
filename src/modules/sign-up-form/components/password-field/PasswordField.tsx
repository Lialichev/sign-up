import { HTMLAttributes, useState } from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Input from "../../../../ui/input";
import { passwordRules } from "../../constants/validation-password-rules";
import { FormSchema } from "../../utils/validation-schema";
import IconEyeOff from "../../../../assets/hide-password.svg";
import IconEye from "../../../../assets/show-password.svg";

const PasswordField = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const {
    register,
    watch,
    formState: { errors, touchedFields },
  } = useFormContext<FormSchema>();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const password = watch('password', '');
  const isSuccess = touchedFields.password && !errors.password;

  return (
    <div {...props}>
      {/* can be component */}
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          register={register('password')}
          error={Boolean(errors.password)}
          success={isSuccess}
          placeholder="Create your password"
          aria-label="Password"
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {
            showPassword
              ? <img src={IconEye} alt="Showing password"/>
              : <img src={IconEyeOff} alt="Hidden password"/>
          }
        </button>
      </div>

      {/* can be component */}
      <ul className="mt-2 px-5 text-xs text-dark-blue">
        {
          passwordRules.map(({ id, label, test }) => {
            const complied = (password.length || errors.password) && test(password);
            const failed = errors.password && !test(password);

            return (
              <li key={id} className={clsx('mt-1', complied && 'text-emerald-500', failed && 'text-red-400')}>
                {label}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default PasswordField;
