import { useState } from "react"
import { IAgentData } from "../../interfaces/IAgentData"
import { IAbilities } from "../../interfaces/IAbilities"

interface AgentAbilitiesProps {
  agent: IAgentData
}

const AgentAbilities = ({agent}: AgentAbilitiesProps) => {
  const [ability, setAbility] = useState<IAbilities>()

  function showAbilityDetails(ability: IAbilities) {
    setAbility(ability)
  }

  return(
    <>
      <div className="flex gap-1 mt-10  items-center z-50">
        <img src={agent.role.displayIcon} className="min-w-16 w-16 bg-slate-200 bg-opacity-5 p-3" />
        {agent.abilities.map((ability) => (
          <button 
            key={ability.displayName}
            onClick={() => showAbilityDetails(ability)}
            className="bg-slate-200 bg-opacity-5 p-3"
          >
            <img src={ability.displayIcon} className="min-w-10 w-10" alt="" />
          </button>
        ))}
      </div>
      {ability && (
        <div className="mt-5">
          <h2 className="font-bold tracking-widest text-xl">{ability.displayName.toUpperCase()}</h2>
          <p className="font-normal text-lg">{ability.description}</p>
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