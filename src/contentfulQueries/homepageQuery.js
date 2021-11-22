export const homepageQuery = `
query {
  overdoseSportsLandingPage(id: "6B0qS9981wKxB0BJI1nNFi") {
    title
    heroBanner {
      title
      description
      url
    }
    socialLinksCollection {
      items {
        title
        socialLink
      }
    }
    categoryReferenceCollection(limit: 5) {
      items {
        headline
        typeOfSport
        description
        sportCategoryImage {
          title
          description
          url
        }
        articlePreview {
          title
          articleImageCollection(limit: 1) {
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
          }
          slug
        }
        linkToArticle {
          name
          buttonText
        }
      }
    }
  }
}
`;