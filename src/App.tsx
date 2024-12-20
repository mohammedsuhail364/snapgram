import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SigninForms from "./_auth/forms/SigninForms";
import SignupForms from "./_auth/forms/SignupForms";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className=" flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForms />} />
          <Route path="/sign-up" element={<SignupForms />} />
        </Route>
        {/*private Routes*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
        <Route />
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
