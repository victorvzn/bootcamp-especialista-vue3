export const requiredField = (value) => {
  if (value) return true

  return 'This field is required'
}