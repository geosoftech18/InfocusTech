interface Metadata {
    tags: any[];
    concepts: any[];
  }
  
  interface SysLink {
    type: string;
    linkType: string;
    id: string;
  }
  
  interface Sys {
    space: { sys: SysLink };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: { sys: SysLink };
    publishedVersion: number;
    revision: number;
    contentType: { sys: SysLink };
    locale: string;
  }
  
  interface Mark {
    type: string;
  }
  
  interface TextNode {
    data: {};
    marks: Mark[];
    value: string;
    nodeType: string;
  }
  
  interface Paragraph {
    data: {};
    content: TextNode[];
    nodeType: string;
  }
  
  interface DocumentNode {
    data: {};
    content: Paragraph[];
    nodeType: string;
  }
  
  interface ImageFile {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  }
  
  interface ImageFields {
    title: string;
    description: string;
    file: ImageFile;
  }
  
  interface Image {
    metadata: Metadata;
    sys: Sys;
    fields: ImageFields;
  }
  
  interface Fields {
    title: DocumentNode;
    content: DocumentNode;
    date: string;
    image: Image[];
  }
  
  interface EventItem {
    metadata: Metadata;
    sys: Sys;
    fields: Fields;
  }
  
  type Events = EventItem[];
  