import { Card, Col, Row, Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";
import ProductCover from "@/components/Products/ProductCover";
import {
  TORQUE_ROD_BUSH_BOGIE,
  TORQUE_ROD_BUSH_CHINESE,
  TORQUE_ROD_BUSH_CRANE,
  TORQUE_ROD_BUSH_SCANIA,
} from "@/constant/torque-rod-bush";
import Link from "next/link";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  padding: 36px 200px;
  background-color: #ffffff;

  .title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding: 36px;
  }

  .ant-col-xl-6 {
    max-width: 30%;
  }

  @media (min-width: 1672px) {
    .ant-col-xl-6:last-child {
      margin-right: auto;
    }
  }

  @media (max-width: 1400px) {
    .ant-col-xl-6 {
      max-width: 50%;
    }
  }

  @media (max-width: 998px) {
    .ant-col-xl-6 {
      max-width: 75%;
    }
  }
`;

const ImageWolf = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  object-fit: fill;
`;

const CardContainer = styled(Card)`
  height: 300px;
  width: 300px;
`;

const RowContainer = styled(Row)`
  margin: 24px 0 56px;
  justify-content: center;
`;

const ColProduct = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonProducts = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #ff3130;
  color: #fff;
  border-radius: 8px;
  height: 40px;
  width: 300px;
  font-size: 1rem;
  font-family: var(--font-prompt), sans-serif;
  margin-top: 12px;
`;

export default function TorqueRodBush() {
  const transform = (text: string) => {
    return text.replace(/^BIGTO\s*/, "");
  };

  return (
    <>
      <ProductCover type="torqueRodBush" />
      <FullScreenWrapper>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ลูกหมากเพลาโบกี้
            </Title>
            <Title level={2} className="subtitle">
              TORQUE ROD BUSHING
            </Title>
          </Space>
          <ImageWolf
            src="/icons/icon-wolf-bigto.png"
            width={60}
            height={60}
            alt=""
          />
        </Space>
        <RowContainer gutter={[24, 32]}>
          {TORQUE_ROD_BUSH_BOGIE.map((bogie) => (
            <ColProduct key={bogie.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={bogie.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={bogie.name} src={bogie.image} />}
                />
                <ButtonProducts>{transform(bogie.type)}</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ลูกหมาก SCANIA
        </Title>
        <RowContainer gutter={[24, 32]}>
          {TORQUE_ROD_BUSH_SCANIA.map((scania) => (
            <ColProduct key={scania.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={scania.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={scania.name} src={scania.image} />}
                />
                <ButtonProducts>{transform(scania.type)}</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ลูกหมากรถจีน
        </Title>
        <RowContainer gutter={[24, 32]}>
          {TORQUE_ROD_BUSH_CHINESE.map((chinese) => (
            <ColProduct key={chinese.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={chinese.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={chinese.name} src={chinese.image} />}
                />
                <ButtonProducts>{transform(chinese.type)}</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ลูกหมากเครน
        </Title>
        <RowContainer gutter={[24, 32]}>
          {TORQUE_ROD_BUSH_CRANE.map((crane) => (
            <ColProduct key={crane.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={crane.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={crane.name} src={crane.image} />}
                />
                <ButtonProducts>{transform(crane.type)}</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
      </FullScreenWrapper>
    </>
  );
}
