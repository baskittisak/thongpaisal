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

const CardContainer = styled(Card)`
  height: 300px;
  width: 300px;

  img {
    object-fit: contain;
  }
`;

const RowContainer = styled(Row)`
  margin: 24px 0 56px;
  justify-content: center;
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
  width: 300px;
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
  const transform = (text: string) => {
    return text.replace(/^BIGTO\s*/, "");
  };

  return (
    <>
      <ProductCover type="bush" />
      <FullScreenWrapper>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              บูชช่วงล่างรถบรรทุก
            </Title>
            <Title level={2} className="subtitle">
              BUSHINGS
            </Title>
          </Space>
        </Space>
        <RowContainer gutter={[24, 32]}>
          {BUSH_BUSHINGS.map((busing) => (
            <ColProduct
              key={busing.name}
              xl={6}
              lg={8}
              sm={12}
              xs={24}
              style={{ display: busing.noData ? "none" : "flex" }}
            >
              <Link href={busing.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={busing.name} src={busing.image} />}
                />
                {busing.noData && (
                  <NoData>
                    <Title level={5}>ไม่มีข้อมูล</Title>
                  </NoData>
                )}
                <ButtonProducts>{transform(busing.type)}</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          บูชช่วงล่างรถยนต์
        </Title>
        <RowContainer gutter={[24, 32]}>
          {[
            ...BUSH_RUBBER,
            ...BUSH_SHOCKPROOF,
            ...BUSH_SLANT,
            ...BUSH_LOCK_DUMP,
          ].map((car) => (
            <ColProduct
              key={car.name}
              xl={6}
              lg={8}
              sm={12}
              xs={24}
              style={{ display: car.noData ? "none" : "flex" }}
            >
              <Link href={car.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={car.name} src={car.image} />}
                />
                {car.noData && (
                  <NoData>
                    <Title level={5}>ไม่มีข้อมูล</Title>
                  </NoData>
                )}
                <ButtonProducts>{transform(car.type)}</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        {/* <Title level={1} className="title">
          กันกระแทก
        </Title>
        <RowContainer gutter={[24, 32]}>
          {BUSH_SHOCKPROOF.map((shockproof) => (
            <ColProduct key={shockproof.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={shockproof.link} passHref>
                <CardContainer
                  hoverable
                  cover={
                    <Image fill alt={shockproof.name} src={shockproof.image} />
                  }
                />
                <ButtonProducts>{transform(shockproof.type)}</ButtonProducts>
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
              <Link href={slant.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={slant.name} src={slant.image} />}
                />
                <ButtonProducts>{transform(slant.type)}</ButtonProducts>
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
              <Link href={lock.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={lock.name} src={lock.image} />}
                />
                <ButtonProducts>{transform(lock.type)}</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer> */}
      </FullScreenWrapper>
    </>
  );
}
