import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface GuestsInfoProps {
  openGuestsModal: () => void;
  openConfirmModal: () => void;
  emailsToInvite: string[];
}

export function GuestsInfo({
  emailsToInvite,
  openConfirmModal,
  openGuestsModal,
}: GuestsInfoProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 text-left">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        <span className="text-zinc-400 text-lg flex-1">
          {emailsToInvite.length === 0
            ? "Quem estará na viagem?"
            : emailsToInvite.length === 1
            ? emailsToInvite.length + " pessoa convidada"
            : emailsToInvite.length + " pessoas convidadas"}
        </span>
      </button>

      <div className="w-px h-6 bg-zinc-800" />
      <Button onClick={openConfirmModal}>
        Confirmar Viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
