import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Register } from "./pages/Register";
import { Subscribe } from "./pages/Subscribe";
import { ErrorPage } from "./pages/Error";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/register" element={<Register />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}
