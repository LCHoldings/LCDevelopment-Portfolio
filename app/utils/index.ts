import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function urlFor(source: Image) {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.client)
  return builder.image(source)
}

export function redirectToEmail() {
  const subject = "Hello from the website!";
  const email = "mailto:llama@lcholdings.net?subject=" + encodeURIComponent(subject);
  return window.location.href = email;
}