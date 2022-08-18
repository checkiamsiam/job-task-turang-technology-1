import { React } from "react";
import { Routes, Route } from "react-router-dom";
import {
  LogIn,
  ForgotPassword,
  ResetPassword,
  Home,
  HelpSupport,
  SbrTeams,
  NewUserVerification,
  UsersList,
  ProfileFeed,
  AdminProfile,
} from "./pages";
import * as ROUTES from "./constant/routes";
import { IsUserRedirect, RequireAuth } from "./helpers/routes";
import AuthProvider from "./helpers/authProvider";

//

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        <Route
          path={ROUTES.ADMIN_PROFILE}
          element={
            <RequireAuth>
              <AdminProfile />
            </RequireAuth>
          }
        />

        <Route
          path={ROUTES.USERSLIST}
          element={
            <RequireAuth>
              <UsersList />
            </RequireAuth>
          }
        />

        <Route
          path={ROUTES.PROFILEFEED}
          element={
            <RequireAuth>
              <ProfileFeed />
            </RequireAuth>
          }
        />

        <Route
          path={ROUTES.SBRTEAMS}
          element={
            <RequireAuth>
              <SbrTeams />
            </RequireAuth>
          }
        />

        <Route
          path={ROUTES.NEWUSERVERIFICATION}
          element={
            <RequireAuth>
              <NewUserVerification />
            </RequireAuth>
          }
        />

        <Route
          path={ROUTES.LOG_IN}
          element={
            <IsUserRedirect>
              <LogIn />
            </IsUserRedirect>
          }
        />

        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={
            <IsUserRedirect>
              <ForgotPassword />
            </IsUserRedirect>
          }
        />

        <Route
          path={ROUTES.RESET_PASSWORD}
          element={
            <IsUserRedirect>
              <ResetPassword />
            </IsUserRedirect>
          }
        />

        <Route
          path={ROUTES.HELP_SUPPORT}
          element={
            <RequireAuth>
              <HelpSupport />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
