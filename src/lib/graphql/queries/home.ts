import { gql } from "@apollo/client";

export const GET_LATEST_N_ARTICLES = gql`
  query getLatestPosts($n: Int) {
    allPost(sort: [{ _createdAt: DESC }], limit: $n, offset: 0) {
      title
      excerpt
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      readingTimeInMinute
      _createdAt
      author {
        name
        contactLink
      }
    }
  }
`;