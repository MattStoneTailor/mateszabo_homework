import * as React from "react";
import { connect } from "react-redux";
import FieldName from "./../../components/BaseComponents/Field/FieldName";
import FieldEmail from "./../../components/BaseComponents/Field/FieldEmail";
import FieldPhone from "./../../components/BaseComponents/Field/FieldPhone";
import TextBox from "./../../components/BaseComponents/TextBox/TextBox";
import FileUploader from "./../../components/BaseComponents/FileUploader/FileUploader";
import DatePicker from "./../../components/BaseComponents/DatePicker/DatePicker";
import { useState, useContext, useEffect } from "react";
import SubmitButton from "../../components/BaseComponents/SubmitButton/SubmitButton";
import { UserDataDTO } from "../../types/UserDataDTO";
import { DataSyncContext } from "../../services/dataSync";
import { setUserData } from "../../store/actions";
import { useHistory } from "react-router-dom";
import styles from "./UserInformationForm.scss";

const errorsSchema = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  avatar: false,
};

interface UserInformationFormType {
  userData: UserDataDTO;
  dispatch: (action) => void;
}
const UserInformationForm = ({
  userData,
  dispatch,
}: UserInformationFormType) => {
  const history = useHistory();
  const dataSyncService = useContext(DataSyncContext);
  const [localUserData, setLocalUserData] = useState<UserDataDTO>(userData);
  const [errors, setErrors] = useState(errorsSchema);
  const hasError = Object.values(errors).find((error) => error);

  useEffect(() => {
    setLocalUserData(userData);
  }, [userData]);

  return (
    <section className={styles.userInformationForm}>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <fieldset className={styles.gridBoxes}>
          <FileUploader
            title="Upload your avatar"
            label="Your avatar"
            accessKey="i"
            onChange={(avatar) =>
              setLocalUserData({ ...localUserData, avatar })
            }
            onValidation={(error) => setErrors({ ...errors, avatar: error })}
            avatar={localUserData.avatar}
          />
          <DatePicker
            name="birthday"
            label="Your Birthday"
            value={localUserData.birthday}
            onChange={(birthday) =>
              setLocalUserData({ ...localUserData, birthday })
            }
          />
        </fieldset>
        <fieldset className={styles.gridFields}>
          <FieldName
            required
            placeholder="Your First Name"
            onChange={(firstName) =>
              setLocalUserData({ ...localUserData, firstName })
            }
            value={localUserData.firstName}
            accessKey="f"
            onValidation={(error) => setErrors({ ...errors, firstName: error })}
          />
          <FieldName
            required
            placeholder="Your Last Name"
            onChange={(lastName) =>
              setLocalUserData({ ...localUserData, lastName })
            }
            value={localUserData.lastName}
            accessKey="l"
            onValidation={(error) => setErrors({ ...errors, lastName: error })}
          />
          <FieldEmail
            required
            onChange={(email) => setLocalUserData({ ...localUserData, email })}
            value={localUserData.email}
            onValidation={(error) => setErrors({ ...errors, email: error })}
          />
          <FieldPhone
            required
            onChange={(phone) => setLocalUserData({ ...localUserData, phone })}
            value={localUserData.phone}
            onValidation={(error) => setErrors({ ...errors, phone: error })}
          />
          <TextBox
            placeholder="Write something about yourself..."
            onChange={(about) => setLocalUserData({ ...localUserData, about })}
            accessKey="a"
            value={localUserData.about}
          />
        </fieldset>
        <SubmitButton
          disabled={hasError}
          onClick={() => {
            dataSyncService.saveUserData(localUserData);
            dispatch(setUserData(localUserData));
            history.push("/profile");
          }}
        />
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { userData } = state;

  return { userData };
};

export default connect(mapStateToProps)(UserInformationForm);
