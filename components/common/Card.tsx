import Image from "next/image";
import { HTMLAttributes, ImgHTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export type CardHeadingProps = {
  headingText: string;
} & HTMLAttributes<HTMLHeadingElement>;

export type CardSupportingTextProps = {
  supportingText: string;
} & HTMLAttributes<HTMLParagraphElement>;

export type CardMediaProps = {
  type: "img";
  src: string;
} & ImgHTMLAttributes<HTMLImageElement> &
  HTMLAttributes<HTMLVideoElement>;

function Card({ children, ...props }: CardProps) {
  return <div {...props}>{children}</div>;
}

function HeadLine({ headingText: headline, ...props }: CardHeadingProps) {
  return <h2 {...props}>{headline}</h2>;
}

function SubHead({ headingText: subhead, ...props }: CardHeadingProps) {
  return <h3 {...props}>{subhead}</h3>;
}

function Media({ type, src, className }: CardMediaProps) {
  return (
    <div className={className}>
      {type === "img" ? (
        <Image src={src} alt={`card media ${src}`} fill />
      ) : null}
    </div>
  );
}

function SupportingText({ supportingText, ...props }: CardSupportingTextProps) {
  return <p {...props}>{supportingText}</p>;
}

function Addon({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

function Divider({ ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr {...props} />;
}

export default Object.assign(Card, {
  HeadLine,
  SubHead,
  Media,
  SupportingText,
  Addon,
  Divider,
});
