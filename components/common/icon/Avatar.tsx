import Image from "next/image";

function Avatar() {
  return (
    <Image
      src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/avatar.svg"
      alt="avatar_icon"
      width={36}
      height={36}
      aria-hidden
    />
  );
}

export default Avatar;
