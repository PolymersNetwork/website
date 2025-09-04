import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Providers } from "@/components/providers/AppProviders";

// Simple loader component
const Loader = () => (
  <div className="flex h-screen items-center justify-center">
    <span className="animate-pulse text-muted-foreground">Loading...</span>
  </div>
);

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Tokenomics = lazy(() => import("./pages/Tokenomics"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <Providers>
    <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
      <ErrorBoundary fallback={<div className="p-8 text-center text-red-500">Something went wrong.</div>}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </Providers>
);

export default App;
