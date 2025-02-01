import { defineField, defineType } from "sanity"; 

// Create a base health service type with shared fields
const baseHealthServiceFields = [
  defineField({
    name: 'name',
    title: 'Service Name',
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
    name: 'emergencyContact',
    title: 'Emergency Contact',
    type: 'object',
    fields: [
      { name: 'phone', title: 'Phone', type: 'string' },
      { name: 'hours', title: 'Hours', type: 'string' },
    ],
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
    ],
  }),
  defineField({
    name: 'logo',
    title: 'Logo',
    type: 'image',
  }),
];

// Create specific types for each category
export const healthAndWellbeingType = defineType({
  name: 'healthAndWellbeing',
  title: 'Healthcare Documentation',
  type: 'document',
  fields: baseHealthServiceFields,
});

export const emergencyLinesType = defineType({
  name: 'emergencyLines',
  title: 'Emergency Lines',
  type: 'document',
  fields: baseHealthServiceFields,
});

export const doctorsType = defineType({
  name: 'doctors',
  title: 'Doctors',
  type: 'document',
  fields: baseHealthServiceFields,
});

export const medicationType = defineType({
  name: 'medication',
  title: 'Medication',
  type: 'document',
  fields: baseHealthServiceFields,
});

export const sexualHealthType = defineType({
  name: 'sexualHealth',
  title: 'Sexual Health',
  type: 'document',
  fields: baseHealthServiceFields,
});

export const mentalWellbeingType = defineType({
  name: 'mentalWellbeing',
  title: 'Mental Wellbeing',
  type: 'document',
  fields: baseHealthServiceFields,
});

export const hygieneType = defineType({
  name: 'hygiene',
  title: 'Hygiene',
  type: 'document',
  fields: baseHealthServiceFields,
});
