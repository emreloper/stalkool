export default function mapResourcesToSrcset(resources) {
  return resources
    .map(({ config_width, src }) => `${src} ${config_width}w`)
    .join(', ');
}
