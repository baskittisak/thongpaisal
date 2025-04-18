import { Col, Row, Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px 150px;
  background-color: #000000;

  .ant-typography {
    color: #fff;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    padding: 36px;
  }
`;

const Topic = styled(Space)`
  gap: 50px;
  margin-bottom: 16px;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 20px;
    text-align: center;
  }
`;

const ColContent = styled(Col)`
  margin: auto;

  img {
    width: 100%;
    object-fit: fill;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  height: 200px;

  h5 {
    margin-top: 12px !important;
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
  width: 70%;
  height: 50px;
  font-size: 1rem;
  font-family: var(--font-prompt), sans-serif;
`;

export default function Products() {
  return (
    <FullScreenWrapper>
      <Topic>
        <Title level={1}>สินค้าหลักที่เรามีอะไหล่ชิ้นส่วน OEM</Title>
        <Image
          src="/icons/icon-made-in-thailand.png"
          width={80}
          height={80}
          alt="thongpaisal"
        />
      </Topic>
      <Row gutter={[32, 32]}>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={350}
            height={350}
            alt="thongpaisal"
            src="/images/image-home-products-1.png"
          />
          <Text>
            <Title level={2}>ลูกหมากเพลาโบกี้</Title>
            <Title level={5}>
              ลูกหมากเพลาโบกี้เป็นส่วนประกอบสำคัญในระบบช่วงล่างของรถบรรทุก
              โดยเฉพาะรถบรรทุกขนาดใหญ่ที่ใช้เพลาโบกี้
              ซึ่งมีหน้าที่รับน้ำหนักและแรงกระแทกจากพื้นถนน
            </Title>
          </Text>
          <Link href="/products/torque-rod-bush" passHref>
            <ButtonProducts>ดูสินค้าทั้งหมด</ButtonProducts>
          </Link>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={350}
            height={350}
            alt="thongpaisal"
            src="/images/image-home-products-2.png"
          />
          <Text>
            <Title level={2}>ซีลล้อรถ/ซีลกันน้ำมัน</Title>
            <Title level={5}>
              ซีลล้อรถบรรทุกเป็นส่วนประกอบสำคัญในระบบล้อของรถบรรทุก
              ทำหน้าที่ป้องกันการรั่วไหลของน้ำมันหล่อลื่นหรือจาระบีออกจากดุมล้อ
            </Title>
          </Text>
          <Link href="/products/seal" passHref>
            <ButtonProducts>ดูสินค้าทั้งหมด</ButtonProducts>
          </Link>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={350}
            height={350}
            alt="thongpaisal"
            src="/images/image-home-products-3.png"
          />
          <Text>
            <Title level={2}>บูชช่วงล่างรถ</Title>
            <Title level={5}>
              บูชช่วงล่างรถยนต์เป็นส่วนประกอบสำคัญในระบบช่วงล่าง
              ทำหน้าที่เป็นจุดเชื่อมต่อที่ยืดหยุ่นระหว่างชิ้นส่วนต่างๆ
              ของช่วงล่าง เช่น ปีกนก คานแข็ง หรือเพลา
              ช่วยลดการสั่นสะเทือนและแรงกระแทกจากพื้นถนน
            </Title>
          </Text>
          <ButtonProducts>ดูสินค้าทั้งหมด</ButtonProducts>
        </ColContent>
      </Row>
    </FullScreenWrapper>
  );
}
