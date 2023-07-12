"use client";

// Styles
import styles from "@/app/styles/components/ImageUpload.module.scss";

// Interfaces
import { IImageUploadProps } from "@/app/interfaces/imageUploadProps";

// Libs
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import { useCallback } from "react";
import Image from "next/image";

declare global {
  var cloudinary: any;
}

const ImageUpload: React.FC<IImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="w1o5ij5f"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div className={styles._uploads} onClick={() => open?.()}>
            <TbPhotoPlus size={50} />
            <div className={styles._uplods_text}>Click to upload</div>
            {value && (
              <div className={styles._uploaded_photo}>
                <Image
                  alt={`Uploaded`}
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
