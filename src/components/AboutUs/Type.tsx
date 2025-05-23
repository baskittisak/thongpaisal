import { Col, Row, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";
import Box from "@/components/Box";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px 200px;
  background-color: rgba(0, 0, 0, 0.3);

  .ant-typography {
    color: #fff !important;
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    display: block;
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

const RowContainer = styled(Row)`
  margin: 24px 0 64px;
  justify-content: center;
`;

const Paragraph = styled.div`
  position: relative;
  display: flex;
  background-color: #004aad;
  padding: 24px;
  height: 100%;
  border-radius: 16px;

  .ant-typography {
    color: #fff;
  }

  .index {
    white-space: pre;
    margin-right: 16px !important;
  }

  .topic {
    margin-bottom: 12px !important;
  }

  img {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ColImage = styled(Col)`
  height: 25vh;

  @media (max-width: 991px) {
    height: 40vh;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export default function Type() {
  return (
    <FullScreenWrapper>
      <BackgroundImage
        src="/images/image-about-us-type.png"
        alt="thongpaisal about us"
        fill
        priority
      />
      <Content>
        <Title className="title">ประเภทงาน OEM</Title>
        <RowContainer gutter={[32, 32]}>
          <Col xl={8} lg={12} sm={24} xs={24}>
            <Paragraph>
              <Title level={1} className="index">
                01
              </Title>
              <Box $direction="column">
                <Title level={3} className="topic">
                  ชิ้นงานเหล็กติดยาง
                </Title>
                <Title level={5}>
                  ชิ้นงานเหล็กติดยาง หรือที่เรียกว่า &quot;Rubber to Metal
                  Bonding&quot;
                  คือกระบวนการผลิตที่นำชิ้นส่วนยางมาเชื่อมติดกับชิ้นส่วนโลหะ
                  เช่น เหล็ก อลูมิเนียม หรือสแตนเลส
                  โดยมีวัตถุประสงค์เพื่อสร้างชิ้นส่วนที่มีคุณสมบัติที่ผสมผสานระหว่างความแข็งแรงของโลหะและความยืดหยุ่นของยาง
                </Title>
              </Box>
              <Image
                src="/icons/icon-about-us-type.png"
                width={24}
                height={24}
                alt=""
              />
            </Paragraph>
          </Col>
          <Col xl={8} lg={12} sm={24} xs={24}>
            <Paragraph>
              <Title level={1} className="index">
                02
              </Title>
              <Box $direction="column">
                <Title level={3} className="topic">
                  ชิ้นงานยาง
                </Title>
                <Title level={5}>
                  งานยางเป็นอุตสาหกรรมที่เกี่ยวข้องกับการผลิต การแปรรูป
                  และการจำหน่ายผลิตภัณฑ์ที่ทำจากยางพารา
                  ทั้งยางธรรมชาติและยางสังเคราะห์
                  ซึ่งมีความสำคัญต่อชีวิตประจำวันและภาคอุตสาหกรรมอย่างมาก
                </Title>
              </Box>
              <Image
                src="/icons/icon-about-us-type.png"
                width={24}
                height={24}
                alt=""
              />
            </Paragraph>
          </Col>
          <Col xl={8} lg={12} sm={24} xs={24}>
            <Paragraph>
              <Title level={1} className="index">
                03
              </Title>
              <Box $direction="column">
                <Title level={3} className="topic">
                  งานเหล็ก / พลาสติก
                </Title>
                <Title level={5}>
                  งานเหล็กเป็นอุตสาหกรรมที่เกี่ยวข้องกับการผลิต การแปรรูป
                  และการใช้งานเหล็ก
                  ซึ่งเป็นวัสดุที่มีความสำคัญอย่างยิ่งในชีวิตประจำวันและในภาคอุตสาหกรรมต่างๆ
                  มากมาย
                </Title>
              </Box>
              <Image
                src="/icons/icon-about-us-type.png"
                width={24}
                height={24}
                alt=""
              />
            </Paragraph>
          </Col>
        </RowContainer>
        <Row gutter={[32, 32]}>
          <ColImage xl={6} lg={12} sm={24} xs={24}>
            <ImageContainer>
              <Image src="/images/image-about-us-type-1.png" fill alt="" />
            </ImageContainer>
          </ColImage>
          <ColImage xl={6} lg={12} sm={24} xs={24}>
            <ImageContainer>
              <Image src="/images/image-about-us-type-2.png" fill alt="" />
            </ImageContainer>
          </ColImage>
          <ColImage xl={6} lg={12} sm={24} xs={24}>
            <ImageContainer>
              <Image src="/images/image-about-us-type-3.png" fill alt="" />
            </ImageContainer>
          </ColImage>
          <ColImage xl={6} lg={12} sm={24} xs={24}>
            <ImageContainer>
              <Image src="/images/image-about-us-type-4.png" fill alt="" />
            </ImageContainer>
          </ColImage>
        </Row>
      </Content>
    </FullScreenWrapper>
  );
}
