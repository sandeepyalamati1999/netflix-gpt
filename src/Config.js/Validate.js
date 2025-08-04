export const checkValidation = (email, password) => {
  const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailValid && !passwordValid) {
    return "Invalid email and password";
  } else if (!emailValid) {
    return "Invalid email";
  } else if (!passwordValid) {
    return "Invalid password";
  }
};
