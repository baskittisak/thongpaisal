import { Space, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 36px;
  background: linear-gradient(to bottom left, #000000, #1e9662);
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
    text-align: center;
    font-size: 4rem;
    margin-bottom: 16px !important;
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
              src="/icons/icon-correct.png"
              width={60}
              height={60}
              alt=""
            />
            <Title level={1}>ครบจบในที่เดียว</Title>
          </Space>
          <Space size={32}>
            <Image
              src="/icons/icon-correct.png"
              width={60}
              height={60}
              alt=""
            />
            <Title level={1}>ราคาโรงงานผลิต</Title>
          </Space>
          <Space size={32}>
            <Image
              src="/icons/icon-correct.png"
              width={60}
              height={60}
              alt=""
            />
            <Title level={1}>มีบริการจัดส่งสินค้า</Title>
          </Space>
          <Space size={32}>
            <Image
              src="/icons/icon-correct.png"
              width={60}
              height={60}
              alt=""
            />
            <Title level={1}>รับประกันสินค้า</Title>
          </Space>
        </Space>
        <ButtonEvaluate>ประเมินราคา</ButtonEvaluate>
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
