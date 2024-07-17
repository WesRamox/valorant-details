import { useState } from "react"
import { IAgentData } from "../../interfaces/IAgentData"
import { IAbilities } from "../../interfaces/IAbilities"

interface AgentAbilitiesProps {
  agent: IAgentData
}

const AgentAbilities = ({agent}: AgentAbilitiesProps) => {
  const [selectedAbility, setSelectedAbility] = useState<IAbilities>()

  function showAbilityDetails(ability: IAbilities) {
    setSelectedAbility(ability)
  }

  return(
    <>
      <div className="flex gap-1 mt-10  items-center z-50">
        <img src={agent.role.displayIcon} className="min-w-16 w-16 bg-yellow-200 bg-opacity-5 opacity-50 p-3" />
        {agent.abilities.map((ability) => (
          ability.displayIcon && (
            <button 
            key={ability.displayName}
            onClick={() => showAbilityDetails(ability)}
            disabled={selectedAbility?.displayName === ability.displayName}
            className="bg-slate-200 bg-opacity-5 p-3 disabled:bg-yellow-100 disabled:bg-opacity-20"
          >
            <img src={ability.displayIcon} className="min-w-10 w-10" alt="" />
          </button>
          )
        ))}
      </div>
      {selectedAbility && (
        <div className="mt-5">
          <h2 className="font-bold tracking-widest text-xl">{selectedAbility.displayName.toUpperCase()}</h2>
          <p className="font-normal text-lg">{selectedAbility.description}</p>
        </div>
      )}
      <div className="mt-10">
        <p className="tracking-widest font-semibold text-1xl">
          {agent.role.displayName.toLocaleUpperCase()} 
        </p>
        <p className="font-bold text-lg tracking-wider text-stone-400">{agent.role.description}</p>
      </div>
    </>
  )
}

export default AgentAbilities