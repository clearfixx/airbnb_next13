import { SafeUser } from "../types";

export interface IHeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}
