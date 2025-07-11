interface FormDataInterface {
  username: string;
  password: string;
  confirm: string;
}
export async function validatePassword(formData: FormDataInterface) {
  const { username, password, confirm } = formData;
  if (!password || !confirm) {
    console.log("Missing password fields");
    return { success: false, message: "Missing fields" };
  }

  if (password === confirm) {
    console.log(`${username} logged in successfully`);
    return { success: true, message: "Success" };
  } else {
    console.log("Passwords do not match");
    return { success: false, message: "Passwords do not match" };
  }
}
