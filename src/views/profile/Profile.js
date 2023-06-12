import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ENDPOINTS } from "../../consts/api";
import { useAppState, useAuth } from "../../hooks"
import { getBase64StringFromImage } from "../../utils";
import ProfileImage from "../../components/common/profile-image/ProfileImage.styled";
import AssociationProfile from "./association-profile/AssociationProfile.styled";
import UserProfile from "./user-profile/UserProfile.styled";

export default ({ className, }) => {
  const [appState, appStateUpdate] = useAppState();
  const [user, userUpdate] = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, [])

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
      appStateUpdate.newNotification({
        type: 'error',
        message: 'Error, pruebe a actualizar la página.'
      })
    })
  }

  const onDeleteImage = () => {
    axios.post('/auth/submitImage', {image: ''})
    .then(() => {
      setImage(null);
      getUserInfo();
      appStateUpdate.newNotification({
        type: 'success',
        message: 'La imagen se ha actualizado correctamente.'
      })
    })
    .catch((error) => {
      console.log('error submit image', error);
      appStateUpdate.newNotification({
        type: 'error',
        message: 'Error al eliminar la imagen.'
      })
    })
  }

  const onLoadImage = (uploadedImage) => {    
    if (uploadedImage) {
      getBase64StringFromImage(
        uploadedImage,
        (value) => {
          axios.post('/auth/submitImage', {image: value})
          .then(() => {
            setImage(uploadedImage);
            appStateUpdate.newNotification({
              type: 'success',
              message: 'La imagen se ha actualizado correctamente.'
            })
          })
          .catch((error) => {
            console.log('error submit image', error);
            appStateUpdate.newNotification({
              type: 'error',
              message: 'Error al actualizar la imagen.'
            })
          })
        }
      )
    } else {
      onDeleteImage();
    } 
  }

  const getImageSrc = () => {
    if (image)
      return URL.createObjectURL(image);
    return userInfo.profile_image;
  }

  return (
    <div className={className}>
      <header className="header">
        <ProfileImage
          src={getImageSrc()}
          onEdit={onLoadImage}
          onDelete={onDeleteImage}
          editable
        />
        <h1>{userInfo.name} {userInfo.surname}</h1>
      </header>
      <section className="info">
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