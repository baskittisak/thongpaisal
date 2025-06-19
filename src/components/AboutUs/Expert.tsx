import { Col, Row, Space, Typography } from "antd";
import styled from "styled-components";
import Box from "@/components/Box";
import Image from "next/image";
import Link from "next/link";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px 200px;
  background-color: #f5f4f3;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    display: block;
  }

  @media (max-width: 1500px) {
    height: 100%;

    .title {
      font-size: 1.5rem;
    }
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
  margin-top: 24px;
  justify-content: center;
`;

const ColImage = styled(Col)`
  @media (max-width: 991px) {
    height: 30vh;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: fill;
  }

  @media (max-width: 991px) {
    object-fit: cover;
  }
`;

const Paragraph = styled.div`
  background-color: #004aad;
  padding: 24px;
  height: 100%;

  .ant-typography {
    color: #fff;
    line-height: 2;
  }
`;

const ButtonEvaluate = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #03bf62;
  color: #fff;
  border-radius: 8px;
  width: 20%;
  height: 60px;
  font-size: 1.5rem;
  font-family: var(--font-prompt), sans-serif;
  margin: auto;

  @media (max-width: 1024px) {
    font-size: 1rem;
    height: 55px;
    width: 40%;
  }
`;

const ColContent = styled(Col)`
  text-align: center;
`;

export default function Expert() {
  return (
    <FullScreenWrapper>
      <Content>
        <Box $justify="flex-end">
          <Space size={24}>
            <Image
              src="/icons/icon-made-in-thailand.png"
              width={80}
              height={80}
              alt="thongpaisal"
            />
            <Space direction="vertical">
              <Title>ทองไพศาล:</Title>
              <Title className="title">
                ผู้เชี่ยวชาญด้านการผลิตชิ้นงาน OEM ครบวงจร
              </Title>
            </Space>
          </Space>
        </Box>
        <RowContainer gutter={[0, 24]}>
          <ColImage xl={10} lg={10} sm={24} xs={24}>
            <ImageContainer>
              <Image
                fill
                src="/images/image-about-us-expert-1.jpg"
                alt="thongpaisal"
              />
            </ImageContainer>
          </ColImage>
          <Col xl={14} lg={14} sm={24} xs={24}>
            <Paragraph>
              <Title level={3}>
                สร้างสรรค์ผลิตภัณฑ์ที่ตอบโจทย์ความต้องการของคุณ ด้วยบริการ OEM
                จากทองไพศาล ในยุคที่การแข่งขันทางธุรกิจทวีความรุนแรง
                การสร้างความแตกต่างด้วยผลิตภัณฑ์ที่เป็นเอกลักษณ์ของตนเองจึงเป็นสิ่งสำคัญ
                ทองไพศาลเข้าใจถึงความต้องการนี้ และพร้อมให้บริการผลิตชิ้นงาน OEM
                (Original Equipment Manufacturer) แบบครบวงจร
                เพื่อตอบโจทย์ความต้องการของธุรกิจคุณ
              </Title>
            </Paragraph>
          </Col>
          <Col xl={24} lg={24} sm={24} xs={24} style={{ marginBottom: "16px" }}>
            <Link href="/contact-us">
              <ButtonEvaluate>ประเมินราคา</ButtonEvaluate>
            </Link>
          </Col>
          <ColContent xl={4} lg={4} sm={12} xs={24}>
            <Space direction="vertical" size="small" align="center">
              <Image
                src="/icons/icon-about-us-expert-1.png"
                width={150}
                height={150}
                alt=""
              />
              <Title level={3}>ปรึกษา</Title>
            </Space>
          </ColContent>
          <ColContent xl={4} lg={4} sm={12} xs={24}>
            <Space direction="vertical" size="small" align="center">
              <Image
                src="/icons/icon-about-us-expert-2.png"
                width={150}
                height={150}
                alt=""
              />
              <Title level={3}>ออกแบบ</Title>
            </Space>
          </ColContent>
          <ColContent xl={4} lg={4} sm={12} xs={24}>
            <Space direction="vertical" size="small" align="center">
              <Image
                src="/icons/icon-about-us-expert-3.png"
                width={150}
                height={150}
                alt=""
              />
              <Link href="/contact-us">
                <Title level={3}>ประเมินราคา</Title>
              </Link>
            </Space>
          </ColContent>
          <ColContent xl={4} lg={4} sm={12} xs={24}>
            <Space direction="vertical" size="small" align="center">
              <Image
                src="/icons/icon-about-us-expert-4.png"
                width={150}
                height={150}
                alt=""
              />
              <Title level={3}>ทำตัวอย่าง</Title>
            </Space>
          </ColContent>
          <ColContent xl={4} lg={4} sm={12} xs={24}>
            <Space direction="vertical" size="small" align="center">
              <Image
                src="/icons/icon-about-us-expert-5.png"
                width={150}
                height={150}
                alt=""
              />
              <Title level={3}>สั่งผลิต</Title>
            </Space>
          </ColContent>
          <ColContent xl={4} lg={4} sm={12} xs={24}>
            <Space direction="vertical" size="small" align="center">
              <Image
                src="/icons/icon-about-us-expert-6.png"
                width={150}
                height={150}
                alt=""
              />
              <Title level={3}>ดูแลหลังการขาย</Title>
            </Space>
          </ColContent>
        </RowContainer>
      </Content>
    </FullScreenWrapper>
  );
}
