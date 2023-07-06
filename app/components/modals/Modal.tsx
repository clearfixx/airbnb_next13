"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { IModalProps } from "@/app/interfaces/modalProps";

import styles from "@/app/styles/components/Modal.module.scss";
import Button from "../button/Button";

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    return setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.modal_wrapper}>
        <div className={styles.modal_wrapper__inner}>
          <div
            className={`${styles.modal__content} ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className={styles.modal__content}>
              <div className={styles.modal__header}>
                <button
                  className={styles.modal__close_button}
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className={styles.header__content}>{title}</div>
              </div>
              <div className={styles.modal__body}>{body}</div>
              <div className={styles.modal__footer}>
                <div className={styles.footer__content}>
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
