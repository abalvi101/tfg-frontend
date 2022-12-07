import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ENDPOINTS } from "../../../consts/api";
import { useAuth } from "../../../hooks"
import { getBase64StringFromImage } from "../../../utils";
import ProfileImage from "../../common/profile-image/ProfileImage.styled";
import AssociationProfile from "./association-profile/AssociationProfile.styled";
import UserProfile from "./user-profile/UserProfile.styled";

export default ({ className, }) => {
  const [user, userUpdate] = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [imageBase64, setImageBase64] = useState(null);
  const [image, setImage] = useState(null);
  // URL.createObjectURL(image);

  useEffect(() => {
    getUserInfo();
  }, [])

  useEffect(() => {
    if (image) {
      getBase64StringFromImage(
        image,
        (value) => setImageBase64(value)
      )
    } else {
      setImageBase64(null);
    }
  }, [image])

  useEffect(() => {
    axios.post('/auth/submitImage', {image: imageBase64})
    .then(({data}) => {
      console.log('response submit image', data);
    })
    .catch((error) => {
      console.log('error submit image', error);
    })
  }, [imageBase64])

  const getUserInfo = () => {
    if (!user.token) return userUpdate.logout()
    axios.get(ENDPOINTS.AUTH.GET_USER_INFO)
    .then(({data}) => {
      if (data.success) {
        setUserInfo(data.data);
      } else {
        userUpdate.logout();
      }
    })
    .catch((error) => {
      console.log('ERROR AUTH', error);
    })
  }

  const onLoadImage = (image) => {
    setImage(image);
  }

  const onDeleteImage = () => {
    setImage(null);
  }

  const getImageSrc = () => {
    if (userInfo.profile_image)
      return userInfo.profile_image;
    return image ? URL.createObjectURL(image) : null;
  }

  return (
    <div className={className}>
      <header className="header">
        <ProfileImage
          src={getImageSrc()}
          onEdit={onLoadImage}
          onDelete={onDeleteImage}
        />
        <h1>{userInfo.name} {userInfo.surname}</h1>
      </header>
      <section className="info">
        {/* {console.log(user.role)} */}
        {
          user.role === 'user'
            ? <UserProfile user={userInfo} refresh={getUserInfo} />
            : user.role === 'association'
              ? <AssociationProfile association={userInfo} refresh={getUserInfo} />
              : null
        }
      </section>
    </div>
  )
}