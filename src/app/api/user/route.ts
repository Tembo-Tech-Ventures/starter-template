const prisma = require("@prisma/client");

async function generateUsernameIfNeeded(email: string) {
  // Check if a user with the given email exists
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!existingUser) {
    // If the user doesn't exist, generate a username
    const username = generateUsername(email);
    // Create a new user with the generated username
    await prisma.user.create({
      data: {
        email: email,
        username: username,
      },
    });
    return username;
  } else {
    // If the user exists, return their existing username
    return existingUser.username;
  }
}

function generateUsername(email: string) {
  // Implement your logic to generate a username from the email
  // This is a simple example that extracts the part before '@'
  return email.split("@")[0];
}
