export const isTokenExpired = () => {
  const expireDate = new Date(localStorage.getItem('expire_date'));
  const currentDate = new Date();
  return expireDate.getTime() < currentDate.getTime();
};
