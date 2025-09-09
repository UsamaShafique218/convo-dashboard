import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import your pages
import "../src/custom.css";
import "../src/custom_responsive.css";
import Home from "./pages/dashboard/Home";
import Users from "./pages/dashboard/Users";
import Genders from "./pages/dashboard/references_data/Genders";
import Industries from "./pages/dashboard/references_data/Industries";
import NetworkingGoals from "./pages/dashboard/references_data/NetworkingGoals";
import ArtisticIdentities from "./pages/dashboard/references_data/ArtisticIdentities";
import PrimaryMediums from "./pages/dashboard/references_data/PrimaryMediums";
import SkillsAndTechniques from "./pages/dashboard/references_data/SkillsAndTechniques";
import ToolsAndSoftware from "./pages/dashboard/references_data/ToolsAndSoftware";
import CollaborationGoals from "./pages/dashboard/references_data/CollaborationGoals";
import Interests from "./pages/dashboard/references_data/Interests";
import Work from "./pages/dashboard/references_data/Work";
import CommunicationStyles from "./pages/dashboard/references_data/CommunicationStyles";
import LoveLanguages from "./pages/dashboard/references_data/LoveLanguages";
import ZodiacSigns from "./pages/dashboard/references_data/ZodiacSigns";
import IceBreakerPrompts from "./pages/dashboard/references_data/IceBreakerPrompts";
import Posts from "./pages/dashboard/Posts";

import SignIn from "./pages/auth/SignIn";
import Auth from "./pages/auth/Auth"; 

 
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?.token) {
    return <Navigate to="/auth/sign-in" replace />;
  }
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/genders"
          element={
            <ProtectedRoute>
              <Genders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/industries"
          element={
            <ProtectedRoute>
              <Industries />
            </ProtectedRoute>
          }
        />
        <Route
          path="/networking-goals"
          element={
            <ProtectedRoute>
              <NetworkingGoals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artistic-identities"
          element={
            <ProtectedRoute>
              <ArtisticIdentities />
            </ProtectedRoute>
          }
        />
        <Route
          path="/primary-mediums"
          element={
            <ProtectedRoute>
              <PrimaryMediums />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skills-and-techniques"
          element={
            <ProtectedRoute>
              <SkillsAndTechniques />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tools-and-software"
          element={
            <ProtectedRoute>
              <ToolsAndSoftware />
            </ProtectedRoute>
          }
        />
        <Route
          path="/collaboration-goals"
          element={
            <ProtectedRoute>
              <CollaborationGoals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interests"
          element={
            <ProtectedRoute>
              <Interests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/work"
          element={
            <ProtectedRoute>
              <Work />
            </ProtectedRoute>
          }
        />
        <Route
          path="/communication-styles"
          element={
            <ProtectedRoute>
              <CommunicationStyles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/love-languages"
          element={
            <ProtectedRoute>
              <LoveLanguages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/zodiac-signs"
          element={
            <ProtectedRoute>
              <ZodiacSigns />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ice-breaker-prompts"
          element={
            <ProtectedRoute>
              <IceBreakerPrompts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
 
        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<SignIn />} />
        </Route>
 
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
