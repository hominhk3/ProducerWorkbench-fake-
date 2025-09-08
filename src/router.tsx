import { Route, Routes, useLocation } from "react-router-dom"
import { ROUTER } from "./utils/router"
import HomePage from "./pages/homPage"
import SettingsPage from "./pages/Setting"
import FallingMusicNotes from "./pages/music"
import FilterProducer from "./pages/FilterProducer"
import LoginPage from "./pages/login"
import SignUpPage from "./pages/SignUpPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import PortfolioPage from "./pages/PortfolioPage"
import DashboardPage from "./pages/DashboardPage"
import CreateProjectPage from "./pages/CreateProjectPage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import MilestoneDetailsPage from "./pages/MilestoneDetailsPage"

const RenderUserRouter = () => {
  const location = useLocation();
  const {pathname} = location;
  const shownotes : string[] = [
    ROUTER.USER.SETTING,
  ]
  return (
    <div>
      {shownotes.includes(pathname) && <FallingMusicNotes/>}
      <Routes>
        <Route
          path={ROUTER.USER.HOME}
          element={<HomePage/>}
        />
        <Route
          path={ROUTER.USER.SETTING}
          element={<SettingsPage />}
        />
        <Route
          path={ROUTER.USER.FILTERPRODUCER}
          element={<FilterProducer />}
        />
        <Route
          path={ROUTER.USER.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path={ROUTER.USER.SIGNUP}
          element={<SignUpPage/>}
        />
        <Route
          path={ROUTER.USER.RESETPASSWORD}
          element={<ResetPasswordPage/>}
        />
        <Route
          path={ROUTER.USER.PORTFOLIO}
          element={<PortfolioPage/>}
        />
        <Route
          path={ROUTER.USER.DASHBOARD}
          element={<DashboardPage/>}
        />
        <Route
          path={ROUTER.USER.CREATEPROJECT}
          element={<CreateProjectPage/>}
        />
        <Route
          path={ROUTER.USER.PROJECTDETAIL}
          element={<ProjectDetailsPage/>}
        />
        <Route
          path={ROUTER.USER.MILESTONE}
          element={<MilestoneDetailsPage/>}
        />
      </Routes>
    </div>
  )
}
const RouterCustom = () => {
  return RenderUserRouter();
}

export default RouterCustom
