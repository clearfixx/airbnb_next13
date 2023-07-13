import { Listing, Reservation } from "@prisma/client";
import { SafeUser } from "../types";

export interface IListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}
