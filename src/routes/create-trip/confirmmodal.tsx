import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { TextInput } from "../../components/input";

interface ConfirmModalProps {
  closeConfirmModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
}

export function ConfirmModal({
  closeConfirmModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar a solicitação de viagem
            </h2>
            <button onClick={closeConfirmModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a solicitação de viagem para{" "}
            <span className="text-zinc-100 font-semibold">{"CIDADE"}</span> nas
            datas de{" "}
            <span className="text-zinc-100 font-semibold">{"IDA"} a </span>
            <span className="text-zinc-100 font-semibold">{"VOLTA"} de </span>
            <span className="text-zinc-100 font-semibold">{"MÊS"} de </span>
            <span className="text-zinc-100 font-semibold">{"ANO"}</span>,
            preencha os campos abaixo com seus dados:
          </p>
        </div>
        <form
          onSubmit={createTrip}
          className="bg-transparent flex items-stretch gap-2 flex-col"
        >
          <TextInput title="Seu nome completo" onChange={(e) => setOwnerName(e.target.value)}>
            <User className="size-5 text-zinc-400" />
          </TextInput>
          <TextInput title="Seu e-mail pessoal" onChange={(e) => setOwnerEmail(e.target.value)}>
            <Mail className="size-5 text-zinc-400" />
          </TextInput>
          <Button type="submit">Confirmar a solicitação de viagem</Button>
        </form>
      </div>
    </div>
  );
}
