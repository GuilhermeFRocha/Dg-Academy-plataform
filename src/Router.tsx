import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Register } from "./pages/Register";
import { Subscribe } from "./pages/Subscribe";
import { ErrorPage } from "./pages/Error";
import { Context } from "./Context/Context";
import { useContext } from "react";

export function Router() {
  const { validationRoute } = useContext(Context);

  const url_atual = window.location.pathname;
  console.log(url_atual);

  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/register" element={<Register />} />
      {validationRoute && (
        <>
          <Route path="/event" element={<Event />} />
          <Route path="/event/lesson/:slug" element={<Event />} />
        </>
      )}
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}
