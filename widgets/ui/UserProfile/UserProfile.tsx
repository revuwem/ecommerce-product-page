import Image from "next/image";
import imageAvatar from "@/public/images/image-avatar.png";
import styles from "./UserProfile.module.css";

const UserProfile = () => (
  <div className={styles.container}>
    <Image src={imageAvatar} alt="" fill />
  </div>
);

export default UserProfile;
