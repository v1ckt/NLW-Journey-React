import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./inviteguestsmodal";
import { ConfirmModal } from "./confirmmodal";
import { TripInfoForm } from "./steps/trip-info";
import { GuestsInfo } from "./steps/guests-info";
import { DateRange } from "react-day-picker";
import { TripInfo, TripInfoContext } from "../../contexts/tripinfocontext";

export function CreateTripPage() {
  const [isGuestsInputOpen, setisGuestInputOpen] = useState(false);
  const [isGuestsModalOpen, setisGuestModalOpen] = useState(false);
  const [isConfirmModalOpen, setisConfirmModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [aS, setaS] = useState<TripInfo>();

  const [destination, setDestination] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [ownerEmail, setOwnerEmail] = useState<string>("");
  const [eventDateRange, setEventDateRange] = useState<DateRange>();

  const navigate = useNavigate();

  const openGuestsInput = () => setisGuestInputOpen(true);
  const closeGuestsInput = () => setisGuestInputOpen(false);

  const openGuestsModal = () => setisGuestModalOpen(true);
  const closeGuestsModal = () => setisGuestModalOpen(false);

  const openConfirmModal = () => setisConfirmModalOpen(true);
  const closeConfirmModal = () => setisConfirmModalOpen(false);

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
  const tripId = Math.floor(Math.random() * 1000);

  async function createTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // if (!destination) return;
    if (!eventDateRange?.from || !eventDateRange?.to) return;
    // if (!ownerName) return;
    // if (!ownerEmail) return;
    // if (!emailsToInvite.length) return;

    // const { tripId } = response.data;]

    // navigate(`/trips/${tripId}`, { state: aS });
  }

  console.log(aS);
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="../public/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <TripInfoContext.Provider value={aS}>
            <TripInfoForm
              closeGuestsInput={closeGuestsInput}
              isGuestsInputOpen={isGuestsInputOpen}
              openGuestsInput={openGuestsInput}
              setDestination={setDestination}
              setEventDateRange={setEventDateRange}
              eventDateRange={eventDateRange}
            />
          </TripInfoContext.Provider>

          {isGuestsInputOpen && (
            <GuestsInfo
              emailsToInvite={emailsToInvite}
              openConfirmModal={openConfirmModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </div>

        <p className="text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br /> com nossos{" "}
          <a href="" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e
          <a href="" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          removeEmailtoInvite={removeEmailtoInvite}
          closeGuestsModal={closeGuestsModal}
          openGuestsInput={openGuestsInput}
        ></InviteGuestsModal>
      )}

      {isConfirmModalOpen && (
        <TripInfoContext.Consumer>
          {(value) => (
            <ConfirmModal
              closeConfirmModal={closeConfirmModal}
              createTrip={createTrip}
              setOwnerName={setOwnerName}
              setOwnerEmail={setOwnerEmail}
              tripInfo={value} // Aqui você usa o valor do contexto
            />
          )}
        </TripInfoContext.Consumer>
      )}
    </div>
  );
}
