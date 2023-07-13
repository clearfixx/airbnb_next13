"use client";

// Hooks
import useCountries from "@/app/hooks/useCountries";

//Styles
import styles from "@/app/styles/components/ListingCard.module.scss";

// Interfaces
import { IListingCardProps } from "@/app/interfaces/listingCardProps";

// Libs
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";

const ListingCard: React.FC<IListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationData = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      className={`${styles._item} group`}
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <div className={styles._inner}>
        <div className={styles._image_container}>
          <Image
            fill
            src={data.imageSrc}
            alt={`Listing`}
            className={`${styles._poster} group-hover:scale-110`}
          />
          <div className={styles._heartbutton}></div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
