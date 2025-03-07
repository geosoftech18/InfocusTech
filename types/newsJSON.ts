interface BEResponseFormat {
    success: boolean;
    error?: string;
    data?: data
  }

  interface data {
    sys: {
      type: string;
    };
    total: number;
    skip: number;
    limit: number;
    items: NewsItem[];
    includes: {
      Asset: Asset[];
    };
  };
  
  interface NewsItem {
    metadata: {
      tags: string[];
      concepts: string[];
    };
    sys: {
      space: Link;
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: Link;
      publishedVersion: number;
      revision: number;
      contentType: Link;
      locale: string;
    };
    fields: {
      title: RichText;
      content: RichText;
      date: string;
      image: Link;
    };
  }
  
  interface Asset {
    metadata: {
      tags: string[];
      concepts: string[];
    };
    sys: {
      space: Link;
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: Link;
      publishedVersion: number;
      revision: number;
      locale: string;
    };
    fields: {
      title: string;
      description: string;
      file: {
        url: string;
        details: {
          size: number;
          image?: {
            width: number;
            height: number;
          };
        };
        fileName: string;
        contentType: string;
      };
    };
  }
  
  interface Link {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  }
  
  interface RichText {
    data: {};
    content: RichTextNode[];
    nodeType: string;
  }
  
  interface RichTextNode {
    data: {};
    content: TextNode[];
    nodeType: string;
  }
  
  interface TextNode {
    data: {};
    marks: Mark[];
    value: string;
    nodeType: string;
  }