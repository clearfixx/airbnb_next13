import { User } from "@prisma/client";

export interface INavbraProps {
  currentUser?: User | null;
}
