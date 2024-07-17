import { IAbilities } from "./IAbilities"
import { IRole } from "./IRole"

export interface IAgentData {
  uuid: string
  displayName: string
  displayIconSmall: string
  isPlayableCharacter: boolean
  description?: string
  background?: string
  fullPortraitV2?: string
  abilities: IAbilities[] 
  role: IRole
}