import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpValidation } from "@/lib/validation";
import Loader from "@/components/ui/shared/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  useCreateUserAccount,
  useSignInAccount,
} from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";

const SignupForms = () => {
  const { toast } = useToast();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const { mutateAsync: createUserAccount, isLoading: isCreatingUser } =
    useCreateUserAccount();
  const { mutateAsync: signInAccount, isLoading: isSigningIn } =
    useSignInAccount();
  const navigate=useNavigate();
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signUpValidation>) {
    const newUser = await createUserAccount(values);
    if (!newUser) {
      return toast({
        title: "Sign up failed.Please try again",
      });
    }
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      return toast({ title: "Sign in failed . Please try again" });
    }
    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();
      navigate('/')
    }
    else{
      return toast({title:'Sign up failed.Please try again'})
    }
  }
  return (
    <Form {...form}>
      <div className=" sm:w-420 flex-center flex-col">
        <img src="/public/assets/images/logo.svg" alt="logo" />
        <h2 className=" h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a new account
        </h2>
        <p className=" text-light-3 smll-medium md:base-regular mt-2">
          To use snapgram, please enter your account details
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    type="text"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Username"
                    type="text"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className="shad-input"
                    {...field}
                  />
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
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className=" shad-button_primary">
            {isCreatingUser ? (
              <div className=" flex-center gap-2">
                <Loader />
                Loading...
              </div>
            ) : (
              "Sign up"
            )}
          </Button>
          <p className=" text-small-regular text-light-2 text-center mt-2">
            Already have an account ?{" "}
            <Link to="/sign-in" className=" text-primary-500">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForms;
