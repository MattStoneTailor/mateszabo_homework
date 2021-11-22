import * as React from "react";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";
import styles from "./ProfileImage.scss";

interface ProfileImageType {
  src: {
    small: string;
    large: string;
  };
}
const ProfileImage = ({ src, ...props }: ProfileImageType) => (
  <ResponsiveImage
    {...props}
    title="User avatar"
    alt="User avatar"
    className={styles.profileImage}
  >
    <ResponsiveImageSize default minWidth={0} path={src.small} />
    <ResponsiveImageSize minWidth={450} path={src.large} />
  </ResponsiveImage>
);

export default ProfileImage;
