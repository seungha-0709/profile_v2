import { Suspense, lazy } from "react";
import { rootStyle, container } from "../src/styles/styles.css";

const HeaderComponent = lazy(() => import("../src/components/Header"));
const MainComponent = lazy(() => import("../src/components/Main"));

function App() {
  return (
    <Suspense>
      <div className={rootStyle}>
        <div className={container}>
          <HeaderComponent />
          <MainComponent />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
