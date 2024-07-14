import { Calendar, Clock, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";
import { TextInput } from "../../../components/input";

interface AddActivityProps {
  closeAddModal: () => void;
}

export function AddActivity({ closeAddModal }: AddActivityProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeAddModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades.
          </p>
        </div>
        <form className="bg-transparent flex items-stretch gap-2 flex-col">
          <TextInput title="Qual a atividade?">
            <Tag className="size-5 text-zinc-400" />
          </TextInput>
          <div className="flex flex-row gap-2">
            <TextInput title="Data">
              <Calendar className="size-5 text-zinc-400" />
            </TextInput>
            <TextInput title="Hora">
              <Clock className="size-5 text-zinc-400" />
            </TextInput>
          </div>
          <Button
            type="submit"
          >
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
