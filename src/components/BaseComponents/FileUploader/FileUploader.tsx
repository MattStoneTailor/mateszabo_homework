import * as React from "react";
import styles from "./FileUploader.scss";
import ImageUploading from "react-images-uploading";
import { imageCompressor } from "../../../services/imageCompressor";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FiUpload } from "react-icons/fi";

interface FileUploaderType {
  onChange: (ev) => void;
  accessKey?: string;
  title?: string;
  label?: string;
  onValidation?: (error) => void;
  avatar: {
    large: string;
    small: string;
  };
}

const FileUploader = ({
  accessKey,
  onChange,
  avatar,
  title,
  label,
  onValidation,
}: FileUploaderType) => {
  const [images, setImages] = React.useState([]);
  const dataUrlKey = "data_url";
  const maxNumber = 1;

  const onLocalChange = (imageList) => {
    const originalImage = imageList[0][dataUrlKey];
    const smallCompression = imageCompressor(originalImage, 150);
    const largeCompression = imageCompressor(originalImage, 250);
    setImages(imageList);
    onValidation && onValidation(false);

    Promise.all([smallCompression, largeCompression]).then(
      (compressedImages) => {
        const [smallImage, largeImage] = compressedImages;
        onChange({
          large: largeImage,
          small: smallImage,
        });
      },
    );
  };

  return (
    <label className={styles.container}>
      <h3>{label}</h3>
      <ImageUploading
        maxFileSize={2000000}
        acceptType={["jpg", "jpeg", "png", "gif"]}
        value={images}
        onChange={onLocalChange}
        onError={() => onValidation && onValidation(true)}
        maxNumber={maxNumber}
        dataURLKey={dataUrlKey}
      >
        {({ onImageUpload, onImageUpdate, isDragging, dragProps, errors }) => (
          <>
            <article
              className={`${styles.fileUploader} ${
                isDragging ? styles.dragging : ""
              }`}
              style={
                avatar.large ? { backgroundImage: `url(${avatar.large})` } : {}
              }
            >
              <button
                accessKey={accessKey}
                onClick={() =>
                  avatar.large ? onImageUpdate(0) : onImageUpload()
                }
                title={title}
                {...dragProps}
              >
                <FiUpload />
                <span>{title}</span>
              </button>
            </article>
            <>
              {errors && (
                <>
                  {errors.acceptType && (
                    <ErrorMessage>
                      The selected image type should be .jpg, .png, jpeg of .gif
                    </ErrorMessage>
                  )}
                  {errors.maxFileSize && (
                    <ErrorMessage>
                      Selected image is too big. Cannot be bigger than 2Mb.
                    </ErrorMessage>
                  )}
                </>
              )}
            </>
          </>
        )}
      </ImageUploading>
    </label>
  );
};

export default FileUploader;
