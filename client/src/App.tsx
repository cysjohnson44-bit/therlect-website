import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// 代碼分割 - 延遲加載非首頁路由
const Technology = lazy(() => import("./pages/Technology"));
const PassiveCooling = lazy(() => import("./pages/PassiveCooling"));
const ActiveCooling = lazy(() => import("./pages/ActiveCooling"));
const Solutions = lazy(() => import("./pages/Solutions"));
const CFDAnalysis = lazy(() => import("./pages/CFDAnalysis"));
const ThermalModuleDesign = lazy(() => import("./pages/ThermalModuleDesign"));
const AluminumModuleDesign = lazy(() => import("./pages/AluminumModuleDesign"));
const ThermalManagementSolution = lazy(() => import("./pages/ThermalManagementSolution"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const EmailMessaging = lazy(() => import("./pages/EmailMessaging"));
const AdminEmailDashboard = lazy(() => import("./pages/AdminEmailDashboard"));
const Messages = lazy(() => import("./pages/Messages"));

// 加載中組件
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/technology"} component={Technology} />
      <Route path={"/technology/passive-cooling"} component={PassiveCooling} />
      <Route path={"/technology/active-cooling"} component={ActiveCooling} />
      <Route path={"/solutions"} component={Solutions} />
      <Route path={"/cfd-analysis"} component={CFDAnalysis} />
      <Route path={"/thermal-module-design"} component={ThermalModuleDesign} />
      <Route path={"/aluminum-module-design"} component={AluminumModuleDesign} />
      <Route path={"/thermal-management-solution"} component={ThermalManagementSolution} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/email-messaging"} component={EmailMessaging} />
      <Route path={"/admin/email"} component={AdminEmailDashboard} />
      <Route path={"/admin/messages"} component={Messages} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
