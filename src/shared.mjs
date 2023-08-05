function forceDigits(number) {
  const string = String(number);
  return string.length === 1 ? "0" + string : string;
}

/**
 * Returns a formatted timestamp in eastern time
 * @returns {string} timestamp
 */
export function getTimestamp(date) {
  const d = new Date(date || undefined);

  let s = d.getFullYear();
  s += "-";
  s += forceDigits(d.getMonth() + 1);
  s += "-";
  s += forceDigits(d.getDate());
  s += "T";
  s += forceDigits(d.getHours());
  s += ":";
  s += forceDigits(d.getMinutes());
  s += "-0400";

  return s;
}
