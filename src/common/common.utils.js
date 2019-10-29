export const appendClasses = (baseClass, classesToAppend) => {
  if (classesToAppend) {
    return [baseClass, classesToAppend].join(' ');
  }
  return baseClass;
};
