export default function numberToLetterString(n) {
  n = Number(n);
  const abs = Math.abs(n);

  return abs < 1000
    ? n.toLocaleString()
    : abs < 1000000
    ? (n / 1000)
        .toFixed(1)
        .toLocaleString()
        .replace(/\.0|,0/, '')
        .concat('k')
    : (n / 1000000)
        .toFixed(1)
        .toLocaleString()
        .replace(/\.0|,0/, '')
        .concat('m');
}
