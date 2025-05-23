import { Col, Row, Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px 200px;
  background-color: #f5f4f3;

  img {
    object-fit: cover;
  }

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
  text-align: center;
  margin-bottom: 24px;

  @media (max-width: 1200px) {
    .image-1 {
      position: relative !important;
      height: 40vh !important;
    }
  }
`;

const Paragraph = styled.div`
  background-color: #004aad;
  padding: 24px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;

  @media (max-width: 1250px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .ant-typography {
    color: #fff;
  }
`;

const Topic = styled(Space)`
  white-space: pre;
  text-align: center;
  margin-right: 24px;
  justify-content: center;

  .ant-typography {
    font-size: 3rem;
    font-style: italic;
    font-family: var(--font-antonio), sans-serif !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const RowWrapper = styled(Row)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled(Space)`
  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;

const ImageWolf = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 16px;
  object-fit: fill;
`;

const RowImage = styled(Row)`
  height: 100%;

  @media (max-width: 1200px) {
    img {
      position: relative !important;
      height: 50vh !important;
    }
  }
`;

export default function TpsTechnology() {
  return (
    <FullScreenWrapper>
      <Content>
        <RowContainer gutter={[32, 32]}>
          <Col xl={8} lg={24} sm={24} xs={24}>
            <Image
              className="image-1"
              src="/images/image-about-us-tps-1.png"
              fill
              alt=""
            />
          </Col>
          <Col xl={16} lg={24} sm={24} xs={24}>
            <RowWrapper gutter={[32, 32]}>
              <Col xl={20} lg={24} sm={24} xs={24}>
                <Paragraph>
                  <Topic direction="vertical">
                    <Title level={1}>TPS</Title>
                    <Title level={1}>Technology</Title>
                  </Topic>
                  <Title level={4}>
                    ทองไพศาล
                    ยังคงเสริมความแข็งแกร่งให้กับองค์กรและมองหาเทคโนโลยีใหม่ๆ
                    เพื่อตอบสนองความต้องการที่เพิ่มขึ้นของพันธมิตร OEM <br />
                    ด้วยการพัฒนาผลิตภัณฑ์ใหม่และการขาย
                  </Title>
                </Paragraph>
              </Col>
              <Col xl={4} lg={24} sm={24} xs={24}>
                <Icons direction="vertical" align="center">
                  <ImageWolf
                    src="/icons/icon-wolf-bigto.png"
                    width={80}
                    height={80}
                    alt=""
                  />
                  <Image
                    src="/icons/icon-made-in-thailand.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                </Icons>
              </Col>
            </RowWrapper>
          </Col>
        </RowContainer>
        <Row gutter={[32, 32]}>
          <Col xl={8} lg={24} sm={24} xs={24}>
            <Paragraph>
              <Space direction="vertical" size={32}>
                <Title level={4} style={{ width: "87%" }}>
                  ลดต้นทุน: การควบคุมคุณภาพที่ดี จะช่วยลดข้อผิดพลาด ลดของเสีย
                  และลดค่าใช้จ่ายในการแก้ไขปัญหา
                </Title>
                <Title level={4}>
                  สร้างความน่าเชื่อถือ:
                  ธุรกิจที่มีการควบคุมคุณภาพที่ดีจะได้รับความน่าเชื่อถือจากลูกค้าและคู่ค้า
                </Title>
                <Title level={4}>
                  เพิ่มประสิทธิภาพ:การควบคุมคุณภาพช่วยปรับปรุงกระบวนการทำงานให้มีประสิทธิภาพมากขึ้น
                </Title>
              </Space>
            </Paragraph>
          </Col>
          <Col xl={16} lg={24} sm={24} xs={24}>
            <RowImage gutter={[16, 16]}>
              <Col xl={8} lg={24} sm={24} xs={24}>
                <Image src="/images/image-about-us-tps-2.png" fill alt="" />
              </Col>
              <Col xl={8} lg={24} sm={24} xs={24}>
                <Image src="/images/image-about-us-tps-3.png" fill alt="" />
              </Col>
              <Col xl={8} lg={24} sm={24} xs={24}>
                <Image src="/images/image-about-us-tps-4.png" fill alt="" />
              </Col>
            </RowImage>
          </Col>
        </Row>
      </Content>
    </FullScreenWrapper>
  );
}
