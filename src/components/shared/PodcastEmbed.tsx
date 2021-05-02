import { PodcastEmbedProps } from "../../types/shared/podcastEmbed.types";
import { usePodcastEmbedStyles } from "../../styles/shared/podcastEmbed.styles";
import clsx from "clsx";

export default function PodcastEmbed({
  podcastEmbedUrl,
  className,
}: PodcastEmbedProps): JSX.Element {
  const classes = usePodcastEmbedStyles();
  return (
    <iframe
      src={podcastEmbedUrl}
      height="161px"
      className={clsx(classes.root, className)}
      frameBorder="0"
      scrolling="no"
    />
  );
}
