import { defineField, defineType } from "sanity";

// Create a base shelter type with shared fields
export const shelterType = defineType({
    name: 'shelter',
    title: 'Shelter',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Shelter Name',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'weekdayHours',
        title: 'Weekday Opening Hours',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            {name: 'day', type: 'string'},
            {name: 'hours', type: 'string'},
            {name: 'requiresAppointment', type: 'boolean'},
          ],
        }],
      }),
      defineField({
        name: 'weekendHours',
        title: 'Weekend Opening Hours',
        type: 'string',
      }),
      defineField({
        name: 'emergencyContact',
        title: 'Emergency Contact',
        type: 'object',
        fields: [
          {name: 'phone', type: 'string'},
          {name: 'hours', type: 'string'},
        ],
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
        name: 'phoneNumbers',
        title: 'Phone Numbers',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            {name: 'type', type: 'string'},
            {name: 'number', type: 'string'},
          ],
        }],
      }),
      defineField({
        name: 'address',
        title: 'Address',
        type: 'object',
        fields: [
          {name: 'street', type: 'string'},
          {name: 'postalCode', type: 'string'},
          {name: 'city', type: 'string'},
        ],
      }),
      defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
      }),
      defineField({
        name: 'shelterType',
        title: 'Shelter Type',
        type: 'string',
        options: {
          list: [
            {title: 'Day Shelter', value: 'day'},
            {title: 'Night Shelter', value: 'night'},
          ],
        },
        validation: (rule) => rule.required(),
      }),
    ],
  })
  