import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="relative min-h-screen overflow-hidden">
          {/* Floating Shapes */}
          <div className="background-shape circle shape1"></div>
          <div className="background-shape circle shape2"></div>
          <div className="background-shape square shape3"></div>
          <div className="background-shape square shape4"></div>
          <div className="background-shape triangle shape5"></div>

          {/* Actual Content */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>

        {/* Toast + UI providers */}
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
