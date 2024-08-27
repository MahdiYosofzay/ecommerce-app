"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LoginSchema } from "../_lib/defenitions";
import { onSubmit } from "./actions";
import LoadingSpinner from "@/components/loading-spinner";

type LoginFormData = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <div className="flex justify-center items-center flex-grow">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => onSubmit(data))}
          className="space-y-6 px-16 py-8 rounded-lg w-[35rem] bg-card"
        >
          <h1 className="text-3xl font-bold text-primary text-center">
            Welcome Back!
          </h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button
              type="submit"
              className="font-normal w-full mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <LoadingSpinner className="text-white" />
              ) : (
                "Login"
              )}
            </Button>
            <p className="text-xs pt-2">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="hover:underline text-primary text-sm"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
