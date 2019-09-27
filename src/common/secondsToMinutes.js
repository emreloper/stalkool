export default function secondsToMInutes(seconds) {
  return Math.floor(seconds / 60) + ':' + Math.ceil(seconds % 60);
}
