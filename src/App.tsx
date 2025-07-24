import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import { routes } from "./routes/routes";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        {routes.map(({ element: Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
