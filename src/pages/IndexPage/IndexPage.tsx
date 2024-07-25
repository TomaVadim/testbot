import { type FC } from "react";

import { BlurButtonWithText } from "@/components/UI/BlurButtonWithText/BlurButtonWithText";
import { Typography } from "@/components/UI/Typography/Typography";
import { Container } from "@/components/UI/Container/Container";
import { Image } from "@/components/UI/Image/Image";

import ByBitLogo from "@/assets/ByBitLogo.svg";
import IconSend from "@/assets/IconSend.svg";

import { ButtonWithIcon } from "@/components/UI/ButtonWithIcon/ButtonWithIcon";
import { Stepper } from "@/components/UI/Stepper/Stepper";

export const IndexPage: FC = () => {
  const shareLink = () => {
    const url = "https://testbot-jalb.onrender.com";
    const text = "Поделились с друзьями программой BoostChain";
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;

    return <a href={shareUrl}>Поделиться</a>;
  };

  return (
    <Container>
      <Image src={ByBitLogo} style={{ height: 292 }} />

      <div style={{ marginBlock: 20 }}>
        <Typography variant="h1" weight="bold" textColor="white">
          Выполняйте простые задания, чтобы выиграть долю в 50 000$ от
          BoostChain.
        </Typography>
      </div>

      <div style={{ marginBlock: 12 }}>
        <ButtonWithIcon icon={IconSend} rounded="md" onClick={shareLink}>
          <span style={{ color: "var(--white-color)" }}>Поделиться</span>
        </ButtonWithIcon>
      </div>

      <div style={{ marginBlock: 12 }}>
        <BlurButtonWithText rounded="md" bgColor="blur">
          <Typography variant="h2" weight="semibold" textColor="white">
            Введите UID
          </Typography>
        </BlurButtonWithText>
      </div>

      <div style={{ marginBottom: 28 }}>
        <BlurButtonWithText rounded="md" bgColor="white">
          <Typography variant="h2" weight="semibold" textColor="black">
            Зарегестрироваться
          </Typography>
        </BlurButtonWithText>
      </div>

      <div style={{ marginBottom: 8 }}>
        <Typography variant="h3" textColor="white">
          Увеличивайте ваш рейтинг
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginBottom: 24,
        }}
      >
        <Stepper status="completed">Регистрация</Stepper>

        <Stepper status="active">Верификация</Stepper>

        <Stepper status="disabled">Пополните баланс</Stepper>

        <Stepper status="disabled">Подключитесь к копитрейдингу</Stepper>

        <Stepper status="disabled">Пригласите друга</Stepper>
      </div>
    </Container>
  );
};
