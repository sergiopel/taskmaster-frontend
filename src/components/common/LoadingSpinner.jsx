// src/components/common/LoadingSpinner.jsx
function LoadingSpinner() {
    return (
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  
  export default LoadingSpinner;