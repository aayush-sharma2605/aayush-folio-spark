import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hero from "./components/Hero";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen overflow-hidden">
          {/* Background floating circles */}
          <div className="background-shape circle circle1"></div>
          <div className="background-shape circle circle2"></div>
          <div className="background-shape circle circle3"></div>
          <div className="background-shape circle circle4"></div>
          <div className="background-shape circle circle5"></div>

          <div className="background-shape square square1"></div>
          <div className="background-shape square square2"></div>
          <div className="background-shape square square3"></div>
          <div className="background-shape square square4"></div>

          <div className="background-shape triangle triangle1"></div>

          {/* Toast + UI providers */}
          <Toaster />
          <Sonner />

          {/* Routes */}
          <BrowserRouter>
            <Routes>
              {/* Landing page shows Hero */}
              <Route path="/" element={<Hero />} />

              {/* Other pages */}
              <Route path="/index" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
