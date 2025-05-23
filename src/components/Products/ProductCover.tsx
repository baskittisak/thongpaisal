import { useMemo } from "react";
import { Col, Row, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";

const { Title } = Typography;

interface ProductCoverProps {
  type: "torqueRodBush" | "seal" | "bush";
}

const PRODUCT_COVER_DETAILS = [
  {
    type: "torqueRodBush",
    description:
      "ลูกหมากเพลาโบกี้เป็นส่วนประกอบสำคัญในระบบช่วงล่างของรถบรรทุก โดยเฉพาะรถบรรทุกขนาดใหญ่ที่ใช้เพลาโบกี้ ซึ่งมีหน้าที่รับน้ำหนักและแรงกระแทกจากพื้นถนน ทำหน้าที่เป็นข้อต่อที่ยืดหยุ่น ช่วยให้เพลาโบกี้เคลื่อนที่ได้อย่างอิสระในแนวตั้ง และช่วยลดการสั่นสะเทือนที่ส่งไปยังตัวรถ",
    images: [
      "/images/image-products-cover-1-1.png",
      "/images/image-products-cover-1-2.png",
      "/images/image-products-cover-1-3.png",
    ],
  },
  {
    type: "seal",
    description:
      "ซีลล้อ (Wheel seal) คือชิ้นส่วนสำคัญในระบบล้อของยานพาหนะ มีหน้าที่หลักคือป้องกันไม่ให้จาระบีหรือน้ำมันหล่อลื่นที่อยู่ในดุมล้อรั่วไหลออกมา และป้องกันสิ่งสกปรก ฝุ่นละออง และน้ำเข้าไปในดุมล้อป้องกันการรั่วไหลของสารหล่อลื่น ซีลล้อช่วยป้องกันไม่ให้จาระบีหรือน้ำมันหล่อลื่นที่อยู่ในดุมล้อรั่วไหลออกมา ซึ่งจะช่วยลดการสึกหรอของลูกปืนล้อและชิ้นส่วนอื่นๆ ในระบบล้อ",
    images: ["/images/image-products-cover-2-1.png"],
  },
  {
    type: "bush",
    description:
      "บูชช่วงล่างรถยนต์ คือชิ้นส่วนสำคัญในระบบช่วงล่างของรถยนต์ มีหน้าที่หลักคือเป็นตัวเชื่อมระหว่างชิ้นส่วนต่างๆ ของช่วงล่าง เช่น ปีกนก โช้คอัพ และเหล็กกันโคลง ทำให้ชิ้นส่วนเหล่านี้สามารถเคลื่อนที่ได้อย่างอิสระและยืดหยุ่นดยทั่วไป บูชช่วงล่างทำจากยางหรือวัสดุสังเคราะห์ที่มีความยืดหยุ่น",
    images: ["/images/image-products-cover-3-1.png"],
  },
];

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px 200px;
  background-color: #ffffff;

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
  height: 100%;
`;

const ColContent = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1200px) {
    height: 75vh;
  }

  @media (max-width: 600px) {
    height: 100vh;
  }

  @media (max-width: 416px) {
    height: 120vh;
  }
`;

const ColDescription = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageTruck = styled.div`
  position: relative;
  width: 580px;
  height: 240px;

  img {
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 380px) {
    width: 300px;
  }
`;

const IconTorque = styled.div`
  position: absolute;
  top: 173px;
  right: 161px;
  z-index: 1;

  @media (max-width: 600px) {
    top: 154px;
    right: 99px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 146px;
    right: 74px;
  }
`;

const IconSeal1 = styled.div`
  position: absolute;
  top: 173px;
  right: 111px;
  z-index: 1;

  @media (max-width: 600px) {
    top: 154px;
    right: 64px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 146px;
    right: 48px;
  }
`;

const IconSeal2 = styled.div`
  position: absolute;
  top: 173px;
  right: 212px;
  z-index: 1;

  @media (max-width: 600px) {
    top: 154px;
    right: 134px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 146px;
    right: 101px;
  }
`;

const IconSeal3 = styled.div`
  position: absolute;
  top: 173px;
  left: 67px;
  z-index: 1;

  @media (max-width: 600px) {
    top: 154px;
    left: 34px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 146px;
    left: 25px;
  }
`;

const IconBush1 = styled.div`
  position: absolute;
  top: 173px;
  right: 161px;
  z-index: 1;

  @media (max-width: 600px) {
    top: 154px;
    right: 99px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 146px;
    right: 74px;
  }
`;

const IconBush2 = styled.div`
  position: absolute;
  top: 153px;
  right: 271px;
  z-index: 1;

  @media (max-width: 600px) {
    top: 142px;
    right: 175px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 136px;
    right: 131px;
  }
`;

const IconBush3 = styled.div`
  position: absolute;
  top: 163px;
  left: 130px;
  z-index: 1;

  @media (max-width: 600px) {
    top: 147px;
    left: 77px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 141px;
    left: 58px;
  }
`;

const IconBush4 = styled.div`
  position: absolute;
  top: 157px;
  left: 0;
  z-index: 1;

  @media (max-width: 600px) {
    top: 144px;
    left: -13px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 139px;
    left: -10px;
  }
`;

const IconBush5 = styled.div`
  position: absolute;
  top: 13px;
  left: 117px;
  z-index: 1;
  transform: rotate(180deg);

  @media (max-width: 600px) {
    top: 21px;
    left: 67px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 46px;
    left: 50px;
  }
`;

const IconBush6 = styled.div`
  position: absolute;
  top: 142px;
  right: 52px;
  z-index: 1;
  transform: rotate(-30deg);

  @media (max-width: 600px) {
    top: 134px;
    right: 18px;
  }

  @media (max-width: 380px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    top: 130px;
    right: 13px;
  }
`;

const ColImage = styled(Col)`
  img {
    width: 100% !important;
    border-radius: 16px;
  }
`;

const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ant-row {
    flex-wrap: nowrap;
  }

  @media (max-width: 600px) {
    .ant-row {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

const Brand = styled.div`
  background-color: #ff3130;
  width: 100%;
  text-align: center;
  padding: 12px;
  border-radius: 24px;
  margin-top: 12px;

  .ant-typography {
    color: #fff;
  }
`;

const Description = styled.div`
  position: relative;
  background-color: #ff3130;
  width: 100%;
  padding: 24px;
  border-radius: 24px;
  margin-top: 12px;

  .title {
    font-size: 6rem;
    color: #2e2e2e;
  }

  .description {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 300;
  }

  .icon-nut {
    position: absolute;
    right: 24px;
    top: 24px;
  }

  .icon-thailand {
    margin-top: 36px;
    margin-left: auto;
    display: flex;
  }
`;

const ImageSealBush = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
`;

export default function ProductCover({ type }: ProductCoverProps) {
  const detail = useMemo(() => {
    return PRODUCT_COVER_DETAILS.find((detail) => detail.type === type);
  }, [type]);

  if (!detail) return null;

  return (
    <FullScreenWrapper>
      <Content>
        <RowContainer gutter={[32, 32]}>
          <ColContent xl={12} lg={24} sm={24} xs={24}>
            {type === "torqueRodBush" && (
              <ImageTruck>
                <Image
                  src="/images/image-products-truck-1.png"
                  alt="thongpaisal"
                  fill
                  priority
                />
                <IconTorque>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconTorque>
              </ImageTruck>
            )}
            {type === "seal" && (
              <ImageTruck>
                <Image
                  src="/images/image-products-truck-1.png"
                  alt="thongpaisal"
                  fill
                  priority
                />
                <IconSeal1>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconSeal1>
                <IconSeal2>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconSeal2>
                <IconSeal3>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconSeal3>
              </ImageTruck>
            )}
            {type === "bush" && (
              <ImageTruck>
                <Image
                  src="/images/image-products-truck-1.png"
                  alt="thongpaisal"
                  fill
                  priority
                />
                <IconBush1>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconBush1>
                <IconBush2>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconBush2>
                <IconBush3>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconBush3>
                <IconBush4>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconBush4>
                <IconBush5>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconBush5>
                <IconBush6>
                  <Image
                    src="/images/image-products-truck-2.png"
                    alt="icon"
                    width={80}
                    height={80}
                  />
                </IconBush6>
              </ImageTruck>
            )}
            <BoxImage>
              {type === "torqueRodBush" && (
                <Row gutter={[24, 24]}>
                  {detail.images.map((image) => (
                    <ColImage xl={8} key={image}>
                      <Image src={image} alt="" width={160} height={160} />
                    </ColImage>
                  ))}
                </Row>
              )}
              {(type === "seal" || type === "bush") && (
                <ImageSealBush>
                  <Image src={detail.images[0]} alt="" fill />
                </ImageSealBush>
              )}
              <Brand>
                <Title level={1}>ISUZU HINO FUSO UD</Title>
              </Brand>
            </BoxImage>
          </ColContent>
          <ColDescription xl={12} lg={24} sm={24} xs={24}>
            <Image
              src="/icons/icon-bigto-logo-transparent.png"
              width={100}
              height={100}
              alt="bigto"
            />
            <Description>
              <Image
                src="/icons/icon-nut.png"
                width={32}
                height={32}
                alt="thongpaisal"
                className="icon-nut"
              />
              <Title level={1} className="title">
                BIGTO
              </Title>
              <Title level={3} className="description">
                {detail.description}
              </Title>
              <Image
                src="/icons/icon-made-in-thailand.png"
                width={80}
                height={80}
                alt="thongpaisal"
                className="icon-thailand"
              />
            </Description>
          </ColDescription>
        </RowContainer>
      </Content>
    </FullScreenWrapper>
  );
}
