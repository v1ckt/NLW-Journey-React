import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { default as defaultStyles } from "react-day-picker/dist/style.module.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface TripInfoFormProps {
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventDateRange: (date: DateRange | undefined) => void;
  eventDateRange: DateRange | undefined;
}

export function TripInfoForm({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEventDateRange,
  eventDateRange,
}: TripInfoFormProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const openDatePicker = () => setIsDatePickerOpen(true);
  const closeDatePicker = () => setIsDatePickerOpen(false);

  const displayDate = (date: DateRange | undefined) => {
    const from = date?.from;
    const to = date?.to;
    return date && from && to
      ? from.getMonth() === to.getMonth()
        ? format(from, "dd").concat(
            format(to, "' a ' dd ' de ' MMMM", { locale: ptBR })
          )
        : format(from, "dd ' de ' MMMM", { locale: ptBR }).concat(
            format(to, "' a ' dd ' de ' MMMM", { locale: ptBR })
          )
      : "Quando?";
  };

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg text-zinc-400 outline-none flex-1"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <button
        disabled={isGuestsInputOpen}
        onClick={openDatePicker}
        className="flex items-center gap-2"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="bg-transparent text-lg text-zinc-400 text-left outline-none min-w-40">
          {displayDate(eventDateRange)}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecione a data</h2>
              <button onClick={closeDatePicker}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <DayPicker
              mode="range"
              selected={eventDateRange}
              onSelect={setEventDateRange}
              classNames={defaultStyles}
              styles={{
                day: {
                  color: "rgb(161 161 170)",
                },
              }}
              modifiersStyles={{
                today: {
                  border: "2px solid rgb(190 242 100)",
                },
                selected: {
                  backgroundColor: "rgb(190 242 100)",
                  color: "rgb(26 46 5)",
                },
              }}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} secondary>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
