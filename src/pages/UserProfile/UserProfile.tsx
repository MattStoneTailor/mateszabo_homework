import * as React from "react";
import { connect } from "react-redux";
import styles from "./UserProfile.scss";
import { UserDataDTO } from "../../types/UserDataDTO";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Link from "../../components/BaseComponents/Link/Link";
import LinkStyle from "../../components/BaseComponents/Link/Link.scss";
import { Link as ReactRouterLink } from "react-router-dom";
import Moment from "react-moment";
import ageCalculator from "../../utils/ageCalculator";
import { FaBirthdayCake } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillInfoCircle,
} from "react-icons/ai";

interface UserProfileType {
  userData: UserDataDTO;
}
const UserProfile = ({ userData }: UserProfileType) =>
  userData.firstName ? (
    <section className={styles.userProfile}>
      <article className={styles.profile}>
        <ProfileImage src={userData.avatar} />
        <h1>
          {userData.firstName} {userData.lastName}
        </h1>
      </article>
      <dl>
        <dt>
          <AiOutlineMail />
          <span>Email</span>
        </dt>
        <dd>
          <Link
            className={styles.row}
            href={`mailto:${userData.email}`}
            title={userData.email}
          >
            {userData.email}
          </Link>
        </dd>
        <dt>
          <AiOutlinePhone />
          <span>Phone number</span>
        </dt>
        <dd>
          <Link
            className={styles.row}
            href={`tel:${userData.phone}`}
            title={userData.phone}
          >
            {userData.phone}
          </Link>
        </dd>
        <dt>
          <FaBirthdayCake />
          <span>Birthday</span>
        </dt>
        <dd>
          <Moment format="YYYY-MM-DD" date={userData.birthday} />
          <span>
            (<strong>{ageCalculator(userData.birthday)}</strong> years old)
          </span>
        </dd>
        {userData.about && (
          <>
            <dt>
              <AiFillInfoCircle />
              <span>About</span>
            </dt>
            <dd>{userData.about}</dd>
          </>
        )}
      </dl>
    </section>
  ) : (
    <section className={`${styles.userProfile} ${styles.noContent}`}>
      <h1>
        You&apos;ve forgot to fill the form. You can find it{" "}
        <ReactRouterLink className={LinkStyle.link} to="/">
          here
        </ReactRouterLink>
      </h1>
    </section>
  );

const mapStateToProps = (state) => {
  const { userData } = state;

  return { userData };
};

export default connect(mapStateToProps)(UserProfile);
