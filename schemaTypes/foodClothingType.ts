import { defineField, defineType } from "sanity"; 

export const foodClothingType = defineType({ 
    name: 'foodAndClothing',
    title: 'Food and Clothing',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Organization Name',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'markdown',
        description: 'Provide details about the meal, special notes, or additional information.',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'openingHours',
        title: 'Opening Hours',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'days', title: 'Days', type: 'string', description: 'Specify days (e.g., Saturdays, Weekends).' },
            { name: 'hours', title: 'Hours', type: 'string', description: 'Specify time range (e.g., 10:30-15:00).' },
          ],
        }],
      }),
      defineField({
        name: 'address',
        title: 'Address',
        type: 'object',
        fields: [
          { name: 'street', title: 'Street', type: 'string' },
          { name: 'postalCode', title: 'Postal Code', type: 'string' },
          { name: 'city', title: 'City', type: 'string' },
          {name: 'googleMapsLink', type: 'url'},
        ],
      }),
      defineField({
        name: 'phoneNumbers',
        title: 'Phone Numbers',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'type', title: 'Type', type: 'string', description: 'E.g., General, Emergency' },
            { name: 'number', title: 'Number', type: 'string' },
          ],
        }],
      }),
      defineField({
        name: 'website',
        title: 'Website',
        type: 'url',
        description: 'Link to the service’s website or additional information.',
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'emergencyContact',
        title: 'Emergency Contact',
        type: 'object',
        fields: [
          { name: 'phone', title: 'Phone', type: 'string' },
          { name: 'hours', title: 'Available Hours', type: 'string' },
        ],
      }),
      defineField({
        name: 'needToKnow',
        title: 'What You Need to Know',
        type: 'markdown',
        description: 'Provide important details, like documents required or rules to follow.',
      }),
      defineField({
        name: 'foodOrClothing',
        title: 'Food or Clothing',
        type: 'string',
        options: {
          list: [
            {title: 'Food', value: 'food'},
            {title: 'Clothing', value: 'clothing'},
          ],
        },
        validation: (rule) => rule.required(),
      }),
    ],
});
