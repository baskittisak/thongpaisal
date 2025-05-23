"use client";

import { useEffect, useState } from "react";
import { Space, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";
import Slider from "react-slick";
import Box from "@/components/Box";
import NavBar from "@/components/Navbar";

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
  padding: 48px 150px;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .ant-typography {
    color: #fff !important;
    z-index: 2;
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 48px;
  }
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;

const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .slick-slide > div {
    height: 100vh;
    position: relative;
  }

  .slick-prev {
    left: 16px;
  }

  .slick-next {
    right: 16px;
  }

  .slick-prev,
  .slick-next {
    z-index: 1000;
    width: 40px;
    height: 40px;
    opacity: 0.5;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    color: white;
  }
`;

const TextOverlay = styled.div`
  position: relative;
  width: 70%;
  z-index: 10;

  .title {
    font-size: 5rem;
    font-weight: bold;
    display: block;
    line-height: 95px;
  }

  .subtitle {
    font-size: 2rem;
    font-weight: normal;
    display: block;
    line-height: 60px;
  }

  @media (max-width: 1270px) {
    width: 80%;
  }

  @media (max-width: 1032px) {
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
  width: 20%;
  height: 55px;
  font-size: 1rem;

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

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const updateSizing = () => {
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

    updateSizing();
    window.addEventListener("resize", updateSizing);
    return () => window.removeEventListener("resize", updateSizing);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  return (
    <FullScreenWrapper>
      <SliderWrapper>
        <Slider {...settings}>
          <div>
            <BackgroundImage
              src="/images/image-cover.png"
              alt="cover-1"
              fill
              priority
            />
          </div>
          <div>
            <BackgroundImage
              src="/images/image-cover-2.png"
              alt="cover-2"
              fill
            />
          </div>
          <div>
            <BackgroundImage
              src="/images/image-cover-3.png"
              alt="cover-3"
              fill
            />
          </div>
          <div>
            <BackgroundImage
              src="/images/image-cover-4.png"
              alt="cover-4"
              fill
            />
          </div>
        </Slider>
      </SliderWrapper>

      <Box height="100%" $direction="column" $justify="space-between">
        <Box $justify="space-between" $align="center">
          <Box $align="center" $cursor="pointer">
            <Image
              src="/icons/icon-logo.png"
              width={sizing.logo}
              height={sizing.logo}
              alt="logo"
              style={{ position: "relative", zIndex: 2, marginRight: "8px" }}
            />
            <Title level={sizing.text}>THONGPAISAL CO.,LTD.</Title>
          </Box>
          <NavBar />
        </Box>

        {currentSlide === 0 && (
          <TextOverlay>
            <Title className="title">ผู้ผลิต ชิ้นส่วน</Title>
            <Title className="title">อะไหล่ช่วงล่าง</Title>
            <Text className="subtitle">Manufacturer of suspension parts</Text>
            <ImageContainer size="large">
              <Image
                src="/icons/icon-made-in-thailand.png"
                width={sizing.image}
                height={sizing.image}
                alt="made-in-thailand"
              />
              <Image
                src="/icons/icon-quality-guaranteed.png"
                width={sizing.image}
                height={sizing.image}
                alt="quality-guaranteed"
              />
              <Image
                src="/icons/icon-oem.png"
                width={sizing.image}
                height={sizing.image}
                alt="oem"
              />
            </ImageContainer>
            <ButtonContract>ข้อมูลติดต่อ</ButtonContract>
          </TextOverlay>
        )}
      </Box>
    </FullScreenWrapper>
  );
}
