import React, { useEffect, useRef, useState } from "react";
import MultipleImageImporterStyle from "./style";
import { useTranslation } from "next-i18next";
import { CameraIcon, CloseIcon } from "../../../resources/icons/CommonIcons";
import Image from "next/image";

interface Iprops {
  title: string;
}

const MultipleImageImporter = (props: Iprops) => {
  const { title } = props;
  const { t } = useTranslation();
  const [urls, setUrls] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (urls.length < 4) {
      const plcHolders = Array(4 - urls.length).fill("");
      const combine = [...urls, ...plcHolders];
      setItems(combine);
    } else if (urls.length <= 8) {
      const plcHolders = Array(8 - urls.length).fill("");
      const combine = [...urls, ...plcHolders];
      setItems(combine);
    } else if (urls.length > 8) {
      setItems(urls.slice(0, 8));
    }
  }, [urls]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files!.length > 0) {
      const files = e.target.files;
      let filesArr: string[] = [];
      for (var i = 0; i < files.length; i++) {
        filesArr = [...filesArr, URL.createObjectURL(files[i])];
      }
      setUrls(filesArr);
    }
  };

  const focuseOnInput = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const removeFromArr = (id: number) => {
    const newUrls = urls.filter((item, index) => index !== id);
    setUrls(newUrls);
  };

  return (
    <MultipleImageImporterStyle>
      <span className="title">{title}</span>
      <div className="cards_cont">
        {items.map((item, index) => (
          <ItemCont
            key={index}
            url={item}
            removeImage={() => removeFromArr(index)}
            focuseInput={focuseOnInput}
          />
        ))}
      </div>
      <input
        type="file"
        onChange={onChange}
        accept="image/*"
        multiple
        ref={inputRef}
      />
    </MultipleImageImporterStyle>
  );
};

interface ItemProps {
  url: string;
  removeImage: () => void;
  focuseInput: () => void;
}
const ItemCont = (props: ItemProps) => {
  const { url, removeImage, focuseInput } = props;

  return (
    <div className="item item_shadow">
      {url ? (
        <>
          <button className="delete_btn item_shadow" onClick={removeImage}>
            <CloseIcon width="20" height="20" />
          </button>
          <div className="image_cont">
            <Image src={url} layout="fill" objectFit="cover" priority={true} />
          </div>
        </>
      ) : (
        <button className="add_btn" onClick={focuseInput}>
          <CameraIcon color="static_red" />
        </button>
      )}
    </div>
  );
};

export default MultipleImageImporter;
