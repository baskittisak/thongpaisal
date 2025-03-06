"use client";
import Image from "next/image";
import styled from "styled-components";
import { Space, Typography } from "antd";
import Box from "@/components/Box";

const { Title, Text } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 48px;

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
`;

const Nav = styled(Space)`
  white-space: pre;

  .ant-typography {
    cursor: pointer;
    position: relative;
    display: inline-block;
  }

  .ant-typography::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
    transform: translateX(-50%);
  }

  .ant-typography:hover::after {
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
  font-size: 24px;
`;

export default function Cover() {
  return (
    <FullScreenWrapper>
      <BackgroundImage
        src="/images/image-home.png"
        alt="thongpaisal home"
        fill
        priority
      />
      <Box height="100%" $direction="column" $justify="space-between">
        <Box $justify="space-between" $align="center">
          <Box $align="center" $cursor="pointer">
            <Image
              src="/icons/icon-logo.png"
              width={48}
              height={48}
              alt="thongpaisal"
            />
            <Title level={3}>THONGPAISAL CO.,LTD.</Title>
          </Box>
          <Nav size="large">
            <Title level={4}>หน้าแรก</Title>
            <Title level={4}>เกี่ยวกับเรา</Title>
            <Title level={4}>สินค้า</Title>
            <Title level={4}>ติดต่อเรา</Title>
          </Nav>
        </Box>
        <TextOverlay>
          <Title className="title">ผู้ผลิต ชิ้นส่วน</Title>
          <Title className="title">อะไหล่ช่วงล่าง</Title>
          <Text className="subtitle">Manufacturer of suspension parts</Text>
          <ImageContainer size="large">
            <Image
              src="/icons/icon-made-in-thailand.png"
              width={80}
              height={80}
              alt="thongpaisal made in thailand"
            />
            <Image
              src="/icons/icon-quality-guaranteed.png"
              width={80}
              height={80}
              alt="thongpaisal quality guaranteed"
            />
            <Image
              src="/icons/icon-oem.png"
              width={80}
              height={80}
              alt="thongpaisal oem"
            />
          </ImageContainer>
          <ButtonContract>ข้อมูลติดต่อ</ButtonContract>
        </TextOverlay>
      </Box>
    </FullScreenWrapper>
  );
}
