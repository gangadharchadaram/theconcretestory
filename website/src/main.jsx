import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import InitialLoader from "./components/InitialLoader";
import "./index.css";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <InitialLoader /> : <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
