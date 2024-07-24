// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  // Write your code here
  let checkUser = users.find((u) => u.email === user.email);
  if (checkUser)
    return { success: false, message: "User already registered!!" };

  users.push({ ...user, id: users.length + 1 });
  return { success: true, message: "User registered successfully!!" };
};

export const authenticateUser = (reqUser) => {
  // Write your code here
  let user = users.find(
    (u) => u.email === reqUser.email && u.password === reqUser.password
  );
  if (!user) return { success: false, message: "Invalid credentials!!" };
  return { success: true, message: "Login successful!!", user: user };
};
