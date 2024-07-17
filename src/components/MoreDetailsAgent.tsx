import { IAgentData } from "../interfaces/IAgentData";
import AgentAbilities from "./AgentDetails/AgentAbilities";
import AgentNameRole from "./AgentDetails/AgentNameRole";
import RightMenu from "./RightMenu";

interface MoreDetailsAgentProps {
  moreDetailsAgent: IAgentData[];
}

const MoreDetailsAgent = ({ moreDetailsAgent }: MoreDetailsAgentProps) => {
  return(
    moreDetailsAgent.map((agent => (
      <div key={agent.displayName} className="flex px-10 gap-6 items-center justify-center w-full">
        <div className="flex items-start w-full justify-around gap-5 px-10">
          <div className="selectedAgent w-1/3 flex gap-3">
            <div className="relative">
              <img src={agent.displayIconSmall} className="w-20 border-white border-[1px] bg-slate-200 bg-opacity-20" />
              <img src={agent.role.displayIcon} className="w-4 absolute bottom-1 left-1" />
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-semibold text-zinc-300 justify-center gap-5 flex items-center w-full">
                {agent.displayName} (Eu) 
              </p> 
              <p>
                {agent.displayName}
              </p>
            </div>
          </div>
          <div className="relative w-1/3 flex items-center justify-center">
            <img 
              className="max-w-[38rem] z-10"
              src={agent.fullPortraitV2} 
              alt={agent.displayName} 
            />
            <img 
              className="max-w-[30rem] absolute opacity-5"
              src={agent.background} 
              alt={agent.displayName} 
            />
          </div>
          <RightMenu className="w-1/3 flex flex-col">
            <AgentNameRole agent={agent} />
            <AgentAbilities agent={agent} />
          </RightMenu>
        </div>
    </div>
    )))
  )
}

export default MoreDetailsAgent