export function capitalize(str: string): string {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
