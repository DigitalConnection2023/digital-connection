import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import ROUTE from "./routes.config";

function Root() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0e1a25",
      }}
    >
      <Header
        logo={<span>Logo</span>}
        navItems={[
          {
            title: "Products",
            path: ROUTE.products(),
          },
          {
            title: "Partners",
            path: ROUTE.partners(),
          },
          {
            title: "Recruitment",
            path: ROUTE.recruitment(),
          },
          {
            title: "Contact",
            path: ROUTE.contact(),
          },
        ]}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
