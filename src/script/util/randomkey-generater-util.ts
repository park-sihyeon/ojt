export const generateRandomKey = (length: number = 10): string => {
  const characters = '0123456789';
  return Array(length)
    .fill('')
    .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
    .join('');
};
