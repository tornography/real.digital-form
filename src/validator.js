export default (value, regEx) => {
  return value === '' || !regEx || value.match(`^${regEx}$`)
}
