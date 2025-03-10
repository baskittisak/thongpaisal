"use client";
import { useEffect, useState } from "react";
import { Space, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";
import Box from "@/components/Box";
import NavBar from "./Navbar";

const { Title, Text } = Typography;

interface SizingProps {
  logo: number;
  image: number;
  text: React.ComponentProps<typeof Typography.Title>["level"];
}

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 48px 48px 96px 48px;
  background-color: rgba(0, 0, 0, 0.3);

  .ant-typography {
    color: #fff !important;
  }
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;

const TextOverlay = styled.div`
  position: relative;
  width: 50%;

  .title {
    font-size: 6rem;
    font-weight: bold;
    display: block;
    line-height: 95px;
  }

  .subtitle {
    font-size: 3rem;
    font-weight: normal;
    display: block;
    line-height: 60px;
  }

  @media (max-width: 1270px) {
    width: 70%;
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 4rem;
      line-height: 65px;
    }

    .subtitle {
      font-size: 1rem;
      line-height: 30px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const ImageContainer = styled(Space)`
  margin: 24px 0;
`;

const ButtonContract = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  width: 40%;
  height: 65px;
  font-size: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    height: 55px;
    width: 30%;
  }

  @media (max-width: 768px) {
    margin: auto;
    width: 50%;
  }
`;

export default function Cover() {
  const [sizing, setSizing] = useState<SizingProps>({
    logo: 48,
    image: 80,
    text: 3,
  });

  useEffect(() => {
    const updateDrawerWidth = () => {
      if (window.innerWidth <= 768) {
        setSizing({
          logo: 36,
          image: 64,
          text: 5,
        });
      } else {
        setSizing({
          logo: 48,
          image: 80,
          text: 3,
        });
      }
    };

    updateDrawerWidth();
    window.addEventListener("resize", updateDrawerWidth);

    return () => window.removeEventListener("resize", updateDrawerWidth);
  }, []);

  return (
    <FullScreenWrapper>
      <BackgroundImage
        src="/images/image-cover.png"
        alt="thongpaisal home"
        fill
        priority
      />
      <Box height="100%" $direction="column" $justify="space-between">
        <Box $justify="space-between" $align="center">
          <Box $align="center" $cursor="pointer">
            <Image
              src="/icons/icon-logo.png"
              width={sizing.logo}
              height={sizing.logo}
              alt="thongpaisal"
            />
            <Title level={sizing.text}>THONGPAISAL CO.,LTD.</Title>
          </Box>
          <NavBar />
        </Box>
        <TextOverlay>
          <Title className="title">ผู้ผลิต ชิ้นส่วน</Title>
          <Title className="title">อะไหล่ช่วงล่าง</Title>
          <Text className="subtitle">Manufacturer of suspension parts</Text>
          <ImageContainer size="large">
            <Image
              src="/icons/icon-made-in-thailand.png"
              width={sizing.image}
              height={sizing.image}
              alt="thongpaisal made in thailand"
            />
            <Image
              src="/icons/icon-quality-guaranteed.png"
              width={sizing.image}
              height={sizing.image}
              alt="thongpaisal quality guaranteed"
            />
            <Image
              src="/icons/icon-oem.png"
              width={sizing.image}
              height={sizing.image}
              alt="thongpaisal oem"
            />
          </ImageContainer>
          <ButtonContract>ข้อมูลติดต่อ</ButtonContract>
        </TextOverlay>
      </Box>
    </FullScreenWrapper>
  );
}
