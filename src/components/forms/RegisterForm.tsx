import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../ui/Button';
import CrossIcon from '../../assets/icons/x.svg?react';
import EyeIcon from '../../assets/icons/eye.svg?react';
import CrossedEyeIcon from '../../assets/icons/eye-off.svg?react';
import { useState } from 'react';

type RegisterFormProps = {
  onClose: () => void;
};

function RegisterForm({ onClose }: RegisterFormProps) {
  const RegisterSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });
  type RegisterFormValues = yup.InferType<typeof RegisterSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({ resolver: yupResolver(RegisterSchema) });
  const onSubmit = (data: RegisterFormValues) => console.log(data);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <div>
      <CrossIcon
        className="absolute top-5 right-5 size-8 hover:text-accent-hover"
        onClick={onClose}
      />

      <h2 className="font-medium text-[40px] leading-[120%] tracking-[-0.02em] mb-5">
        Registration
      </h2>
      <p className="text-main/50 leading-[125%] mb-10">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
        <label htmlFor="name" className="relative">
          <input
            {...register('name')}
            placeholder="Name"
            type="text"
            className="focus:shadow-md outline-0 border rounded-xl py-4 px-4.5 border-[#191a151a] placeholder:leading-[125%] placeholder:text-base placeholder:text-main w-full h-[52px]"
          />
          {errors.name && (
            <p className="absolute -bottom-4 left-2 text-xs text-red-600">
              {errors.name?.message}
            </p>
          )}
        </label>
        <label htmlFor="email" className="relative">
          <input
            {...register('email')}
            placeholder="Email"
            aria-invalid={errors.email ? 'true' : 'false'}
            type="email"
            className="focus:shadow-md outline-0 border rounded-xl py-4 px-4.5 border-[#191a151a] placeholder:leading-[125%] placeholder:text-base placeholder:text-main w-full h-[52px]"
          />
          {errors.email && (
            <p className="absolute -bottom-4 left-2 text-xs text-red-600">
              {errors.email?.message}
            </p>
          )}
        </label>
        <label htmlFor="password" className="relative mb-5.5">
          <input
            {...register('password')}
            placeholder="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            className="focus:shadow-md outline-0 border rounded-xl py-4 px-4.5 border-[#191a151a] placeholder:leading-[125%] placeholder:text-base placeholder:text-main w-full h-[52px]"
          />
          <div
            className="absolute cursor-pointer top-4 right-4.5"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <EyeIcon className="size-5" />
            ) : (
              <CrossedEyeIcon className="size-5" />
            )}
          </div>
          {errors.password && (
            <p className="absolute -bottom-4 left-2 text-xs text-red-600">
              {errors.password?.message}
            </p>
          )}
        </label>
        <Button>Sign Up</Button>
      </form>
    </div>
  );
}

export default RegisterForm;
