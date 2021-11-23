export const articleQuery = `
query {
  overdoseSportsArticleCollection {
    items {
      title
      slug
      articleImageCollection(limit: 3) {
        items {
          title
          description
          url
        }
      }
      typeOfSport
      articleBody {
        json
      }
      articleAuthor {
        name
        photo {
          title
          description
          url
        }
        bio
      }
    }
  }
  overdoseSportCategoryPreviewCollection {
    items {
      linkToArticle {
        name
        buttonText
      }
    }
  }
}
`;
