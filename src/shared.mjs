function forceDigits(number) {
  const string = String(number);
  return string.length === 1 ? "0" + string : string;
}

/**
 * Returns a formatted timestamp in eastern time
 * @returns {string} timestamp
 */
export function getTimestamp() {
  const date = new Date();

  let s = date.getFullYear();
  s += "-";
  s += forceDigits(date.getMonth() + 1);
  s += "-";
  s += forceDigits(date.getDate());
  s += "T";
  s += forceDigits(date.getHours());
  s += ":";
  s += forceDigits(date.getMinutes());
  s += "-0400";

  return s;
}
