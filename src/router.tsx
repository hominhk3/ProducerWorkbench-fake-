import { Route, Routes, useLocation } from "react-router-dom"
import { ROUTER } from "./utils/router"
import HomePage from "./pages/homPage"
import SettingsPage from "./pages/Setting"
import FallingMusicNotes from "./pages/music"
import FilterProducer from "./pages/FilterProducer"

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
      </Routes>
    </div>
  )
}
const RouterCustom = () => {
  return RenderUserRouter();
}

export default RouterCustom
