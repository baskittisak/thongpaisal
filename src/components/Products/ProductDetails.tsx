import { useRef } from "react";
import { ParamValue } from "next/dist/server/request/params";
import Slider, { Settings } from "react-slick";
import { Col, Row, Space, Typography } from "antd";
import {
  TORQUE_ROD_BUSH_BOGIE,
  TORQUE_ROD_BUSH_CHINESE,
  TORQUE_ROD_BUSH_CRANE,
  TORQUE_ROD_BUSH_SCANIA,
} from "@/constant/torque-rod-bush";
import styled from "styled-components";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "../Box";

const { Title } = Typography;

interface ProductDetailsProps {
  productType: ParamValue;
  pathName: string;
}

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  padding: 36px 150px;

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

const Content = styled.div`
  background-color: rgba(255, 49, 48, 0.7);
  width: 100%;
  padding: 12px;
  border-radius: 24px;
  margin-left: 12px;

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
  width: 30%;
  height: 60px;
  font-size: 1.5rem;
  margin-left: 24px;

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
  productType,
  pathName,
}: ProductDetailsProps) {
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbSliderRef = useRef<Slider | null>(null);

  const mainSettings: Settings = {
    asNavFor: thumbSliderRef.current as Slider | undefined,
    arrows: false,
    fade: true,
  };

  const thumbSettings: Settings = {
    asNavFor: mainSliderRef.current as Slider | undefined,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
  };

  if (!mainSliderRef || !thumbSliderRef) return null;

  const products =
    productType === "bogie"
      ? TORQUE_ROD_BUSH_BOGIE
      : productType === "chinese"
      ? TORQUE_ROD_BUSH_CHINESE
      : productType === "scania"
      ? TORQUE_ROD_BUSH_SCANIA
      : TORQUE_ROD_BUSH_CRANE;

  const productDetail = products.find((product) => product.link === pathName);

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
            <Box $align="center">
              <Image
                width={80}
                height={80}
                src="/icons/products/torque-rod-bush/icon-product-code.png"
                alt="torque-rod-bush"
              />
              <Content>
                <Title level={1}>AP-78-410</Title>
              </Content>
            </Box>
            <Box $align="center">
              <Image
                width={80}
                height={80}
                src="/icons/products/torque-rod-bush/icon-type-crane.png"
                alt="torque-rod-bush"
              />
              <Content>
                <Title level={1}>ใช้ได้ในรถเครน</Title>
              </Content>
            </Box>
            <Box $align="center">
              <Image
                width={80}
                height={80}
                src="/icons/products/torque-rod-bush/icon-move.png"
                alt="torque-rod-bush"
              />
              <Content>
                <Title level={1}>แกนหมุนได้</Title>
              </Content>
            </Box>
            <Box $align="center">
              <Image
                width={80}
                height={80}
                src="/icons/products/torque-rod-bush/icon-weight.png"
                alt="torque-rod-bush"
              />
              <Content>
                <Title level={1}>30+T</Title>
              </Content>
            </Box>
          </SpaceContainer>
          <Box $align="center" $justify="center">
            <Title level={2}>ID: {productDetail?.id}</Title>
            <ButtonEvaluate>ประเมินราคา</ButtonEvaluate>
          </Box>
        </Col>
      </Row>
    </FullScreenWrapper>
  );
}
