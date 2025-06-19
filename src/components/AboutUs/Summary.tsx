import { Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px;
  background: linear-gradient(
    175deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(30, 150, 98, 1) 60%
  );

  @media (max-width: 1330px) {
    height: 180vh;
  }
`;

const Headline = styled.div`
  background-color: #03bf62;
  height: 280px;
  width: 800px;
  transform: rotate(157deg);
  position: absolute;
  top: -143px;
  left: -40px;
`;

const Logo = styled(Space)`
  position: absolute;
  top: -18px;

  .pbr {
    width: 100% !important;
    height: 200px !important;
  }
`;

const Presenter = styled.div`
  position: absolute;
  bottom: -6px;
  left: 0;

  img {
    width: 100%;
    height: 70vh;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  .ant-typography {
    color: #fff;
  }

  .title {
    white-space: pre;
    text-align: center;
    font-size: 4rem;
    margin-bottom: 16px !important;
  }

  .subtitle {
    font-size: 2rem;
  }

  @media (max-width: 1330px) {
    position: absolute;
    top: -10%;
    left: 6%;
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .correct {
      width: 30px !important;
      height: 30px !important;
    }
  }

  @media (max-width: 700px) {
    position: relative;
    top: 0;
    left: 0;
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
  width: 30%;
  height: 60px;
  font-size: 1.5rem;
  margin-top: 24px;

  @media (max-width: 1024px) {
    font-size: 1rem;
    height: 55px;
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 70%;
    height: 40px;
  }
`;

const Parallelogram = styled.div`
  width: 300px;
  height: 100%;
  background: #0553a9;
  transform: skew(-20deg);
  position: absolute;
  top: 0;
  right: 120px;
  border-left: 20px solid #0044a0;
  border-right: 20px solid #4cd37a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 250px !important;
    height: 180px !important;
    transform: skew(12deg);
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    transform: none;
    right: 0;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 200px;
    flex-direction: row;
    overflow: hidden;
    top: 20%;
  }
`;

const Icons = styled.div`
  img {
    position: absolute;
    right: 0;
    bottom: 24px;
    transform: rotate(135deg);
  }

  img:first-child {
    bottom: 100px;
    right: 40px;
  }

  img:last-child {
    right: 150px;
  }
`;

export default function Summary() {
  return (
    <FullScreenWrapper>
      <Headline />
      <Logo>
        <Image src="/icons/icon-logo.png" width={120} height={120} alt="" />
        <Image
          className="pbr"
          src="/images/image-about-us-summary-PBR.png"
          width={100}
          height={100}
          alt=""
        />
      </Logo>
      <Presenter>
        <Image
          src="/images/image-about-us-summary-presenter.png"
          width={100}
          height={100}
          alt=""
        />
      </Presenter>
      <Content>
        <Title className="title">
          ผลิต OEM สินค้า
          <br /> พร้อม เเพ็คเกจจี้ง
        </Title>
        <Space direction="vertical" size={16}>
          <Space size={32}>
            <Image
              className="correct"
              src="/icons/icon-correct.png"
              width={60}
              height={60}
              alt=""
            />
            <Title className="subtitle">ครบจบในที่เดียว</Title>
          </Space>
          <Space size={32}>
            <Image
              className="correct"
              src="/icons/icon-correct.png"
              width={60}
              height={60}
              alt=""
            />
            <Title className="subtitle">ราคาโรงงานผลิต</Title>
          </Space>
          <Space size={32}>
            <Image
              className="correct"
              src="/icons/icon-correct.png"
              width={60}
              height={60}
              alt=""
            />
            <Title className="subtitle">มีบริการจัดส่งสินค้า</Title>
          </Space>
          <Space size={32}>
            <Image
              className="correct"
              src="/icons/icon-correct.png"
              width={60}
              height={60}
              alt=""
            />
            <Title className="subtitle">รับประกันสินค้า</Title>
          </Space>
        </Space>
        <Link href="/contact-us">
          <ButtonEvaluate>ประเมินราคา</ButtonEvaluate>
        </Link>
      </Content>
      <Parallelogram>
        <Image
          src="/images/image-about-us-summary-1.png"
          width={100}
          height={100}
          alt=""
        />
        <Image
          src="/images/image-about-us-summary-2.png"
          width={100}
          height={100}
          alt=""
        />
        <Image
          src="/images/image-about-us-summary-3.png"
          width={100}
          height={100}
          alt=""
        />
        <Image
          src="/images/image-about-us-summary-4.png"
          width={100}
          height={100}
          alt=""
        />
      </Parallelogram>
      <Icons>
        <Image src="/icons/icon-plus.png" width={80} height={80} alt="" />
        <Image src="/icons/icon-plus.png" width={60} height={60} alt="" />
      </Icons>
    </FullScreenWrapper>
  );
}
