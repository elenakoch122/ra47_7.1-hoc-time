import DateTime from "./DateTime";
import moment from "moment/moment";

export const DateTimePretty = withDateTimePretty(DateTime);

// hoc
function withDateTimePretty(Component) {
  return function (props) {
    const newProps = { date: moment(props.date, "YYYY-MM-DD HH:mm:ss").fromNow() };

    return <Component {...props} {...newProps} />;
  }
}
