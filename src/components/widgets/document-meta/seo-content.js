import { Pages } from 'routes';


export const pageContent = {
  [Pages.Main]: {
    title: "Main page of website",
    description: "answer and questions",
    meta: {
      name: {
        keywords: "Answer, question",
        robots: "follow, index"
      }
    }
  },

  [Pages.About]: {
    title: "About",
    description: "About..",
    meta: {
      name: {
        keywords: "About, info",
        robots: "follow, noindex"
      }
    }
  }

}