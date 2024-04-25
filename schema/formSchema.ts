import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z
    .string()
    .email({ message: 'Email is not valid. e.g. johndoe@gmail.com' }),
  type: z.string({
    required_error: 'Please select the type.',
  }),
  date: z.date({
    required_error: 'Please select a date and time.',
  }),
  location: z.string().min(5, { message: 'Please enter a location' }),
  complaint: z.string().min(10, { message: 'Please state your complaint' }),
});

export const consultFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z
    .string()
    .email({ message: 'Email is not valid. e.g. johndoe@gmail.com' }),
  type: z.string({
    required_error: 'Please select the type.',
  }),
  date: z.date({
    required_error: 'Please select a date and time.',
  }),
  location: z.string().min(5, { message: 'Please enter a location' }),
  complaint: z.string().min(10, { message: 'Please state your complaint' }),
});

export const signupFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z
    .string()
    .email({ message: 'Email is not valid. e.g. johndoe@gmail.com' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
      {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one digit, one symbol, and be at least 8 characters long.',
      }
    ),
});

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Email is not valid. e.g. johndoe@gmail.com' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
      {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one digit, one symbol, and be at least 8 characters long.',
      }
    ),
});
