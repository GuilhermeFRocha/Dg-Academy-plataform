import { Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";
import { Register } from "../pages/Register";
import { Subscribe } from "../pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/register" element={<Register />} />
      {localStorage.getItem("key") !== null && (
        <>
          <Route path="/event" element={<Event />} />
          <Route path="/event/lesson/:slug" element={<Event />} />
        </>
      )}
    </Routes>
  );
}
