const InitialLoader = () => {
  return (
    <div className="fixed inset-0 bg-[#c89b3c] z-[9999] flex items-center justify-center">
      <div className="flex items-center gap-4">
        {/* <img src="/logo_tcs.png" alt="Logo" className="h-40" /> */}
        <h1>THE CONCRETE STORY</h1>
        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default InitialLoader;
