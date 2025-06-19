"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { ParamValue } from "next/dist/server/request/params";
import Slider, { Settings } from "react-slick";
import { Col, Row, Space, Typography } from "antd";
import {
  TORQUE_ROD_BUSH_BOGIE,
  TORQUE_ROD_BUSH_CHINESE,
  TORQUE_ROD_BUSH_CRANE,
  TORQUE_ROD_BUSH_SCANIA,
} from "@/constant/torque-rod-bush";
import {
  SEAL_TRACTOR,
  SEAL_TRAILER,
  SEAL_HTNO,
  SEAL_ISUZU,
  SEAL_FUSO,
  SEAL_UD,
  SEAL_DUMP,
  SEAL_PIG_SPUR,
} from "@/constant/seal";
import {
  BUSH_BUSHINGS,
  BUSH_RUBBER,
  BUSH_SHOCKPROOF,
  BUSH_SLANT,
  BUSH_LOCK_DUMP,
} from "@/constant/bush";
import styled from "styled-components";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "../Box";
import Link from "next/link";

const { Title } = Typography;

interface ProductDetailsProps {
  type: "torqueRodBush" | "seal" | "bush";
  productType: ParamValue;
  pathName: string;
}

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  padding: 36px 200px;

  @media (max-width: 768px) {
    padding: 36px;
  }
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;

const MainImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ThumbImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  padding: 0 12px;
`;

const Brand = styled.div`
  background-color: #ff3130;
  width: 100%;
  padding: 12px;
  border-radius: 24px;
  margin: 12px 0;

  .ant-typography {
    color: #fff;
  }

  @media (max-width: 768px) {
    .ant-typography {
      font-size: 1.5rem;
    }
  }
`;

const Content = styled.div<{ type?: "empty" }>`
  background-color: rgba(255, 49, 48, 0.7);
  width: 100%;
  padding: 12px;
  border-radius: 24px;
  margin-left: 12px;

  height: ${({ type }) => (type === "empty" ? "120px" : "auto")};

  .ant-typography {
    color: #fff;
  }

  @media (max-width: 768px) {
    .ant-typography {
      font-size: 1.5rem;
    }
  }
`;

const SpaceContainer = styled(Space)`
  width: 100%;
  margin: 12px 0 24px;

  .ant-space-item {
    width: 100%;
  }
`;

const ButtonEvaluate = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #03bf62;
  color: #fff;
  border-radius: 8px;
  width: 100%;
  height: 60px;
  font-size: 1.5rem;
  margin-left: 24px;
  font-family: var(--font-prompt), sans-serif;

  @media (max-width: 1024px) {
    font-size: 1rem;
    height: 55px;
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 70%;
    height: 40px;
  }
`;

export default function ProductDetails({
  type,
  productType,
  pathName,
}: ProductDetailsProps) {
  const mainSliderRef = useRef<Slider>(null!);
  const thumbSliderRef = useRef<Slider>(null!);

  const [sliderReady, setSliderReady] = useState(false);

  useEffect(() => {
    if (mainSliderRef.current && thumbSliderRef.current) {
      setSliderReady(true);
    }
  }, []);

  const mainSettings: Settings = {
    asNavFor: sliderReady ? (thumbSliderRef.current as Slider) : undefined,
    arrows: false,
    fade: true,
  };

  const thumbSettings: Settings = {
    asNavFor: sliderReady ? (mainSliderRef.current as Slider) : undefined,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
  };

  const productsTorque = useMemo(() => {
    return productType === "bogie"
      ? TORQUE_ROD_BUSH_BOGIE
      : productType === "chinese"
      ? TORQUE_ROD_BUSH_CHINESE
      : productType === "scania"
      ? TORQUE_ROD_BUSH_SCANIA
      : TORQUE_ROD_BUSH_CRANE;
  }, [productType]);

  const productsSeal = useMemo(() => {
    return productType === "tractor"
      ? SEAL_TRACTOR
      : productType === "trailer"
      ? SEAL_TRAILER
      : productType === "hino"
      ? SEAL_HTNO
      : productType === "isuzu"
      ? SEAL_ISUZU
      : productType === "fuso"
      ? SEAL_FUSO
      : productType === "ud"
      ? SEAL_UD
      : productType === "dump"
      ? SEAL_DUMP
      : SEAL_PIG_SPUR;
  }, [productType]);

  const productsBush = useMemo(() => {
    return productType === "bushings"
      ? BUSH_BUSHINGS
      : productType === "rubber"
      ? BUSH_RUBBER
      : productType === "shockproof"
      ? BUSH_SHOCKPROOF
      : productType === "slant"
      ? BUSH_SLANT
      : BUSH_LOCK_DUMP;
  }, [productType]);

  const products = useMemo(() => {
    return type === "torqueRodBush"
      ? productsTorque
      : type === "seal"
      ? productsSeal
      : productsBush;
  }, [productsSeal, productsTorque, productsBush, type]);

  const productDetail = useMemo(() => {
    return products.find((product) => product.link === pathName);
  }, [pathName, products]);

  return (
    <FullScreenWrapper>
      <BackgroundImage
        src="/images/image-product-details-1.png"
        alt="thongpaisal"
        fill
        priority
      />
      <Row gutter={[64, 64]}>
        <Col xl={12} lg={24} sm={24} xs={24}>
          <Slider {...mainSettings} ref={mainSliderRef}>
            {productDetail?.images?.map((src, index) => (
              <div key={index}>
                <MainImage
                  src={src}
                  alt={`main-${index}`}
                  width={700}
                  height={400}
                />
              </div>
            ))}
          </Slider>
          <br />
          <Slider {...thumbSettings} ref={thumbSliderRef}>
            {productDetail?.images?.map((src, index) => (
              <div key={index}>
                <ThumbImage
                  className="thumb"
                  src={src}
                  alt={`thumb-${index}`}
                  width={120}
                  height={80}
                />
              </div>
            ))}
          </Slider>
        </Col>
        <Col xl={12} lg={24} sm={24} xs={24}>
          <Title level={1}>{productDetail?.type}</Title>
          <Brand>
            <Title level={1}>{productDetail?.kind}</Title>
          </Brand>
          <Title level={4}>รายละเอียดสินค้า</Title>
          <SpaceContainer direction="vertical" size={16}>
            {productDetail?.details?.map((detail) => (
              <Box $align="center" key={detail.name}>
                {detail.icons && (
                  <Image width={80} height={80} src={detail.icons} alt={type} />
                )}
                {detail.detail ? (
                  <Content>
                    <Title level={1}>{detail.detail}</Title>
                  </Content>
                ) : (
                  <Content type="empty" />
                )}
              </Box>
            ))}
          </SpaceContainer>
          <Box $align="center" $justify="center">
            {/* <Title level={2}>ID: {productDetail?.id}</Title> */}
            <Link href="/contact-us">
              <ButtonEvaluate>ขอใบเสนอราคา</ButtonEvaluate>
            </Link>
          </Box>
        </Col>
      </Row>
    </FullScreenWrapper>
  );
}
