"use client";

// Lib imports
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

// Styles import
import styles from "@/app/styles/components/RegisterModal.module.scss";

// Custom hooks
import useRegisterModal from "@/app/hooks/useRegisterModal";

// Components imports
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Inputs from "../inputs/Inputs";
import Heading from "./Heading";
import Modal from "./Modal";
import Link from "next/link";
import Button from "../button/Button";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Oops.. Something went wrong", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div className={styles.register_modal__body}>
      <Heading
        title="Welcome to airbnb"
        subtitle="Create an account"
        center={false}
      />
      <Inputs
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className={styles.agreement_policy}>
        By clicking the submit button you agree to the{" "}
        <Link
          href="/"
          className={styles.agreement_policy_anchor}
          onClick={registerModal.onClose}
        >
          privacy policy
        </Link>
      </div>
    </div>
  );

  const footerContent = (
    <div className={styles.footer__content}>
      <div className="w-full relative bg-neutral-300 h-[1px] text-neutral-500 after:content-['or'] after:absolute after:left-[48%] after:bg-white after:px-5 after:top-[-12px]"></div>
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className={styles.footer__links}>
        <div className={styles.footer__links_content}>
          <div>Already have an account?</div>
          <div className={styles.login_link} onClick={registerModal.onClose}>
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Sign up"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default RegisterModal;
