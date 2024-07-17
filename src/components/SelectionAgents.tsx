import { useState } from "react";
import { IAgentData } from "../interfaces/IAgentData";

interface SelectionAgentsProps {
  agents: IAgentData[];
  openAgentModal: (uuid: string) => void;
}

const SelectionAgents = ({ agents, openAgentModal }: SelectionAgentsProps) => {
  // Estado para armazenar o UUID do agente selecionado
  const [selectedAgentUuid, setSelectedAgentUuid] = useState<string | null>(null);

  // Função para lidar com o clique no botão do agente
  const handleButtonClick = (uuid: string) => {
    // Atualize o estado com o UUID do agente clicado
    setSelectedAgentUuid(uuid);
    // Chame a função de abertura do modal
    openAgentModal(uuid);
  };

  return (
    <section className="agents z-50 flex flex-wrap w-[35rem] gap-1">
      {agents
        .filter(agent => agent.isPlayableCharacter)
        .map(agent => (
          <button
            key={agent.uuid}
            className="bg-transparent p-0 disabled:border-yellow-200 disabled:border-[1px] disabled:bg-yellow-100 disabled:bg-opacity-20"
            onClick={() => handleButtonClick(agent.uuid)}
            // Desativa o botão se o UUID do agente for o mesmo que o UUID selecionado
            disabled={selectedAgentUuid === agent.uuid}
          >
            <div className="flex flex-col items-center justify-center border-[1px] hover:border-yellow-200">
              <img
                className="w-14"
                src={agent.displayIconSmall}
                alt={agent.displayName}
              />
            </div>
          </button>
      ))}
    </section>
  );
}

export default SelectionAgents;
