import { Col, Row, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px 200px;
  background-color: #004aad;

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
  height: 80%;

  img {
    width: 100%;
    object-fit: contain;
  }

  .map {
    opacity: 0.7;
  }
`;

const ImageContainer = styled.div<{ full?: "true" }>`
  position: relative;
  width: ${({ full }) => (full === "true" ? "100%" : "50%")};
  height: ${({ full }) =>
    full === "true" ? "calc(50vh - 48px)" : "calc(30vh - 48px)"};
`;

const Video = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;

  iframe {
    height: 100%;
    width: 100%;
  }
`;

const BoxImage = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 24px;
`;

const Content = styled.div`
  position: relative;

  .title {
    font-size: 5rem;
    color: #fff;
  }

  .content {
    line-height: 1.5;
    font-weight: 400;
    color: #fff;
  }
`;

export default function AboutUsDetails() {
  return (
    <FullScreenWrapper>
      <RowContainer gutter={[32, 48]}>
        <ColContent xl={12} lg={24} md={24} sm={24} xs={24}>
          <ImageContainer full="true">
            <Video>
              <iframe src="https://www.youtube.com/embed/_1lCG1to2HA?si=1bEESduiS8VseA3Y" />
            </Video>
          </ImageContainer>
          <BoxImage>
            <ImageContainer>
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/image-about-us-1.jpg"
                alt=""
              />
            </ImageContainer>
            <ImageContainer>
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/image-about-us-2.jpg"
                alt=""
              />
            </ImageContainer>
          </BoxImage>
        </ColContent>
        <ColContent xl={12} lg={24} md={24} sm={24} xs={24}>
          <Image
            className="map"
            src="/images/image-about-us-map.png"
            alt="thongpaisal"
            fill
          />
          <Content>
            <Title level={1} className="title">
              เกี่ยวกับเรา
            </Title>
            <Title level={3} className="content">
              บริษัท ทองไพศาล จำกัด เป็นผู้ผลิต จัดจำหน่าย
              และบริการด้านอะไหล่รถบรรทุกภายใต้แบรนด์ที่มีชื่อว่า BIGTO
              ซึ่งดำเนินธุรกิจมา 30 ปี โดยผู้บริหารที่มีประสบการณ์
              เริ่มแรกบริษัทฯได้รับจ้างผลิตงานที่เกี่ยวข้องกับยางทุกชนิดและจัดหาอะไหล่ให้กับบริษัทชั้นนำในประเทศ
              จนสินค้าได้เป็นที่ยอมรับและติดตลาดในระดับแนวหน้า ซึ่งปัจจุบัน
              บริษัทฯได้มีการผลิตสินค้าที่มีความหลากหลายมากยิ่งขึ้นเพื่อเจาะกลุ่มลูกค้าได้อย่างทั่วถึงและครบวงจร
              บริษัทฯได้มีการพัฒนาระบบและคุณภาพทางด้านการผลิตและการบริการเพื่อให้ทันต่อความต้องการของตลาด
              นอกจากนี้บริษัทฯมีการสร้างทีมงานที่ดี มีคุณภาพ
              เท่ากับการมีแผนงานธุรกิจที่ดี บุคลากรของ ทองไพศาล มีความมุ่งมั่น
              และได้รับการฝึกอบรมอย่างสม่ำเสมอ
              อีกทั้งมีผู้บริหารงานที่มีประสบการณ์กว่า30ปี
              มีการสร้างผลงานผลิตภัณฑ์ BIGTO
              ให้เป็นที่ยอมรับในวงการทางด้านอะไหล่รถบรรทุกมากมาย
              ทำให้สินค้าติดตลาดและเป็นที่ยอมรับในโซนเอเซียตะวันออกเฉียงใต้
              ส่งผลทำให้บริษัท ทองไพศาล จำกัด
              ได้ประสบผลสำเร็จและมีการเจริญเติบโตก้าวหน้ามากยิ่งขึ้น
            </Title>
          </Content>
        </ColContent>
      </RowContainer>
    </FullScreenWrapper>
  );
}
