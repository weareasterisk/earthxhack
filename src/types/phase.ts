export default interface IPhase {
  title?: string,
  startTime?: string | Date,
  endTime?: string | Date,
  time?: string,
  tagline?: string,
  content?: Array<string>,
  image?: string,
  placeholder?: string,
  alt?: string
}