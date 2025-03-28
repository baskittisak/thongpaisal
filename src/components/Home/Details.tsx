import { Col, Row, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px 150px;
  background-color: #f5f4f3;

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    padding: 36px;
  }
`;

const RowContainer = styled(Row)`
  height: 100%;
`;

const ColContent = styled(Col)`
  margin: auto;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 24px;
  height: 200px;

  h5 {
    margin-top: 12px !important;
  }
`;

export default function Details() {
  return (
    <FullScreenWrapper>
      <RowContainer gutter={[32, 32]}>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={320}
            height={230}
            alt="thongpaisal"
            src="/images/image-home-details-1.png"
          />
          <Text>
            <Title level={2}>เราพัฒนาสินค้า</Title>
            <Title level={5}>
              ลูกหมากรถบรรทุก BIGTO เป็นลูกหมากหุ้มผ้าใบรายแรกในประเทศไทย
              <br />
              ที่คิดค้นมาเพื่อเพิ่มประสิทธิภาพในการใช้งานให้มีระยะเวลาในการใช้งาน
              ได้นานขึ้น
              <br />
              ได้รับความไว้วางใจจากเจ้าของธุรกิจขนส่งสินค้าโลจิสติกส์และทรานสปอร์ต
            </Title>
          </Text>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={320}
            height={230}
            alt="thongpaisal"
            src="/images/image-home-details-2.png"
          />
          <Text>
            <Title level={2}>ใส่ใจวัตถุดิบ</Title>
            <Title level={5}>
              วัสดุที่ใช้ผลิตอะไหล่ ผ่านการคัดสรรคุณภาพ
              และผ่านการทดสอบคุณภาพความแข็งแรงปลอดภัยเพื่อพร้อม
              <br />
              เรามีสวนยางพาราเองที่ใช้ผลิตงานยางตั้งเเต่ต้นสาย
              <br />
              จึงควบคุมคุณภาพได้ดีเเละได้รับมาตราฐาน
            </Title>
          </Text>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Image
            width={320}
            height={230}
            alt="thongpaisal"
            src="/images/image-home-details-3.png"
          />
          <Text>
            <Title level={2}>ขนาดมาตรฐาน</Title>
            <Title level={5}>
              การใช้เครื่องมือที่มีประสิทธิภาพ เนื่องจากเครื่องกลึง CNC
              <br />
              มีการตรวจวัดระยะและควบคุมการทำงาน
              <br /> ด้วยคอมพิวเตอร์ ทำให้มีความละเอียดสูงกว่าการทำด้วยมือ
            </Title>
          </Text>
        </ColContent>
      </RowContainer>
    </FullScreenWrapper>
  );
}
