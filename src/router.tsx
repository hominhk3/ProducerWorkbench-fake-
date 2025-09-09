import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTER } from "./utils/router";
import HomePage from "./pages/homPage";
import SettingsPage from "./pages/Setting";
import FallingMusicNotes from "./pages/music";
import FilterProducer from "./pages/FilterProducer";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import PortfolioPage from "./pages/PortfolioPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import MilestoneDetailsPage from "./pages/MilestoneDetailsPage";
import UserProfile from "./pages/user/UserProfile";
import ProducerList from "./pages/ProducerList";
import UpdateProducer from "./pages/user/UpdateProducer";
import ComplaintList from "./pages/ComplaintList";
import ContractManager from "./pages/ContractManage";
import ContractDetail from "./pages/ContractDetail";
import HomePage2 from "./pages/HomePage2";
import CreateContractPage from "./pages/CreateContractPage";
import SplitSheetPage from "./pages/SplitSheetPage";
import MasterLayout from "./pages/user/theme/MasterLayout";
import ProjectManage from "./pages/ProjectManage";

const RenderUserRouter = () => {
  const location = useLocation();
  const { pathname } = location;
  const shownotes: string[] = [ROUTER.USER.SETTING];
  return (
    <div>
      {shownotes.includes(pathname) && <FallingMusicNotes />}
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path={ROUTER.USER.HOME} element={<HomePage />} />
          <Route path={ROUTER.USER.SETTING} element={<SettingsPage />} />
          <Route
            path={ROUTER.USER.FILTERPRODUCER}
            element={<FilterProducer />}
          />

          <Route path={ROUTER.USER.PORTFOLIO} element={<PortfolioPage />} />
          <Route path={ROUTER.USER.PROJECTMANAGE} element={<ProjectManage/>} />
          <Route
            path={ROUTER.USER.CREATEPROJECT}
            element={<CreateProjectPage />}
          />
          <Route
            path={ROUTER.USER.PROJECTDETAIL}
            element={<ProjectDetailsPage />}
          />
          <Route
            path={ROUTER.USER.MILESTONE}
            element={<MilestoneDetailsPage />}
          />

          <Route path={ROUTER.USER.HOMEPAGE} element={<HomePage2 />} />
          <Route path={ROUTER.USER.PROFILE} element={<UserProfile />} />
          <Route path={ROUTER.USER.PRODUCERLIST} element={<ProducerList />} />
          <Route
            path={ROUTER.USER.UPDATEPRODUCER}
            element={<UpdateProducer />}
          />
          <Route path={ROUTER.USER.COMPLAINTLIST} element={<ComplaintList />} />
          <Route
            path={ROUTER.USER.CONTRACTMANAGE}
            element={<ContractManager />}
          />
          <Route
            path={ROUTER.USER.CONTRACTDETAIL}
            element={<ContractDetail />}
          />
          <Route path={ROUTER.USER.CONTRACT} element={<CreateContractPage />} />
          <Route path={ROUTER.USER.SPLITMONEY} element={<SplitSheetPage />} />
        </Route>
        <Route path={ROUTER.USER.LOGIN} element={<LoginPage />} />
        <Route path={ROUTER.USER.SIGNUP} element={<SignUpPage />} />
        <Route
          path={ROUTER.USER.RESETPASSWORD}
          element={<ResetPasswordPage />}
        />
      </Routes>
    </div>
  );
};
const RouterCustom = () => {
  return RenderUserRouter();
};

export default RouterCustom;
