import { IAgentData } from "../../interfaces/IAgentData"

interface AgentNameRole {
  agent: IAgentData
}

const AgentNameRole = ({ agent }: AgentNameRole) => {
  return (
    <div>
      <p className="tracking-widest text-1xl">
        {agent.role.displayName.toLocaleUpperCase()}
      </p>
      <h1 className="text-yellow-200 font-extrabold text-7xl">
        {agent.displayName.toLocaleUpperCase()}
      </h1>
    </div>
  );
};

export default AgentNameRole;
