import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CameraIcon, CloseIcon } from "../../../resources/icons/CommonIcons";
import ProfilePhotoImporterStyle from "./style";

interface Iprops {
  image: File | string | null;
  setImage: (state: File | string | null) => void;
}

const ProfilePhotoImporter = (props: Iprops) => {
  const { image, setImage } = props;
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      if (url) return;
      setUrl(image as string);
    }
  }, [image]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length > 0) {
      setImage(e!.target!.files![0]!);
      setUrl(URL.createObjectURL(e!.target!.files![0]));
    } else {
      setImage(null);
      setUrl(null);
    }
  };

  const clear = () => {
    setImage(null);
    setUrl(null);
  };

  return (
    <ProfilePhotoImporterStyle>
      <div className="image_preview">
        {url ? (
          <>
            <div className="image_cont">
              <Image
                src={url}
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
            <button className="delete_btn dialog_shadow" onClick={clear}>
              <CloseIcon width="16" height="16" color="icon_color" />
            </button>
          </>
        ) : (
          <>
            <CameraIcon width="48" height="48" color="static_red" />
            <input type="file" onChange={onChange} accept="image/*" />
          </>
        )}
      </div>
    </ProfilePhotoImporterStyle>
  );
};

export default ProfilePhotoImporter;
