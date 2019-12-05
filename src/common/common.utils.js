export const appendClasses = (baseClass, classesToAppend) => {
  if (classesToAppend) {
    return [baseClass, classesToAppend].join(' ');
  }
  return baseClass;
};

export const appendIntent = (baseClass, intentToAppend) => {
  if (intentToAppend) {
    return [baseClass, intentToAppend].join(' ');
  }
  return baseClass;
};

/**
 * getSecondsFromNowToTimestamp(): calculates the second between now and given
 * timestamp. It is mostly used due to react-intl package's desired date format
 * @param {*} timestamp: timestamp to calculate difference
 */
export const getSecondsFromNowToTimeStamp = (timestamp) => {
  const now = new Date(new Date(Date.now()).toISOString());
  const date = new Date(timestamp);
  return (date.getTime() - now.getTime()) / 1000;
};
