import { Card, Col, Row, Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";
import ProductCover from "@/components/Products/ProductCover";
import {
  BUSH_BUSHINGS,
  BUSH_RUBBER,
  BUSH_SHOCKPROOF,
  BUSH_SLANT,
  BUSH_LOCK_DUMP,
} from "@/constant/bush";
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
  position: relative;
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

const NoData = styled.div`
  position: absolute;
  background: #ff3130;
  padding: 16px;
  border-radius: 6px;

  .ant-typography {
    color: #fff;
  }
`;

export default function Bush() {
  return (
    <>
      <ProductCover type="bush" />
      <FullScreenWrapper>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              บูช ช่วงล่างรถ
            </Title>
            <Title level={2} className="subtitle">
              BUSHINGS
            </Title>
          </Space>
        </Space>
        <RowContainer gutter={[24, 32]}>
          {BUSH_BUSHINGS.map((busing) => (
            <ColProduct key={busing.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={busing.name} src={busing.image} />}
              />
              {busing.noData && (
                <NoData>
                  <Title level={5}>ไม่มีข้อมูล</Title>
                </NoData>
              )}
              <Link href={busing.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ยาง
        </Title>
        <RowContainer gutter={[24, 32]}>
          {BUSH_RUBBER.map((rubber) => (
            <ColProduct key={rubber.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={rubber.name} src={rubber.image} />}
              />
              {rubber.noData && (
                <NoData>
                  <Title level={5}>ไม่มีข้อมูล</Title>
                </NoData>
              )}
              <Link href={rubber.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          กันกระแทก
        </Title>
        <RowContainer gutter={[24, 32]}>
          {BUSH_SHOCKPROOF.map((shockproof) => (
            <ColProduct key={shockproof.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={
                  <Image fill alt={shockproof.name} src={shockproof.image} />
                }
              />
              <Link href={shockproof.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          เฉียง
        </Title>
        <RowContainer gutter={[24, 32]}>
          {BUSH_SLANT.map((slant) => (
            <ColProduct key={slant.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={slant.name} src={slant.image} />}
              />
              <Link href={slant.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ตัวหนอนล็อคดั๊มพ์
        </Title>
        <RowContainer gutter={[24, 32]}>
          {BUSH_LOCK_DUMP.map((lock) => (
            <ColProduct key={lock.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={lock.name} src={lock.image} />}
              />
              <Link href={lock.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
      </FullScreenWrapper>
    </>
  );
}
