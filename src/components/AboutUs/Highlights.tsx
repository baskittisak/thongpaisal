import { Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";

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
    font-size: 10rem;
    white-space: pre;
    font-weight: bold;
    display: block;
  }

  .logo {
    border-radius: 16px;
  }

  .icon {
    position: absolute;
    bottom: 48px;
    right: 48px;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 992px) {
    .title {
      font-size: 6rem;
    }

    .icon {
      position: static;
      display: flex;
      margin: 32px auto 0;
    }
  }

  @media (max-width: 768px) {
    padding: 36px;
  }
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const Paragraph = styled(Space)`
  width: 70%;

  @media (max-width: 1200px) {
    height: 100%;
    margin-top: 24px;
  }

  .ant-typography {
    color: #fff;
    font-weight: 400;
  }

  ul {
    margin-left: 50px;
  }

  li {
    color: #fff;
  }
`;

export default function Highlights() {
  return (
    <FullScreenWrapper>
      <BackgroundImage
        src="/images/image-about-us-highlight.png"
        alt="thongpaisal about us"
        fill
        priority
      />
      <Content>
        <Space>
          <Image
            src="/icons/icon-bigto-logo.jpg"
            width={120}
            height={120}
            alt="bigto"
            className="logo"
          />
          <Title className="title">BIGTO</Title>
        </Space>
        <Paragraph direction="vertical" size={48}>
          <Title level={3}>
            บิ๊กโต (BIGTO)
            เป็นแบรนด์ผู้ผลิตชิ้นส่วนยานยนต์สำหรับรถบรรทุกที่มีชื่อเสียงในประเทศไทย
            <br />
            โดยบริษัท ทองไพศาล จำกัด
            เป็นผู้ผลิตและจัดจำหน่ายผลิตภัณฑ์ภายใต้แบรนด์บิ๊กโต
          </Title>
          <Space direction="vertical">
            <Title level={3}>จุดเด่นของผลิตภัณฑ์บิ๊กโต</Title>
            <ul>
              <li>
                <Title level={3}>
                  คุณภาพสูง:
                  ผลิตภัณฑ์บิ๊กโตผลิตจากวัสดุคุณภาพดีและผ่านกระบวนการผลิตที่ได้มาตรฐาน
                  ทำให้มีความแข็งแรง ทนทาน และมีอายุการใช้งานยาวนาน
                </Title>
              </li>
              <li>
                <Title level={3}>
                  ความหลากหลาย: บิ๊กโตมีผลิตภัณฑ์ที่หลากหลาย
                  ครอบคลุมรถบรรทุกหลายรุ่น หลายยี่ห้อ
                </Title>
              </li>
              <li>
                <Title level={3}>
                  ราคาที่เหมาะสม: ผลิตภัณฑ์บิ๊กโตมีราคาที่เหมาะสม
                  คุ้มค่ากับคุณภาพ
                </Title>
              </li>
            </ul>
          </Space>
        </Paragraph>
      </Content>
      <Image
        src="/icons/icon-made-in-thailand.png"
        width={100}
        height={100}
        alt="thongpaisal"
        className="icon"
      />
    </FullScreenWrapper>
  );
}
