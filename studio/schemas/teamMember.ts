import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'logotype',
      title: 'Logotype',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: "githubLink",
      type: "string",
      title: "Github Link",
    }),
    defineField({
      name: "discordLink",
      type: "string",
      title: "Discord Link",
    }),
    defineField({
      name: "websiteLink",
      type: "string",
      title: "Website Link",
    }),
    defineField({
      name: "emailLink",
      type: "string",
      title: "Email Adress",
    }),
  ],
  preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'logotype',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
