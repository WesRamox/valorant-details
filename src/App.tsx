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
  
  useEffect(() => {
    const response = fetch("https://valorant-api.com/v1/agents?language=pt-BR")
    response
    .then(results => results.json())
    .then(data => {
      setAgents(data.data)
    })
  }, [])

  return (
    <section className="flex flex-col bg-[url('./assets/bg.png')] bg-no-repeat bg-cover w-screen min-h-screen flex-wrap bg-center items-center gap-8 justify-end pb-10">
      {agentModal && (
        <div className="flex items-center justify-center w-full">
            {moreDetailsAgent.map((agentDetails) => (
              <div key={agentDetails.uuid} className="flex items-start w-full justify-around gap-5">
                <div className="selectedAgent flex gap-3">
                  <img src={agentDetails.displayIconSmall} className="w-20 border-white border-[1px] bg-slate-200 bg-opacity-20" />
                  <div className="flex flex-col">
                    <p className="text-4xl font-semibold text-zinc-300 justify-center gap-5 flex items-center w-full">
                      {agentDetails.displayName} (Eu) 
                    </p> 
                    <p>
                      {agentDetails.displayName}
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <img 
                    className="w-[38rem] z-10"
                    src={agentDetails.fullPortraitV2} 
                    alt={agentDetails.displayName} 
                  />
                  <img 
                    className="w-[30rem] absolute mt-10 -z-20 opacity-10"
                    src={agentDetails.background} 
                    alt={agentDetails.displayName} 
                  />
                </div>
                <div className="description flex items-center justify-center mt-2 flex-col gap-5">

                </div>
                <div className="bg-black">
                  <p>{agentDetails.displayName}</p>
                </div>
              </div>
            ))}
        </div>
      )}

      <div className="agents flex flex-wrap w-[35rem] gap-1">
        {agents
          .filter(agent => agent.isPlayableCharacter)
          .map(agent => (
            <button 
              key={agent.uuid}
              className="bg-transparent p-0 border-none" 
              onClick={() => openAgentModal(agent.uuid)}
            >
              <div className="flex flex-col items-center justify-center border-red border-[1px] hover:border-yellow-200">
                <img
                  className="w-14"
                  src={agent.displayIconSmall}
                  alt={agent.displayName}
                />
              </div>
            </button>
          ))}
      </div>
    </section>
  )
}

