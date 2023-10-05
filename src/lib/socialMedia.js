const { replateTextSpacesWithPercent20 } = require('./textFormatter')

const createSocialMediaShareLink = (socialMedia, url, text="") => {
  switch (socialMedia) {
    case 'twitter':
      return encodeURI(
        `https://twitter.com/intent/tweet?url=${url}&text=${replateTextSpacesWithPercent20(
          text,
        )}`,
      )

    case 'linkedin':
      return encodeURI(
        `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      )

    case 'facebook':
      return encodeURI(`https://www.facebook.com/sharer.php?u=${url}`)

    case 'whatsapp':
      return encodeURI(`whatsapp://send?text=${url}`)

    case 'telegram':
      return encodeURI(`https://t.me/share/url?url=${url}`)

    case 'email':
      return encodeURI(`mailto:?subject=${url}`)

    default:
      return ''
  }
}

export { createSocialMediaShareLink }
