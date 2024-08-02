import type { PortableTextBlock, ImageAsset } from "@sanity/types";

export interface TeamMember {
    _id: string;
    _type: "post";
    _createdAt: string;
    name?: string;
    jobTitle?: string;
    logotype?: ImageAsset;
    description: PortableTextBlock[];
}
