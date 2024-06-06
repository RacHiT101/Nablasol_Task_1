// PaginationDots.js

const PaginationDots = ({ totalSteps, currentStep }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === currentStep
              ? 'bg-gray-600' // Active dot color
              : 'bg-gray-300' // Inactive dot color
          }`}
        ></span>
      ))}
    </div>
  );
};

export default PaginationDots;
