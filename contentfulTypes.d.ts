import { Entry, Asset } from 'contentful'
export const Event = 'event'
export interface Event {
  //Event
  /*  */
  readonly eventcontent?: { content: any, data: any, nodeType: string }
  readonly eventdate?: string
  readonly eventimages?: ReadonlyArray<Asset>
  readonly newstitle?: { content: any, data: any, nodeType: string }
}

export const News = 'news'
export interface News {
  //News
  /*  */
  readonly content?: { content: any, data: any, nodeType: string }
  readonly date?: string
  readonly image?: Asset
  readonly title?: { content: any, data: any, nodeType: string }
}

