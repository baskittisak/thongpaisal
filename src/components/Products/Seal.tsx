import { Card, Col, Row, Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";
import ProductCover from "@/components/Products/ProductCover";
import {
  SEAL_TRACTOR,
  SEAL_TRAILER,
  SEAL_HTNO,
  SEAL_ISUZU,
  SEAL_FUSO,
  SEAL_UD,
  SEAL_DUMP,
  // SEAL_PIG_SPUR,
} from "@/constant/seal";
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

export default function Seal() {
  return (
    <>
      <ProductCover type="seal" />
      <FullScreenWrapper>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ซีลรถบรรทุก/รถพ่วง
            </Title>
            <Title level={2} className="subtitle">
              SEAL TRAILER
            </Title>
          </Space>
        </Space>
        <RowContainer gutter={[24, 32]}>
          {SEAL_TRAILER.map((trailer) => (
            <ColProduct key={trailer.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={trailer.name} src={trailer.image} />}
              />
              <Link href={trailer.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ซีลรถไถ
        </Title>
        <RowContainer gutter={[24, 32]}>
          {SEAL_TRACTOR.map((tractor) => (
            <ColProduct
              key={tractor.name}
              xl={6}
              lg={8}
              sm={12}
              xs={24}
              style={{ display: tractor.noData ? "none" : "flex" }}
            >
              <CardContainer
                hoverable
                cover={<Image fill alt={tractor.name} src={tractor.image} />}
              />
              {tractor.noData && (
                <NoData>
                  <Title level={5}>ไม่มีข้อมูล</Title>
                </NoData>
              )}
              <Link href={tractor.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ซีล Hino
        </Title>
        <RowContainer gutter={[24, 32]}>
          {SEAL_HTNO.map((hino) => (
            <ColProduct key={hino.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={hino.name} src={hino.image} />}
              />
              <Link href={hino.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ซีลรถ ISUZU
        </Title>
        <RowContainer gutter={[24, 32]}>
          {SEAL_ISUZU.map((isuzu) => (
            <ColProduct key={isuzu.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={isuzu.name} src={isuzu.image} />}
              />
              <Link href={isuzu.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ซีลรถ FUSO
        </Title>
        <RowContainer gutter={[24, 32]}>
          {SEAL_FUSO.map((fuso) => (
            <ColProduct key={fuso.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={fuso.name} src={fuso.image} />}
              />
              <Link href={fuso.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ซีลรถ UD
        </Title>
        <RowContainer gutter={[24, 32]}>
          {SEAL_UD.map((ud) => (
            <ColProduct key={ud.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={ud.name} src={ud.image} />}
              />
              <Link href={ud.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Title level={1} className="title">
          ซีลกระบอกดั้มพ์
        </Title>
        <RowContainer gutter={[24, 32]}>
          {SEAL_DUMP.map((dump) => (
            <ColProduct key={dump.name} xl={6} lg={8} sm={12} xs={24}>
              <CardContainer
                hoverable
                cover={<Image fill alt={dump.name} src={dump.image} />}
              />
              <Link href={dump.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        {/* <Title level={1} className="title">
          ซีลกระเดือยหมู
        </Title>
        <RowContainer gutter={[24, 32]}>
          {SEAL_PIG_SPUR.map((spur) => (
            <ColProduct
              key={spur.name}
              xl={6}
              lg={8}
              sm={12}
              xs={24}
              style={{ display: spur.noData ? "none" : "flex" }}
            >
              <CardContainer
                hoverable
                cover={<Image fill alt={spur.name} src={spur.image} />}
              />
              {spur.noData && (
                <NoData>
                  <Title level={5}>ไม่มีข้อมูล</Title>
                </NoData>
              )}
              <Link href={spur.link} passHref>
                <ButtonProducts>ดูสินค้า</ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer> */}
      </FullScreenWrapper>
    </>
  );
}
