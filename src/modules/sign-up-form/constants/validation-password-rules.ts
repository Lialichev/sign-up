export const passwordRules = [
  { id: "length", label: "Between 8 and 64 characters", test: (p: string) => p.length >= 8 && p.length <= 64 },
  { id: "uppercase", label: "At least one uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { id: "number", label: "At least one digit", test: (p: string) => /\d/.test(p) },
  { id: "spaces", label: "No spaces allowed", test: (p: string) => !/\s/.test(p) },
];