export const formatQualities = (qualities: string[]) => {
  if (qualities.length > 5) {
    throw new Error("Too many qualities");
  }
  return qualities.join(", ");
};
