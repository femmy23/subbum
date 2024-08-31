import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AirtimeToCash from "./routes/AirtimeToCash";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import Support from "./routes/Support";
import TransactionHistory from "./routes/TransactionHistory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/TransactionHistory" element={<TransactionHistory />} />
        <Route path="/airtimeToCash" element={<AirtimeToCash />} />
      </Routes>
    </BrowserRouter>
  );
}
