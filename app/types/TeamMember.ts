import type { PortableTextBlock, ImageAsset } from "@sanity/types";

export interface TeamMember {
    _id: string;
    _type: "post";
    _createdAt: string;
    name?: string;
    jobTitle?: string;
    websiteLink?: string;
    discordLink?: string;
    githubLink?: string;
    emailLink?: string;
    logotype?: ImageAsset;
    description: PortableTextBlock[];
}
