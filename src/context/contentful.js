import * as contentful from "contentful"

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "xcaw2qh3fe3v",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "ofAVIT5UsY433DlPY7hI-xSWelL8FNFKBG7G2vwqOVQ"
});

