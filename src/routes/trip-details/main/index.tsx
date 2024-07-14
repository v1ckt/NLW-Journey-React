import { Plus } from "lucide-react";
import { CheckBox } from "../../../components/checkbox";
import { useState } from "react";
import { AddActivity } from "./addactivitymodal";
import { Button } from "../../../components/button";

interface MainProps {
  list: (
    | {
        day: string;
        weekday: string;
        activities: ({
          name: string;
          time: string;
          isCompleted: boolean;
        } | null)[];
      }
    | {
        day: string;
        weekday: string;
        activities: ({
          name: string;
          time: string;
          isCompleted: boolean;
        } | null)[];
      }
  )[];
}

export function Main(props: MainProps) {
  const [addModal, setAddModal] = useState(false);
  const openAddModal = () => setAddModal(true);
  const closeAddModal = () => setAddModal(false);
  return (
    <main className="flex gap-6 flex-col flex-1">
      <div className="flex">
        <span className="flex-1 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Atividades</h1>
          <Button onClick={openAddModal}>
            <Plus className="size-5" />
            Cadastrar Atividade
          </Button>
        </span>
      </div>
      <div className="gap-3 flex justify-start text-left flex-col">
        {props.list.map((day) => (
          <div className="flex-1 flex-col gap-3 flex">
            <div className="flex items-baseline gap-2">
              <p className="text-zinc-300 text-xl font-semibold">
                Dia {day.day}
              </p>
              <p className="text-zinc-500 text-xs">{day.weekday}</p>
            </div>
            {day.activities.map((activity) =>
              activity ? (
                <CheckBox
                  checked={activity.isCompleted}
                  className="flex items-center gap-2 bg-zinc-900 rounded-xl px-4 py-3 shadow-shape"
                >
                  <span className="flex-1 flex">{activity.name}</span>
                  <span className="text-zinc-400 text-sm">
                    {activity.time + "h"}
                  </span>
                </CheckBox>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 text-sm">
                    Nenhuma atividade cadastrada nesta data.
                  </span>
                </div>
              )
            )}
          </div>
        ))}
      </div>
      {addModal && <AddActivity closeAddModal={closeAddModal} />}
    </main>
  );
}
