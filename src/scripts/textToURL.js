export default function textToURL(text) {
  const lowercase = text.toLowerCase();
  const trim = lowercase.trim();
  const replace = trim.replace(" ", "-");

  return replace;
}
