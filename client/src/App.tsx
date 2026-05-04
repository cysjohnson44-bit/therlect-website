import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Solutions from "./pages/Solutions";
import CFDAnalysis from "./pages/CFDAnalysis";
import ThermalModuleDesign from "./pages/ThermalModuleDesign";
import AluminumModuleDesign from "./pages/AluminumModuleDesign";
import ThermalManagementSolution from "./pages/ThermalManagementSolution";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmailMessaging from "./pages/EmailMessaging";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/technology"} component={Technology} />
      <Route path={"/solutions"} component={Solutions} />
      <Route path={"/cfd-analysis"} component={CFDAnalysis} />
      <Route path={"/thermal-module-design"} component={ThermalModuleDesign} />
      <Route path={"/aluminum-module-design"} component={AluminumModuleDesign} />
      <Route path={"/thermal-management-solution"} component={ThermalManagementSolution} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/email-messaging"} component={EmailMessaging} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
