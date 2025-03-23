import { Col, Row, Space, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 48px 150px 48px;

  .ant-typography {
    color: #fff !important;
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

const Name = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;

    .text-name {
      display: none;
    }
  }
`;

const RowContainer = styled(Row)`
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    text-align: center;
    height: 700px;
  }
`;

const ColContent = styled(Col)`
  height: 300px;

  .content {
    font-weight: 400;
    margin-top: 24px !important;
  }

  @media (max-width: 1200px) {
    height: auto;
  }
`;

export default function Footer() {
  return (
    <FullScreenWrapper>
      <BackgroundImage
        src="/images/image-footer.png"
        alt="thongpaisal"
        fill
        priority
      />
      <Name>
        <Image
          src="/icons/icon-logo.png"
          width={80}
          height={80}
          alt="thongpaisal"
        />
        <Title level={2} className="text-name">
          บริษัท ทองไพศาล จำกัด
        </Title>
      </Name>
      <RowContainer gutter={[64, 32]}>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Title level={3}>บริษัท ทองไพศาล จำกัด</Title>
          <Title level={4} className="content">
            134/1 ซอยเทียนทะเล 24 ถนนบางขุนเทียน ชายทะเล แขวงท่าข้าม
            เขตบางขุนเทียน กทรุงเทพมหานคร 10150
          </Title>
          <Title level={4} className="content">
            โทรศัพท์ : 093-559-8266 <br /> อีเมล์ : thongpaisalgroup@gmail.com
          </Title>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Title level={3}>เวลาทำงาน</Title>
          <Title level={4} className="content">
            วันจันทร์ ถึง วันเสาร์ <br /> 8.00 น. ถึง 17.00 น.
          </Title>
          <Title level={4} className="content">
            สุดสัปดาห์รับเฉพาะผู้ที่นัดล่วงหน้า
          </Title>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Title level={3}>ติดตามข่าวสารอยู่เสมอ</Title>
          <Space className="content">
            <Image
              src="/icons/icon-facebook.png"
              width={32}
              height={32}
              alt="thongpaisal"
            />
            <Image
              src="/icons/icon-instagram.png"
              width={32}
              height={32}
              alt="thongpaisal"
            />
            <Image
              src="/icons/icon-twitter.png"
              width={32}
              height={32}
              alt="thongpaisal"
            />
          </Space>
        </ColContent>
      </RowContainer>
    </FullScreenWrapper>
  );
}
