import { Typography } from "antd";
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
  background-color: #f5f4f3;
`;

const SectionWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px;

  @media (max-width: 1200px) {
    overflow: auto;
  }
`;

const GalleryWrapper = styled.div`
  position: relative;
  width: 1368px;
  height: 400px;
  margin: auto;
  overflow-x: auto;

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

export default function TrustCommitment() {
  return (
    <Wrapper>
      <Title level={1} style={{ padding: "36px 36px 0 36px" }}>
        จากลูกค้าที่พึงพอใจของเรา
      </Title>
      <SectionWrapper>
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
      </SectionWrapper>
    </Wrapper>
  );
}
