
export const themeValidation = ( mode: string ): string => {
  const themeValidation = mode === 'light' ? 'global__font-light' : 'global__font-dark';
  return themeValidation;
}
