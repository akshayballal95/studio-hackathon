import {shelterType} from './shelterTypes'
import {dentistType} from './dentistsType'
import {foodClothingType} from './foodClothingType'
import {legalType} from './legalType'
import {workType} from './workType'
import {
  healthAndWellbeingType,
  emergencyLinesType,
  doctorsType,
  medicationType,
  sexualHealthType,
  mentalWellbeingType,
  hygieneType,
} from './healthWellbeingType'

import {
    emergencyPoliceType,
    domesticViolenceType,
    criminalExploitationType,
    sexualExploitationType,
    labourExploitationType,
  } from './safetyProtectionType'

export const schemaTypes = [
  shelterType,
  dentistType,
  foodClothingType,
  legalType,
  healthAndWellbeingType,
  emergencyLinesType,
  doctorsType,
  medicationType,
  sexualHealthType,
  mentalWellbeingType,
  hygieneType,
  emergencyPoliceType,
  domesticViolenceType,
  criminalExploitationType,
  sexualExploitationType,
  labourExploitationType,
  workType,
]

console.log(schemaTypes)