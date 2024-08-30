import type { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Post {
  _id: string;
  _type: "post";
  _createdAt: string;
  title: string;
  author: string;
  type: string;
  slug: Slug;
  otherbutton: boolean;
  otherbuttontext?: string;
  otherbuttonlink?: string;
  excerpt: string;
  mainImage: ImageAsset;
  body: PortableTextBlock[];
}
