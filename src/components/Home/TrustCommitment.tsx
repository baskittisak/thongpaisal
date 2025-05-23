import { Col, Row, Space, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

const { Title } = Typography;

const images = [
  {
    src: "/images/image-home-trust-1.png",
    top: "5%",
    left: 0,
    width: 136,
    height: 99,
  },
  {
    src: "/images/image-home-trust-2.png",
    top: "30%",
    left: "99px",
    width: 37.3,
    height: 49.7,
  },
  {
    src: "/images/image-home-trust-3.png",
    top: "46%",
    left: "0",
    width: 140,
    height: 180,
  },
  {
    src: "/images/image-home-trust-4.png",
    top: "30%",
    left: "143px",
    width: 93.25,
    height: 124.25,
  },
  {
    src: "/images/image-home-trust-5.png",
    top: "65%",
    left: "143px",
    width: 134.09,
    height: 111,
  },
  {
    src: "/images/image-home-trust-6.png",
    top: "20%",
    left: "245px",
    width: 119.84,
    height: 160,
  },
  {
    src: "/images/image-home-trust-7.png",
    top: "19%",
    left: "372px",
    width: 230,
    height: 167,
  },
  {
    src: "/images/image-home-trust-8.png",
    top: "65%",
    left: "287px",
    width: 150,
    height: 91.75,
  },
  {
    src: "/images/image-home-trust-9.png",
    top: "-4%",
    left: "608px",
    width: 163.66,
    height: 248,
  },
  {
    src: "/images/image-home-trust-10.png",
    top: "65%",
    left: "554px",
    width: 94,
    height: 73.94,
  },
  {
    src: "/images/image-home-trust-11.png",
    top: "65%",
    left: "616px",
    width: 140,
    height: 103,
  },
  {
    src: "/images/image-home-trust-12.png",
    top: "8%",
    left: "773px",
    width: 110,
    height: 140,
  },
  {
    src: "/images/image-home-trust-13.png",
    top: "49%",
    left: "773px",
    width: 110,
    height: 140,
  },
  {
    src: "/images/image-home-trust-14.png",
    top: "-10%",
    left: "881px",
    width: 227,
    height: 170,
  },
  {
    src: "/images/image-home-trust-15.png",
    top: "38%",
    left: "871px",
    width: 120,
    height: 150,
  },
  {
    src: "/images/image-home-trust-16.png",
    top: "38%",
    left: "988px",
    width: 200,
    height: 200,
  },
  {
    src: "/images/image-home-trust-17.png",
    top: "14%",
    left: "1110px",
    width: 140,
    height: 82,
  },
  {
    src: "/images/image-home-trust-18.png",
    top: "1%",
    left: "1220px",
    width: 140,
    height: 194,
  },
  {
    src: "/images/image-home-trust-19.png",
    top: "56%",
    left: "1196px",
    width: 130,
    height: 160,
  },
];

const Wrapper = styled.div`
  position: relative;
  background-color: #f5f4f3;
  width: 100vw;
  height: 100vh;
  padding-bottom: 36px;
  overflow: hidden;

  .title {
    padding: 36px 200px 0;
  }

  .content {
    padding: 0 150px;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    .title {
      padding: 36px;
    }

    .content {
      padding: 0 36px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding: 36px;

  @media (max-width: 1200px) {
    overflow: auto;
  }
`;

const GalleryWrapper = styled.div`
  position: relative;
  width: 1368px;
  height: 370px;
  margin: auto;
  overflow-x: auto;
  overflow-y: hidden;

  img {
    object-fit: contain;
  }
`;

const ImageItem = styled.div<{
  top: string | number;
  left: string | number;
}>`
  position: absolute;
  ${({ top, left }) => `
    top: ${top};
    left: ${left};
  `}
`;

const ColContent = styled(Col)`
  margin: auto;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.div`
  height: 4px;
  width: 100%;
  background-color: #2e2e2e;
`;

export default function TrustCommitment() {
  return (
    <Wrapper>
      <Title level={1} className="title">
        จากลูกค้าที่พึงพอใจของเรา
      </Title>
      <ImageWrapper>
        <GalleryWrapper>
          {images.map((img, index) => (
            <ImageItem key={index} top={img.top} left={img.left}>
              <Image
                src={img.src}
                alt="thongpaisal"
                width={img.width}
                height={img.height}
              />
            </ImageItem>
          ))}
        </GalleryWrapper>
      </ImageWrapper>
      <Row gutter={[32, 32]} className="content">
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Space direction="vertical" size={12}>
            <Line />
            <Title level={4} style={{ color: "#555", fontWeight: 400 }}>
              ในนามของ บริษัท ทองไพศาล จำกัด
              พวกเราขอขอบพระคุณทุกท่านที่ให้ความไว้วางใจ
              และเลือกใช้สินค้าของทองไพศาลด้วยดีเสมอมา
              ความเชื่อมั่นและการสนับสนุนของท่าน
              เป็นแรงผลักดันสำคัญที่ทำให้เรามุ่งมั่นพัฒนาสินค้าและบริการให้ดียิ่งขึ้น
            </Title>
          </Space>
          <Title level={4} style={{ color: "#2b2b2b" }}>
            - ความไว้วางใจ
          </Title>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Space direction="vertical" size={12}>
            <Line />
            <Title level={4} style={{ color: "#555", fontWeight: 400 }}>
              ทองไพศาลตระหนักดีว่าความไว้วางใจของท่านมีค่าอย่างยิ่งสำหรับเรา
              เราจึงให้คำมั่นสัญญาว่าจะยังคงรักษามาตรฐานคุณภาพของสินค้าและบริการอย่างสูงสุด
              เพื่อตอบแทนความไว้วางใจที่ท่านมอบให้
            </Title>
          </Space>
          <Title level={4} style={{ color: "#2b2b2b" }}>
            - คำมั่นสัญญา
          </Title>
        </ColContent>
        <ColContent xl={8} lg={12} sm={24} xs={24}>
          <Space direction="vertical" size={12}>
            <Line />
            <Title level={4} style={{ color: "#555", fontWeight: 400 }}>
              หากท่านมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติมเกี่ยวกับสินค้าและบริการของเรา
              สามารถติดต่อเราได้ตลอดเวลา
              เรายินดีให้บริการและให้คำปรึกษาแก่ท่านด้วยความเต็มใจ
            </Title>
          </Space>
          <Title level={4} style={{ color: "#2b2b2b" }}>
            - บริการด้วยใจ
          </Title>
        </ColContent>
      </Row>
      <Image
        src="/icons/icon-logo.png"
        width={100}
        height={100}
        alt="thongpaisal"
        style={{
          position: "absolute",
          bottom: "28px",
          right: "36px",
        }}
      />
    </Wrapper>
  );
}
