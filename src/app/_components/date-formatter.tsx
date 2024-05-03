import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  try {
    const date = parseISO(dateString);

    return <time dateTime={dateString}>{format(date, "yyyy-MM-dd")}</time>;
  } catch (e) {
    return <span>{dateString}</span>;
  }
};

export default DateFormatter;
