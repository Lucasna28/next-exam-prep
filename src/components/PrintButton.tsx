"use client";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed bottom-6 right-6 
                bg-slate-800 dark:bg-slate-200 
                text-slate-200 dark:text-slate-800 
                hover:bg-slate-700 dark:hover:bg-slate-300
                transition-colors
                rounded-full p-4 shadow-lg
                print:hidden"
    >
      <span role="img" aria-label="print" className="text-xl">
        🖨️
      </span>
    </button>
  );
};

export default PrintButton;
