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
  padding: 36px 150px;
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
`;

const ImageWolf = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  object-fit: fill;
`;

const CardContainer = styled(Card)`
  height: 220px;
  width: 220px;

  img {
    object-fit: contain;
  }
`;

const RowContainer = styled(Row)`
  margin: 24px 0 56px;
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
  width: 200px;
  font-size: 1rem;
  font-family: var(--font-prompt), sans-serif;
  margin-top: 12px;
`;

export default function TorqueRodBush() {
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
              <CardContainer
                hoverable
                cover={<Image fill alt={bogie.name} src={bogie.image} />}
              />
              <Link href={bogie.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
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
              <CardContainer
                hoverable
                cover={<Image fill alt={scania.name} src={scania.image} />}
              />
              <Link href={scania.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
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
              <CardContainer
                hoverable
                cover={<Image fill alt={chinese.name} src={chinese.image} />}
              />
              <Link href={chinese.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
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
              <CardContainer
                hoverable
                cover={<Image fill alt={crane.name} src={crane.image} />}
              />
              <Link href={crane.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
      </FullScreenWrapper>
    </>
  );
}
