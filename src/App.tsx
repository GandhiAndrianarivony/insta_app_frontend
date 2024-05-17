import { Routes, Route } from "react-router-dom";

import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RouteLayout from "./_root/RouteLayout";

import "./globals.css";

function App() {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes: Everybody are able to see */}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SigninForm />} />
                    <Route path="/sign-up" element={<SignupForm />} />
                </Route>

                {/* private routes: Only signed-in user */}
                <Route element={<RouteLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
