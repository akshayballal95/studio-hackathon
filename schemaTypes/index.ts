import {shelterType} from './shelterTypes'
import {dentistType} from './dentistsType'
import {foodClothingType} from './foodClothingType'
import {legalType} from './legalType'
import {workType} from './workType'
import {whereToGoType} from './whereToGoType'
import {findFamilyType} from './findFamilyType'
import {helpdeskType} from './helpdeskType'
import {activitiesType} from './acitivitiesType'
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

import {
    firstAsylumRequestType,
    legalAdviceAfterRejectionType,
    supportWithVoluntaryReturnType,
} from './asylumType'

import {
    pregnancyCareType,
    birthControlAndMenstruationType,
    organizationsThatCanHelpType,
    abortionType,
  } from './womenType'

import {
    childrensCareType,
    childrensRightsType,
    financialHelpType,
} from './childrenType'

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
  whereToGoType,
  firstAsylumRequestType,
  legalAdviceAfterRejectionType,
  supportWithVoluntaryReturnType,
  pregnancyCareType,
  birthControlAndMenstruationType,
  organizationsThatCanHelpType,
  abortionType,
  childrensCareType,
  childrensRightsType,
  financialHelpType,
  findFamilyType,
  helpdeskType,
  activitiesType,
]

console.log(schemaTypes)