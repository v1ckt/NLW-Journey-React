import { Link2, Plus, UserCog } from "lucide-react";
import { CheckBox } from "../../../components/checkbox";
import { FormEvent, useState } from "react";
import { InsertLink } from "./insertlinkmodal";
import { InviteGuestsModal } from "../../create-trip/inviteguestsmodal";
import { Button } from "../../../components/button";

interface AsideProps {
  links: { title: string; link: string }[];
  invitedusers: { name: string; email: string; hasAccepted: boolean }[];
}

export function Aside(props: AsideProps) {
  const [addModal, setAddModal] = useState(false);
  const [isGuestsInputOpen, setisGuestInputOpen] = useState(false);
  const [isGuestsModalOpen, setisGuestModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  const openAddModal = () => setAddModal(true);
  const closeAddModal = () => setAddModal(false);
  const openGuestsModal = () => setisGuestModalOpen(true);
  const closeGuestsModal = () => setisGuestModalOpen(false);
  const openGuestsInput = () => setisGuestInputOpen(true);

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();
    if (!email || emailsToInvite.includes(email)) return;
    setEmailsToInvite([...emailsToInvite, email]);
    event.currentTarget.reset();
  }
  function removeEmailtoInvite(email: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  }

  return (
    <aside className="flex flex-col gap-6">
      <span className="text-zinc-50 font-semibold text-xl">
        Links Importantes
      </span>
      {props.links.map((link) => (
        <a
          href={link.link}
          target="_blank"
          className="text-zinc-400 text-xs flex flex-row justify-between items-center gap-16"
        >
          <div className="flex-col flex">
            <span className="text-zinc-100 text-base">{link.title}</span>
            <span>
              {link.link.substring(0, 35) +
                `${link.link.length < 35 ? "" : "..."}`}
            </span>
          </div>
          <Link2 className="size-5" />
        </a>
      ))}
      <Button
        onClick={openAddModal}
        secondary
      >
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
      <div className="w-full h-px bg-zinc-800" />
      <div className="flex flex-col gap-5">
        <span className="text-zinc-50 font-semibold text-xl">Convidados</span>
        {props.invitedusers.map((i) => (
          <CheckBox
            checked={i.hasAccepted}
            isRight
            className="flex flex-row flex-1 justify-between items-center"
          >
            <div className="flex flex-col">
              <span className="text-zinc-100 text-base">{i.name}</span>
              <span className="text-zinc-400 text-sm">{i.email}</span>
            </div>
          </CheckBox>
        ))}
        <Button
          onClick={openGuestsModal}
          secondary
        >
          <UserCog className="size-5" />
          Gerenciar convidados
        </Button>
      </div>
      {addModal && <InsertLink closeAddModal={closeAddModal} />}
      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          removeEmailtoInvite={removeEmailtoInvite}
          closeGuestsModal={closeGuestsModal}
          openGuestsInput={openGuestsInput}
          isGuestsInputOpen={isGuestsInputOpen}
        ></InviteGuestsModal>
      )}
    </aside>
  );
}
