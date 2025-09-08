import { Route, Routes, useLocation } from "react-router-dom"
import { ROUTER } from "./utils/router"
import HomePage from "./pages/homPage"
import SettingsPage from "./pages/Setting"
import FallingMusicNotes from "./pages/music"
import FilterProducer from "./pages/FilterProducer"
import HomePage2 from "./pages/HomePage2"
import UserProfile from "./pages/user/UserProfile"
import ProducerList from "./pages/ProducerList"
import UpdateProducer from "./pages/user/UpdateProducer"
import ComplaintList from "./pages/ComplaintList"
import ContractManage from "./pages/ContractManage"
import ContractDetail from "./pages/ContractDetail"

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
          path={ROUTER.USER.HOMEPAGE}
          element={<HomePage2 />}
        />
        <Route
          path={ROUTER.USER.PROFILE}
          element={<UserProfile />}
        />
        <Route
          path={ROUTER.USER.PRODUCERLIST}
          element={<ProducerList />}
        />
        <Route
          path={ROUTER.USER.UPDATEPRODUCER}
          element={<UpdateProducer />}
        />
        <Route
          path={ROUTER.USER.COMPLAINTLIST}
          element={<ComplaintList />}
        />
        <Route
          path={ROUTER.USER.CONTRACTMANAGE}
          element={<ContractManage />}
        />
        <Route
          path={ROUTER.USER.CONTRACTDETAIL}
          element={<ContractDetail />}
        />
      </Routes>
    </div>
  )
}
const RouterCustom = () => {
  return RenderUserRouter();
}

export default RouterCustom
