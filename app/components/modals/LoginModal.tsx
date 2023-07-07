"use client";

// Lib imports
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Styles import
import styles from "@/app/styles/components/RegisterModal.module.scss";

// Custom hooks
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

// Components imports
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Inputs from "../inputs/Inputs";
import Heading from "./Heading";
import Modal from "./Modal";
import Link from "next/link";
import Button from "../button/Button";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Good see you again!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error("Invalid email or password", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className={styles.register_modal__body}>
      <Heading
        title="Welcome back"
        subtitle="Login to your account"
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
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModal;
