import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.SANITY_IO_PROJECT_ID || "",
  dataset: process.env.SANITY_IO_DATASET,
  useCdn: true,
  apiVersion: "2021-05-01",
});

interface serializersCodeProps {
  node: {
    language: string;
    code: string;
  };
}

interface PortableTextPresenterProps {
  body: object;
}

const serializers = {
  types: {
    code: (props: serializersCodeProps) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default function PortableTextPresenter({
  body,
}: PortableTextPresenterProps): JSX.Element {
  return (
    <BlockContent
      blocks={body}
      {...client.config()}
      serializers={serializers}
    />
  );
}
