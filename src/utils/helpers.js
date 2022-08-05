export const convertToSlug = (Text) => {
  return (
    "/" +
    Text.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-")
  )
}

export const convertToClass = (Text) => {
  return (
      Text.toLowerCase()
          .replace(/[^\w ]+/g, "")
          .replace(/ +/g, "-")
  )
}

export const formatPhoneString = (Text) => {
  return Text.toLowerCase()
      .replace(/[\s.]+/g, "")
}