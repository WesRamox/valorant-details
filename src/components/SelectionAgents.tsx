import { IAgentData } from "../interfaces/IAgentData"

interface SelectionAgentsProps {
  agents: IAgentData[]
  openAgentModal: (uuid: string) => void
}

const SelectionAgents = ({ agents, openAgentModal }: SelectionAgentsProps) => {
  return(
    <section className="agents z-50 flex flex-wrap w-[35rem] gap-1">
      {agents
        .filter(agent => agent.isPlayableCharacter)
          .map(agent => (
            <button 
              key={agent.uuid}
              className="bg-transparent p-0 border-none" 
              onClick={() => openAgentModal(agent.uuid)}
            >
              <div 
                className="flex flex-col items-center justify-center border-red border-[1px] hover:border-yellow-200"
              >
                <img
                  className="w-14"
                  src={agent.displayIconSmall}
                  alt={agent.displayName}
                />
              </div>
            </button>
      ))}
    </section>
  )
}

export default SelectionAgents