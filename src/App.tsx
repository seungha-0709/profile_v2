import React, {
  Suspense,
  lazy,
  useState,
  useRef,
  useMemo,
  useLayoutEffect,
} from "react";
import { rootStyle, container } from "../src/styles/styles.css";
import MobileMain from "./components/mobile/MobileMain";

const HeaderComponent = lazy(() => import("../src/components/Header"));
const MainComponent = lazy(() => import("../src/components/Main"));
const MobileComponent = lazy(() => import("./components/mobile/MobileMain"));

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (!componentRef.current) {
      return;
    }
    setViewWidth(componentRef.current.clientWidth);
  };

  const [viewWidth, setViewWidth] = useState(0);

  useLayoutEffect(() => {
    const element = componentRef.current;
    if (!element) {
      return;
    }
    handleResize();
    let resizeObserver: ResizeObserver | null = new ResizeObserver(() =>
      handleResize()
    );
    resizeObserver.observe(element);

    return () => {
      if (!resizeObserver) {
        return;
      }
      resizeObserver.disconnect();
      resizeObserver = null;
    };
  }, [componentRef.current]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentViewport = useMemo(() => {
    if (!viewWidth) {
      return;
    }
    if (viewWidth < 1000) {
      return "mobile";
    }
    return "desktop";
  }, [viewWidth]);

  return (
    <Suspense>
      <div ref={componentRef}>
        {currentViewport === "mobile" ? (
          <MobileMain />
        ) : (
          <div className={rootStyle}>
            <div className={container}>
              <HeaderComponent />
              <MainComponent />
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default App;
