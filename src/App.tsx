import { X } from "lucide-react"
import { useEffect, useState } from "react"

interface IAgentData {
  uuid: string
  displayName: string
  displayIconSmall: string
  isPlayableCharacter: boolean
  description?: string
  background?: string
  fullPortraitV2?: string 
}

export default function App() {
  const [agents, setAgents] = useState<IAgentData[]>([])
  const [moreDetailsAgent, setMoreDetailsAgent] = useState<IAgentData[]>([])
  const [agentModal, setAgentModal] = useState(false)

  function openAgentModal(uuid: string) {
    const agentDetails = agents.filter((agent) => agent.uuid === uuid);
    setMoreDetailsAgent(agentDetails);
    setAgentModal(true);
  }

  function closeAgentModal() {
    setAgentModal(false)
  }
  
  useEffect(() => {
    const response = fetch("https://valorant-api.com/v1/agents?language=pt-BR")
    response
    .then(results => results.json())
    .then(data => {
      setAgents(data.data)
    })
  }, [])

  return (
    <div className="flex flex-wrap gap-20 items-center justify-center">
      {agents
        .filter(agent => agent.isPlayableCharacter)
        .map(agent => (
          <div key={agent.uuid} className="p-5 gap-6 flex flex-col items-center justify-center">
            <img
              className="w-20"
              src={agent.displayIconSmall}
              alt={agent.displayName}
            />
            <p className="text-2xl font-semibold">{agent.displayName}</p>
            <button onClick={() => openAgentModal(agent.uuid)}>
              Mais sobre
            </button>
          </div>
        ))
      }

      {agentModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
          {moreDetailsAgent.map((agentDetails) => (
            <div key={agentDetails.uuid} className="flex items-center flex-col justify-center gap-5">
              <div className="flex items-center justify-center">
              <img 
                className="w-96 z-10"
                src={agentDetails.fullPortraitV2} 
                alt={agentDetails.displayName} 
              />
              <img 
                className="w-80 absolute z-0 mt-10 opacity-10"
                src={agentDetails.background} 
                alt={agentDetails.displayName} 
              />
              </div>
              <div className="description flex items-center justify-center flex-col gap-5">
                <p className="text-4xl font-semibold text-zinc-300">{agentDetails.displayName}</p>
                <p className="text-md text-center w-[32rem] text-zinc-400">{agentDetails.description}</p>
              </div>
            </div>
          ))}
          <button onClick={closeAgentModal} className="absolute top-20 right-20 text-blue-400"><X/></button>
        </div>
      )}

    </div>
  )
}

