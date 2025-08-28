export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute top-16 left-6 sm:top-24 sm:left-12 w-16 h-16 sm:w-28 sm:h-28 bg-blue-500 rounded-full opacity-20 float"></div>
      <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-16 w-0 h-0 
                     border-l-[30px] border-r-[30px] border-b-[60px] sm:border-l-[50px] sm:border-r-[50px] sm:border-b-[90px] 
                     border-l-transparent border-r-transparent border-b-teal-400 opacity-20 float"></div>

      {/* Main Content */}
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 flipInX">
          Aayush
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2 fade-up">
          Student | Tech Explorer | Problem Solver
        </p>
        <div className="h-[3px] bg-blue-500 mx-auto mt-4 rounded grow-line"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 text-blue-500 text-xl sm:text-2xl animate-bounce">⬇</div>
    </section>
  );
}
