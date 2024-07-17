
import { ArrowLeftIcon } from "lucide-react"
import { useEffect, useState } from "react"

interface IRole {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
}

interface IAbilities {
  slot: string
  displayName: string
  description: string
  displayIcon: string
}

interface IAgentData {
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

export default function App() {
  const [agents, setAgents] = useState<IAgentData[]>([])
  const [moreDetailsAgent, setMoreDetailsAgent] = useState<IAgentData[]>([])

  function openAgentModal(uuid: string) {
    const agentDetails = agents.filter((agent) => agent.uuid === uuid);
    setMoreDetailsAgent(agentDetails);
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
      <ArrowLeftIcon size={50} className="absolute top-5 left-5"  />
      {moreDetailsAgent.length > 0 && (
        <div className="flex px-10 gap-6 items-center justify-center w-full">
          <div className="flex items-start w-full justify-around gap-5 px-10">
            <div className="selectedAgent w-1/3 flex gap-3">
              <div className="relative">
                <img src={moreDetailsAgent[0].displayIconSmall} className="w-20 border-white border-[1px] bg-slate-200 bg-opacity-20" />
                <img src={moreDetailsAgent[0].role.displayIcon} className="w-4 absolute bottom-1 left-1" />
              </div>
              <div className="flex flex-col">
                <p className="text-4xl font-semibold text-zinc-300 justify-center gap-5 flex items-center w-full">
                  {moreDetailsAgent[0].displayName} (Eu) 
                </p> 
                <p>
                  {moreDetailsAgent[0].displayName}
                </p>
              </div>
            </div>
            <div className="relative w-1/3 flex items-center justify-center">
              <img 
                className="max-w-[38rem] z-10"
                src={moreDetailsAgent[0].fullPortraitV2} 
                alt={moreDetailsAgent[0].displayName} 
              />
              <img 
                className="max-w-[30rem] absolute opacity-5"
                src={moreDetailsAgent[0].background} 
                alt={moreDetailsAgent[0].displayName} 
              />
            </div>
            <div className="w-1/3 flex flex-col">
              <div className="">
                <p className="tracking-widest text-1xl">{moreDetailsAgent[0].role.displayName.toLocaleUpperCase()}</p>
                <h1 className="text-yellow-200 font-extrabold text-7xl">{moreDetailsAgent[0].displayName.toLocaleUpperCase()}</h1>
              </div>
              <div className="flex gap-1 mt-10 items-center">
                <img src={moreDetailsAgent[0].role.displayIcon} className="w-16 bg-slate-200 bg-opacity-5 p-3" />
                {moreDetailsAgent[0].abilities.map((ability) => (
                  <button key={ability.displayName} onClick={() => console.log("oi")}className="bg-slate-200 bg-opacity-5 p-3">
                    <img src={ability.displayIcon} className="w-10" alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="agents z-50 flex flex-wrap w-[35rem] gap-1">
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

