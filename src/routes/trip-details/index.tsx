import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Main } from "./main";
import { Aside } from "./aside";
import { Button } from "../../components/button";

export function TripDetailsPage() {
  const list = [
    {
      day: "17",
      weekday: "Sábado",
      activities: [null],
    },
    {
      day: "18",
      weekday: "Domingo",
      activities: [
        {
          name: "Café da manhã",
          time: "08:00",
          isCompleted: true,
        },
        {
          name: "Passeio de barco",
          time: "10:00",
          isCompleted: false,
        },
        {
          name: "Almoço",
          time: "13:00",
          isCompleted: false,
        },
        {
          name: "Passeio de barco",
          time: "15:00",
          isCompleted: false,
        },
        {
          name: "Jantar",
          time: "19:00",
          isCompleted: false,
        },
      ],
    },
  ];
  const links = [
    { title: "Reserva AirBnB", link: "https://www.airbnb.com.br/" },
    {
      title: "Regras da Casa",
      link: "https://www.notion.com/pages/14070134548sv6d54",
    },
  ];
  const invitedusers = [
    {
      name: "João",
      email: "joaozin@gmail.com",
      hasAccepted: true,
    },
    {
      name: "Maria",
      email: "mar.ia@gmail.com",
      hasAccepted: false,
    },
    {
      name: "José",
      email: "jose.maria154@gmail.com",
      hasAccepted: false,
    },
  ];

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="h-16 px-4 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-100">
            Barra do Corda, Maranhão
          </span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <Button secondary>
            Alterar local/data
            <Settings2 className="size-5" />
          </Button>
        </div>
      </div>

      <div className="flex flex-row gap-16">
        <Main list={list} />
        <Aside links={links} invitedusers={invitedusers} />
      </div>
    </div>
  );
}
