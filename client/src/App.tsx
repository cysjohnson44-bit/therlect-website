import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";

// 動態匯入重試邏輯 - 當部署新版本後舊 chunk 不存在時自動重新載入
function retryImport(importFn: () => Promise<any>, retries = 2): Promise<any> {
  return importFn().catch((error) => {
    if (retries > 0 && (error.message?.includes('dynamically imported module') || error.message?.includes('Failed to fetch'))) {
      // 清除模組快取並重試
      return new Promise((resolve) => setTimeout(resolve, 1000)).then(() => retryImport(importFn, retries - 1));
    }
    // 如果重試仍然失敗，強制重新載入頁面
    window.location.reload();
    throw error;
  });
}

// 代碼分割 - 延遲加載非首頁路由（帶重試機制）
const Technology = lazy(() => retryImport(() => import("./pages/Technology")));
const PassiveCooling = lazy(() => retryImport(() => import("./pages/PassiveCooling")));
const ActiveCooling = lazy(() => retryImport(() => import("./pages/ActiveCooling")));
const Solutions = lazy(() => retryImport(() => import("./pages/Solutions")));
const CFDAnalysis = lazy(() => retryImport(() => import("./pages/CFDAnalysis")));
const ThermalModuleDesign = lazy(() => retryImport(() => import("./pages/ThermalModuleDesign")));
const AluminumModuleDesign = lazy(() => retryImport(() => import("./pages/AluminumModuleDesign")));
const ThermalManagementSolution = lazy(() => retryImport(() => import("./pages/ThermalManagementSolution")));
const About = lazy(() => retryImport(() => import("./pages/About")));
const Contact = lazy(() => retryImport(() => import("./pages/Contact")));
const EmailMessaging = lazy(() => retryImport(() => import("./pages/EmailMessaging")));
const AdminEmailDashboard = lazy(() => retryImport(() => import("./pages/AdminEmailDashboard")));
const Messages = lazy(() => retryImport(() => import("./pages/Messages")));

// 加載中組件 - 優化以減少視覺閃動
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background transition-opacity duration-300 ease-in">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary will-change-transform"></div>
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
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="dark"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
