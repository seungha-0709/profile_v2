import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { mailModalBackdrop, mailModalContainer } from "../../styles/styles.css";

type MailModalPropsType = {
  onClose: () => void;
};

const MailModal = (props: MailModalPropsType) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleClose = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    props.onClose && props.onClose();
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current || "",
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div onClick={(e) => handleClose(e)} className={mailModalBackdrop}></div>
      <div className={mailModalContainer}>
        <form ref={formRef} onSubmit={sendEmail}>
          <label>성함</label>
          <input type="text" name="name" />
          <label>이메일</label>
          <input type="email" name="email" />
          <textarea
            placeholder="이 곳에 저에게 전하고 싶은 말씀을 적어주세요."
            name="message"
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default MailModal;
