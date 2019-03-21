export const required = value => {
  let inputvalue = value;
  if (value && typeof value === 'string') {
    inputvalue = value.trim();
  }
  return inputvalue || inputvalue === 0 || inputvalue === false
    ? undefined
    : 'required';
};
