import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="contenu">
    <div>
      See our beauty <Link to="/example">Example</Link>
    </div>
  </div>
);

export default Home;
