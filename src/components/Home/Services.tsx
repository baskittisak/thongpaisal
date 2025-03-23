import { Row, Col, Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";

const { Title } = Typography;

const RowContainer = styled(Row)`
  position: relative;
  height: 400px;
  overflow: hidden;
  background-color: #9b9b9b;

  @media (max-width: 1200px) {
    height: 100%;
    padding: 0;
  }
`;

const ColContent = styled(Col)`
  position: relative;
  margin: auto;
  text-align: center;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Service = styled(Space)`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: max-content;
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 24px;
  border-radius: 6px;

  .ant-typography {
    color: #fff;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 36px 150px;
  background-color: #f5f4f3;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 36px;
  }
`;

const ButtonProducts = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #004aad;
  color: #fff;
  border-radius: 8px;
  height: 50px;
  font-size: 1rem;
  font-family: var(--font-prompt), sans-serif;
`;

export default function Services() {
  return (
    <>
      <RowContainer gutter={[32, 0]}>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={400}
            height={400}
            alt="thongpaisal"
            src="/images/image-home-services-1.png"
          />
          <Service direction="vertical">
            <Title level={1}>งานเหล็ก</Title>
            <Title level={1} style={{ fontWeight: 200 }}>
              1000+ งาน
            </Title>
          </Service>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={400}
            height={400}
            alt="thongpaisal"
            src="/images/image-home-services-2.png"
          />
          <Service direction="vertical">
            <Title level={1}>งานยาง</Title>
            <Title level={1} style={{ fontWeight: 200 }}>
              1000+ งาน
            </Title>
          </Service>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={400}
            height={400}
            alt="thongpaisal"
            src="/images/image-home-services-3.png"
          />
          <Service direction="vertical">
            <Title level={1}>งานเหล็กติดยาง</Title>
            <Title level={1} style={{ fontWeight: 200 }}>
              1000+ งาน
            </Title>
          </Service>
        </ColContent>
      </RowContainer>
      <Content>
        <Space direction="vertical" size="large">
          <Space direction="vertical">
            <Title style={{ fontSize: "3rem", color: "#004aad" }}>
              เรารับผลิตตามแบบ
            </Title>
            <Title style={{ fontSize: "2.5rem", color: "#004aad" }}>
              ออกแบบชิ้นงาน พร้อม โรงงาน
              <span style={{ color: "#10c0df" }}>แพ็คเกจจิ้ง</span>
            </Title>
          </Space>
          <Space direction="vertical">
            <Title level={2} style={{ fontWeight: 400, color: "#2f2822" }}>
              ฟรี บริการให้คำปรึกษา
            </Title>
            <Title level={2} style={{ fontWeight: 400, color: "#767676" }}>
              เป็นเพื่อนคู่คิดช่วยออกแบบสั่งทำชิ้นงาน+กล่องแพคเกจจิ้ง
              เพิ่มมูลค่าให้สินค้า
            </Title>
          </Space>
        </Space>
        <Space direction="vertical">
          <Image
            width={180}
            height={180}
            alt="thongpaisal"
            src="/icons/icon-oem.png"
          />
          <ButtonProducts>ดูรายละเอียดเพิ่มเติม</ButtonProducts>
        </Space>
      </Content>
    </>
  );
}
