import { Col, Row, Space, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  overflow: hidden;
  padding: 48px 150px;
  background-color: #fff;

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    padding: 36px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const RowContainer = styled(Row)`
  height: 100%;
`;

const Description = styled(Col)`
  margin: auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    height: 36vh;
  }
`;

const SpaceContainer = styled(Space)`
  @media (max-width: 1200px) {
    width: 100%;
    align-items: center;
    text-align: center;

    .detail {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export default function ContactUsMap() {
  return (
    <FullScreenWrapper>
      <Content>
        <RowContainer gutter={[32, 32]}>
          <Col xl={16} lg={24} sm={24} xs={24}>
            <ImageWrapper>
              <Image
                src="/images/image-contact-us-map.png"
                fill
                alt="thongpaisal"
              />
            </ImageWrapper>
          </Col>
          <Description xl={8} lg={24} sm={24} xs={24}>
            <SpaceContainer direction="vertical" size={24}>
              <div className="detail">
                <Image
                  src="/icons/icon-logo.png"
                  width={80}
                  height={80}
                  alt="thongpaisal"
                />
                <Space direction="vertical" size={4}>
                  <Typography>134/1 ซอยเทียนทะเล 24 ถนนบางขุนเทียน</Typography>
                  <Typography>
                    - ชายทะเล แขวงท่าข้าม เขตบางขุนเทียน กรุงเทพมหานคร 10150
                  </Typography>
                  <Typography>โทรศัพท์ : 09-3559-8266</Typography>
                  <Typography>อีเมล : thongpaisalgroup@gmail.com</Typography>
                </Space>
              </div>
              <Space direction="vertical" size={4}>
                <Typography>8.00 น. ถึง 17.00 น.</Typography>
                <Typography>โทรศัพท์ : 09-3559-8266</Typography>
                <Typography>สุดสัปดาห์รับเฉพาะผู้ที่นัดล่วงหน้า</Typography>
              </Space>
            </SpaceContainer>
          </Description>
        </RowContainer>
      </Content>
    </FullScreenWrapper>
  );
}
