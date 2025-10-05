import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from './Button';
function LogInForm() {
  const loginSchema = yup.object({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });
  type LoginFormValues = yup.InferType<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema) });
  const onSubmit = (data: LoginFormValues) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4.5 bg-bg-main rounded-[30px] p-16"
    >
      <label htmlFor="email">
        <input
          {...register('email')}
          placeholder="Email"
          aria-invalid={errors.email ? 'true' : 'false'}
          type="email"
        />
        {errors.email && <p>{errors.email?.message}</p>}
      </label>
      <label htmlFor="password" className="">
        <input
          {...register('password')}
          placeholder="Password"
          type="text"
          className=""
        />
        {errors.password && <p className="">{errors.password?.message}</p>}
      </label>

      <Button>Log in</Button>
    </form>
  );
}

export default LogInForm;
