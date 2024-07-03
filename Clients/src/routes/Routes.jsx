import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../Pages/Page404/NotFound";
import Home from "../Pages/Home/Home";
import SessionDetailsPage from "../Pages/SingleDetailsPage/SessionDetailsPage";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Dashboard from "../Components/Dashboard/Pages/Dashboard";
import CreateStudySession from "../Components/Dashboard/Pages/Tutor/CreateStudySession";
import ViewAllSession from "../Components/Dashboard/Pages/Tutor/ViewAllSession";
import UploadMaterials from "../Components/Dashboard/Pages/Tutor/UploadMaterials";
import ViewAllMaterial from "../Components/Dashboard/Pages/Tutor/ViewAllMaterial";
import ViewAllUser from "../Components/Dashboard/Pages/Admin/ViewAllUser";
import ViewAllMaterials from "../Components/Dashboard/Pages/Admin/ViewAllMaterials";
import ViewAllStudySession from "../Components/Dashboard/Pages/Admin/ViewAllStudySession";
import CreateNote from "../Components/Dashboard/Pages/Students/CreateNote";
import ManageNotes from "../Components/Dashboard/Pages/Students/ManageNotes";
import StudyMaterial from "../Components/Dashboard/Pages/Students/StudyMaterial";
import ViewBooked from "../Components/Dashboard/Pages/Students/ViewBooked";
import TutorRoute from "./TutorRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import AllSessionPage from "../Pages/AllSessionPage/AllSessionPage";
import ViewSingleSession from "../Components/Dashboard/Pages/Students/ViewSingleSession";
import Statistics from "../Components/Dashboard/Pages/Common/Statistics";
import UpdateSession from "../Components/Dashboard/Pages/Admin/UpdateSession";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
    errorElement: <NotFound> </NotFound>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/all-Session",
        element: <AllSessionPage/>
      },
      {
        path: "/session/:id",
        element: (
          <ProtectedRoute>
            <SessionDetailsPage />
          </ProtectedRoute>
        ),
        
      },
    ],
  },
  {
    path: "/login",
    element: <Login> </Login>,
  },
  {
    path: "/signup",
    element: <SignUp> </SignUp>,
  },
  {
    path: "/dashboard",
    element: <Dashboard> </Dashboard>,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Statistics />
          </ProtectedRoute>
        ),
      },

      {
        path: "add-session",
        element: (
          <ProtectedRoute>
            <TutorRoute>
              <CreateStudySession> </CreateStudySession>
            </TutorRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "view-session",
        element: (
          <ProtectedRoute>
            <TutorRoute>
              <ViewAllSession> </ViewAllSession>
            </TutorRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "view-materials",
        element: (
          <ProtectedRoute>
            <TutorRoute>
              <ViewAllMaterial> </ViewAllMaterial>,
            </TutorRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "upload-materials/:id",
        element: (
          <ProtectedRoute>
            <TutorRoute>
              <UploadMaterials> </UploadMaterials>
            </TutorRoute>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://study-sync-nine.vercel.app/api/session/${params.id}`),
      },

      /* admin route */
      {
        path: "all-users",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <ViewAllUser> </ViewAllUser>,
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "all-materials",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <ViewAllMaterials> </ViewAllMaterials>
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "all-sessions",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <ViewAllStudySession> </ViewAllStudySession>
            </AdminRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "update-session/:id",
        element: (
          <ProtectedRoute>
            <AdminRoute>
              <UpdateSession> </UpdateSession>
            </AdminRoute>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
        fetch(`https://study-sync-nine.vercel.app/api/session/${params.id}`)
      },
      /* student route */
      {
        path: "add-notes",
        element: (
          <ProtectedRoute>
            <StudentRoute>
              <CreateNote> </CreateNote>
            </StudentRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "view-notes",
        element: (
          <ProtectedRoute>
            <StudentRoute>
              <ManageNotes> </ManageNotes>
            </StudentRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "view-materials",
        element: (
          <ProtectedRoute>
            <StudentRoute>
              <StudyMaterial> </StudyMaterial>
            </StudentRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "booked-session",
        element: (
          <ProtectedRoute>
            <StudentRoute>
              <ViewBooked> </ViewBooked>
            </StudentRoute>
          </ProtectedRoute>
        ),
        
      },
      {
        path: "view-session/:id",
        element: (
          <ProtectedRoute>
            <StudentRoute>
              <ViewSingleSession> </ViewSingleSession>
            </StudentRoute>
          </ProtectedRoute>
        ),
        
      },
    ],
  },
]);

export default Routes;
