import { GetStaticPropsContext } from "next";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Book } from "../../src/types/books/bookCard.types";
import {
  fetchAllBooksSlugs,
  fetchBookHighlightsFullData,
} from "../../src/lib/graphql/fetchers/books";
import { setBookItemState } from "../../src/store/books/slice";
import BookItemPageContainer from "../../src/containers/books/bookItemPage.container";

export default function BookHighlightsItem(props: Book): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const action = {
    id: slug as string,
    newState: props,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBookItemState(action));
  }, []);

  return (
    <>
      <Head>
        <title>{props.title} | Slimane Akalië</title>
        <meta property="og:title" content={props.title} />
        <meta property="og:image" content={props.cover3dImageURL} />
        <meta
          property="og:description"
          content={props.shortDescription || ""}
        />
      </Head>
      <BookItemPageContainer book={props} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
  const slug = context.params.slug as string;
  return {
    props: await fetchBookHighlightsFullData(slug),
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: await fetchAllBooksSlugs(),
  };
}
