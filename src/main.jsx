import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Root from "./Root.jsx";
import Welcome from "./pages/Welcome.jsx";
import About from "./pages/About.jsx";
import UserPage, { userLoader } from "./pages/UserPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AdminArea from "./pages/AdminArea.jsx";

import DepartmentPage, { departmentLoader } from "./pages/DepartmentPage.jsx";
import ProfessorPage, { professorLoader } from "./pages/ProfessorPage.jsx";
import CoursesPage, { coursesLoader } from "./pages/CoursesPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Welcome />} />
      <Route path="about" element={<About />} />

      <Route path="departments/:deptId" element={<DepartmentPage />} loader={departmentLoader} />
      <Route path="professors/:profId" element={<ProfessorPage />} loader={professorLoader}>
        <Route path="courses" element={<CoursesPage />} loader={coursesLoader} />
      </Route>

      <Route path="users/:userId" element={<UserPage />} loader={userLoader} errorElement={<ErrorPage />} />
      <Route path="admin" element={<AdminArea />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
