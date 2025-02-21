import { format } from "date-fns/format";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  try {
    const date = format(dateString, "yyyy-MM-dd");

    return <time dateTime={dateString}>{date}</time>;
  } catch (_e) {
    return <span>{dateString.toString()}</span>;
  }
};

export default DateFormatter;
