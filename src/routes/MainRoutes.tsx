import MainLayout from "layout/MainLayout";
import AuthGuard from "utils/route-guard/AuthGuard";
import Home from "views/pages/Home";


const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/home',
      element: <Home />
    },
  ]
}

export default MainRoutes;