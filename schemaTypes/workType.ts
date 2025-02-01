import { defineField, defineType } from "sanity"; 

export const workType = defineType({ 
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Labour Rights Information',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'markdown',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'needToKnow',
        title: 'What do you need to know?',
        type: 'markdown',
      }),
      defineField({
        name: 'website',
        title: 'Website',
        type: 'url',
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'flyers',
        title: 'Flyers',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { 
              name: 'language', 
              title: 'Flyer Language', 
              type: 'string', 
              description: 'Specify the language of the flyer (e.g., English, Spanish).' 
            },
            { 
              name: 'link', 
              title: 'Flyer PDF Link', 
              type: 'url',
              description: 'Link to the PDF version of the flyer.',
            },
          ],
        }],
      }),
      defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
      }),
    ],
});
