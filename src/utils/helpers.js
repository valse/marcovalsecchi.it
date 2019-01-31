export function postUrl(post) {
  const { slug } = post
  return `/${slug}`
}
export function formatReadingTime(minutes) {
  return `⏲️ ${minutes} min.`
}
