import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Root from "./layouts/Root.jsx";
import Welcome from "./pages/Home/Welcome.jsx";
import About from "./pages/About/About.jsx";
import UserPage, { userLoader } from "./pages/UniActivity/UserPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AdminArea from "./pages/Admin/AdminArea.jsx";

import DepartmentPage, { departmentLoader } from "./pages/UniActivity/DepartmentPage.jsx";
import ProfessorPage, { professorLoader } from "./pages/UniActivity/ProfessorPage.jsx";
import CoursesPage, { coursesLoader } from "./pages/UniActivity/CoursesPage.jsx";
// import UniListPage, { uniListLoader } from "./pages/UnUniListPage.jsx";
// import UniDetailsPage, { uniDetailsLoader } from "./pages/UniList/UniDetailsPage.jsx";
import ArtWorksPage, { artWorksLoader } from "./pages/Artworks/ArtWorksPage.jsx";
import ArtDetailsPage, { artDetailsLoader } from "./pages/Artworks/ArtDetailsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Welcome />} />
      <Route path="about" element={<About />} />

      <Route path="departments/:deptId" element={<DepartmentPage />} loader={departmentLoader} />
      <Route path="professors/:profId" element={<ProfessorPage />} loader={professorLoader}>
        <Route path="courses" element={<CoursesPage />} loader={coursesLoader} />
      </Route>
      {/* <Route path="universities" element={<UniListPage />} loader={uniListLoader} errorElement={<ErrorPage />}>
        <Route path=":name" element={<UniDetailsPage />} loader={uniDetailsLoader} errorElement={<ErrorPage />}/>
      </Route> */}
      <Route path="artworks" element={<ArtWorksPage />} loader={artWorksLoader} />
<Route path="artworks/:artworkId" element={<ArtDetailsPage />} loader={artDetailsLoader} />


      <Route path="users/:userId" element={<UserPage />} loader={userLoader} errorElement={<ErrorPage />} />
      <Route path="admin" element={<AdminArea />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
