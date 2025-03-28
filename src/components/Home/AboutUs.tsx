"use client";
import { useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import Box from "@/components/Box";
import styled from "styled-components";

const { Title } = Typography;

interface SizingProps {
  title: React.ComponentProps<typeof Typography.Title>["level"];
  subtitle: React.ComponentProps<typeof Typography.Title>["level"];
}

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh + 69px);
  overflow: hidden;
  padding: 36px 150px;
  background-color: rgba(0, 0, 0, 0.3);

  .ant-typography {
    color: #fff !important;
  }

  .title {
    font-size: 3.5rem;
    font-weight: bold;
    display: block;
  }

  .subtitle {
    font-size: 2.5rem;
    font-weight: normal;
    display: block;
  }

  @media (max-width: 1316px) {
    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 2rem;
    }
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    padding: 36px;
  }
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;

const TitleWrapper = styled.div`
  margin: 24px 0;
`;

const Paragraph = styled.div`
  background-color: #004aad;
  padding: 24px;

  .ant-typography {
    line-height: 1.5;
  }

  @media (max-width: 1200px) {
    margin-bottom: 24px;
  }
`;

const ColImage = styled(Col)`
  max-width: 35%;
  margin-left: auto;

  @media (max-width: 1200px) {
    max-width: 80%;
    margin: auto;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    margin: auto;
  }
`;

const ImageContainer = styled.div<{ full?: "true" }>`
  position: relative;
  width: ${({ full }) => (full === "true" ? "100%" : "50%")};
  height: ${({ full }) =>
    full === "true" ? "calc(60vh - 36px)" : "calc(40vh - 36px)"};
`;

export default function AboutUs() {
  const [sizing, setSizing] = useState<SizingProps>({
    title: 2,
    subtitle: 4,
  });

  useEffect(() => {
    const updateSizing = () => {
      if (window.innerWidth <= 768) {
        setSizing({
          title: 3,
          subtitle: 5,
        });
      } else {
        setSizing({
          title: 2,
          subtitle: 4,
        });
      }
    };

    updateSizing();
    window.addEventListener("resize", updateSizing);

    return () => window.removeEventListener("resize", updateSizing);
  }, []);

  return (
    <FullScreenWrapper>
      <BackgroundImage
        src="/images/image-home-about-us.png"
        alt="thongpaisal about us"
        fill
        priority
      />
      <Row>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Box $align="center" $cursor="pointer">
            <Image
              src="/icons/icon-logo.png"
              width={100}
              height={100}
              alt="thongpaisal"
            />
            <Box $direction="column">
              <Title level={sizing.title}>บริษัท ทองไพศาล จำกัด</Title>
              <Title level={sizing.subtitle}>THONGPAISAL CO.,LTD.</Title>
            </Box>
          </Box>
          <TitleWrapper>
            <Title className="title">
              เราเป็นธุรกิจในอุตสาหกรรมอะไหล่รถยนต์
            </Title>
            <Title className="subtitle">
              We are a business in the automotive spare parts industry.
            </Title>
          </TitleWrapper>
          <Paragraph>
            <Title level={3}>
              บริษัทฯ
              มุ่งมั่นผลิตชิ้นส่วนช่วงล่างรถบรรทุกด้วยเทคโนโลยีที่ทันสมัย
              ความแม่นยำในการผลิตถือเป็นหัวใจสำคัญของเรา
              เพื่อให้ได้ผลิตภัณฑ์ที่มีคุณภาพสูงสุดตามมาตรฐานสากล
              เรารับผลิตงานสั่งทำ OEM ตามแบบที่ลูกค้าต้องการ
              เพื่อตอบสนองความต้องการของตลาดที่หลากหลาย
              และพร้อมส่งมอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าทุกท่าน
            </Title>
          </Paragraph>
        </Col>
        <ColImage xl={12} lg={24} md={24} sm={24} xs={24}>
          <ImageContainer full="true">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/image-home-about-us-1.jpg"
              alt=""
            />
          </ImageContainer>
          <Box>
            <ImageContainer>
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/image-home-about-us-2.jpg"
                alt=""
              />
            </ImageContainer>
            <ImageContainer>
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/image-home-about-us-3.jpg"
                alt=""
              />
            </ImageContainer>
          </Box>
        </ColImage>
      </Row>
    </FullScreenWrapper>
  );
}
