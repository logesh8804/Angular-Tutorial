import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoursesPage from '../pages/CoursesPage'
import CourseOverviewPage from '../pages/CourseOverviewPage'
import LessonPage from '../pages/LessonPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes({ publicLayout: PublicLayout, mainLayout: MainLayout }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        }
      />

      <Route
        path="/courses"
        element={
          <MainLayout>
            <CoursesPage />
          </MainLayout>
        }
      />

      <Route
        path="/courses/:courseSlug"
        element={
          <MainLayout>
            <CourseOverviewPage />
          </MainLayout>
        }
      />

      <Route
        path="/courses/:courseSlug/:moduleSlug/:topicSlug"
        element={
          <MainLayout>
            <LessonPage />
          </MainLayout>
        }
      />

      <Route
        path="*"
        element={
          <PublicLayout>
            <NotFoundPage />
          </PublicLayout>
        }
      />
    </Routes>
  )
}

export default AppRoutes