
import SelectionAgents from "./components/SelectionAgents"
// import { ArrowLeftIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { IAgentData } from "./interfaces/IAgentData"
import MoreDetailsAgent from "./components/MoreDetailsAgent"

async function fetchAgents() {
  return await fetch("https://valorant-api.com/v1/agents?language=pt-BR")
    .then(results => results.json())
}

export default function App() {
  const [agents, setAgents] = useState<IAgentData[]>([])
  const [moreDetailsAgent, setMoreDetailsAgent] = useState<IAgentData[]>([])

  function openAgentModal(uuid: string) {
    const agentDetails = agents.filter((agent) => agent.uuid === uuid);
    setMoreDetailsAgent(agentDetails);
  }
  
  useEffect(() => {
    fetchAgents().then(data => {
      setAgents(data.data)
    })
  }, [])


  return (
    <section 
      className="flex flex-col bg-[url('./assets/bg.png')] bg-no-repeat bg-cover w-screen min-h-screen flex-wrap bg-center items-center gap-8 justify-end pb-10"
    >
      {/* <ArrowLeftIcon size={50} className="absolute top-5 left-5"  /> */}

      {moreDetailsAgent && (
        <MoreDetailsAgent moreDetailsAgent={moreDetailsAgent}/>
      )}

      <SelectionAgents agents={agents} openAgentModal={openAgentModal} />
    </section>
  )
}

