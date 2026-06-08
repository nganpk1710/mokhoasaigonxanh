import LandingPage from "../imports/LandingPage/index";

export default function App() {
  return (
    <div className="bg-white overflow-x-auto" style={{ minWidth: "1440px" }}>
      <div style={{ zoom: 1440 / 1280 }}>
        <LandingPage />
      </div>
    </div>
  );
}
