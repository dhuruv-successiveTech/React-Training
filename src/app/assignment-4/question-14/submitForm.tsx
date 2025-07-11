interface FormDataInterface {
  username: string;
  password: string;
  confPassword: string;
}

export const handleAction = async (formData: FormDataInterface) => {
  const { username, password, confPassword } = formData;

  if (!username || !password || !confPassword) {
    return "All fields are required";
  }
  if (
    password.length < 8 ||
    !["*", "&", "!", "@", "#"].some((c) => password.includes(c))
  ) {
    return "Password must be at least 8 characters and contain special characters.";
  }

  if (password !== confPassword) {
    return "Password do not match";
  }
  return "Form Submitted Successfully";
};
