import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SigninForms from "./_auth/forms/SigninForms";
import SignupForms from "./_auth/forms/SignupForms";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";

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
        </Route>
        <Route />
      </Routes>
    </main>
  );
};

export default App;
