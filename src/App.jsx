import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import your pages 

import "../src/custom.css"
import "../src/custom_responsive.css"
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/users" element={<Users />} /> 


        <Route path="/genders" element={<Genders />} /> 
        <Route path="/industries" element={<Industries />} />  
        <Route path="/networking-goals" element={<NetworkingGoals />} />  
        <Route path="/artistic-identities" element={<ArtisticIdentities />} />  
        <Route path="/primary-mediums" element={<PrimaryMediums />} />  
        <Route path="/skills-and-techniques" element={<SkillsAndTechniques />} />  
        <Route path="/tools-and-software" element={<ToolsAndSoftware />} />  
        <Route path="/collaboration-goals" element={<CollaborationGoals />} />  
        <Route path="/interests" element={<Interests />} />  
        <Route path="/work" element={<Work />} />  
        <Route path="/communication-styles" element={<CommunicationStyles />} />  
        <Route path="/love-languages" element={<LoveLanguages />} />  
        <Route path="/zodiac-signs" element={<ZodiacSigns />} />  
        <Route path="/ice-breaker-prompts" element={<IceBreakerPrompts />} />  
        <Route path="/posts" element={<Posts />} />  
         
         
      </Routes>
    </BrowserRouter>
  );
}
