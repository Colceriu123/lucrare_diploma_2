export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  // Check if the token exists and is valid
  return token !== null;
};
