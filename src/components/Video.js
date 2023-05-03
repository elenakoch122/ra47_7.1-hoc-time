import { DateTimePretty } from "./DateTimePretty";


export default function Video({ url, date }) {
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={url}></iframe>
      <DateTimePretty date={date} />
    </div>
  )
}