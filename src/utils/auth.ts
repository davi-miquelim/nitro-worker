export const isPasswordStrong = (password: string) => {
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  if (!password.match(/[a-z]/)) {
    throw new Error("Password must contain at least one lowercase letter");
  }

  if (!password.match(/[A-Z]/)) {
    throw new Error("Password must contain at least one uppercase letter");
  }

  if (!password.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number");
  }

  if (!password.match(/[^a-zA-Z0-9]/)) {
    throw new Error("Password must contain at least one special character");
  }

  return true;
};

export const hashPassword = async (password: string) => {
  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(password)
  );

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
};
