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

const ImageWolf = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  object-fit: fill;
`;

export default function Seal() {
  const transform = (text: string) => {
    return text.replace(/^BIGTO\s*/, "");
  };

  return (
    <>
      <ProductCover type="seal" />
      <FullScreenWrapper>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ซีลล้อรถพ่วง
            </Title>
            <Title level={2} className="subtitle">
              SEAL TRAILER
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
          {SEAL_TRAILER.map((trailer) => (
            <ColProduct key={trailer.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={trailer.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={trailer.name} src={trailer.image} />}
                />
                <ButtonProducts>
                  {transform(trailer.details[1].detail)}
                </ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ซีลรถไถ
            </Title>
            <Title level={2} className="subtitle">
              SEAL TRACTOR
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
          {SEAL_TRACTOR.map((tractor) => (
            <ColProduct
              key={tractor.name}
              xl={6}
              lg={8}
              sm={12}
              xs={24}
              style={{ display: tractor.noData ? "none" : "flex" }}
            >
              <Link href={tractor.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={tractor.name} src={tractor.image} />}
                />
                {tractor.noData && (
                  <NoData>
                    <Title level={5}>ไม่มีข้อมูล</Title>
                  </NoData>
                )}
                <ButtonProducts>
                  {transform(tractor.details[1].detail)}
                </ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ซีล HINO
            </Title>
            <Title level={2} className="subtitle">
              SEAL HINO
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
          {SEAL_HTNO.map((hino) => (
            <ColProduct key={hino.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={hino.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={hino.name} src={hino.image} />}
                />
                <ButtonProducts>
                  {transform(hino.details[1].detail)}
                </ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ซีล ISUZU
            </Title>
            <Title level={2} className="subtitle">
              SEAL ISUZU
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
          {SEAL_ISUZU.map((isuzu) => (
            <ColProduct key={isuzu.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={isuzu.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={isuzu.name} src={isuzu.image} />}
                />
                <ButtonProducts>
                  {transform(isuzu.details[1].detail)}
                </ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ซีล FUSO
            </Title>
            <Title level={2} className="subtitle">
              SEAL FUSO
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
          {SEAL_FUSO.map((fuso) => (
            <ColProduct key={fuso.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={fuso.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={fuso.name} src={fuso.image} />}
                />
                <ButtonProducts>
                  {transform(fuso.details[1].detail)}
                </ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
        <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ซีล UD
            </Title>
            <Title level={2} className="subtitle">
              SEAL UD
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
          {SEAL_UD.map((ud) => (
            <ColProduct key={ud.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={ud.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={ud.name} src={ud.image} />}
                />
                <ButtonProducts>
                  {transform(ud.details[1].detail)}
                </ButtonProducts>
              </Link>
            </ColProduct>
          ))}
        </RowContainer>
                <Space>
          <Space direction="vertical" size={4}>
            <Title level={1} className="title">
              ซีลกระบอกดั้มพ์
            </Title>
            <Title level={2} className="subtitle">
              SEAL DUMPER
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
          {SEAL_DUMP.map((dump) => (
            <ColProduct key={dump.name} xl={6} lg={8} sm={12} xs={24}>
              <Link href={dump.link} passHref>
                <CardContainer
                  hoverable
                  cover={<Image fill alt={dump.name} src={dump.image} />}
                />
                <ButtonProducts>
                  {transform(dump.details[1].detail)}
                </ButtonProducts>
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
