import MarqueeText from "react-marquee-text";

export interface TrackDisplayProps {
  title: string;
}

export function TrackDisplay({ title }: TrackDisplayProps): React.ReactElement {
  return (
    <MarqueeText direction="right" textSpacing="3rem" pauseOnHover key={title}>
      {title}
    </MarqueeText>
  );
}

export default TrackDisplay;
