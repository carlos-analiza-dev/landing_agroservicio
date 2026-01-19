export const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "primary":
      return "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl text-white";
    case "secondary":
      return "bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm text-white";
    case "third":
      return "bg-white text-gray-900 hover:bg-gray-100 border-2 border-transparent hover:border-gray-300 shadow-md hover:shadow-lg";
    default:
      return "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl text-white";
  }
};
