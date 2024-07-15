import {createContext, useContext} from 'react';

export type TripInfo = {
    tripId: number;
    destination: string;
    start: Date;
    end: Date;
    emailsToInvite: string[];
    ownerName: string;
    ownerEmail: string;
  };

export const TripInfoContext = createContext<TripInfo | undefined>(undefined);

export function TripInfoProvider({children, value}: {children: React.ReactNode, value: TripInfo}) {
    return <TripInfoContext.Provider value={value}>{children}</TripInfoContext.Provider>;
}