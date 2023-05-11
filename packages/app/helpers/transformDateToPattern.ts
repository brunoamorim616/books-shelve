function transformToNYDatePattern(value: string) {
  try {
    value.replace('/^d{4}-d{2}-d{2}$/', '$1-')
  } catch (error) {
    throw new Error(error)
  }
}
