import { defineField, defineType } from "sanity"; 

// Create a base helpdesk type with shared fields
export const helpdeskType = defineType({ 
    name: 'helpdesk',
    title: 'Helpdesk & Social Support',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Helpdesk Information Name',
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
        name: 'operatingHours',
        title: 'Operating Hours',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', description: 'Specify the time range (e.g., Monday-Friday, Weekends, Holidays)' },
            { name: 'hours', title: 'Hours', type: 'string' },
            { name: 'requiresAppointment', title: 'Requires Appointment', type: 'boolean' },
          ],
        }],
      }),
      defineField({
        name: 'website',
        title: 'Website',
        type: 'url',
      }),
      defineField({
        name: 'needToKnow',
        title: 'What do you need to know?',
        type: 'markdown',
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'phoneNumbers',
        title: 'Phone Numbers',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'type', title: 'Type', type: 'string', description: 'E.g., Reception, Emergency' },
            { name: 'number', title: 'Number', type: 'string' },
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
          { name: 'googleMapsLink', type: 'url' },
        ],
      }),
      defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
      }),
    ],
});
