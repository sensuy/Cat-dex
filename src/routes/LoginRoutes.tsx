import MainLayout from "layout/MainLayout";
import AuthGuard from "utils/route-guard/AuthGuard";


const LoginRoutes = {
  path: '/login',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/registrar',
      // element: <AuthLogin />
    },
  ]
}

export default LoginRoutes;