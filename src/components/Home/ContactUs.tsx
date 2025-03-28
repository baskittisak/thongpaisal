import { useEffect } from "react";
import { Col, Row, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FB?: any;
  }
}

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);

  .ant-typography {
    color: #fff !important;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }
`;

const RowContainer = styled(Row)`
  height: 100%;
`;

const ColContent = styled(Col)<{ color: string }>`
  background-color: ${({ color }) => color};
  height: 100%;
  text-align: center;
  text-transform: uppercase;
  padding: 36px 0;

  img {
    object-fit: cover;
  }

  .title {
    font-size: 6rem;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 400;
  }

  .contact {
    font-size: 2rem;
    margin: 24px 0 !important;
  }

  @media (max-width: 1200px) {
    height: 140vh;

    .title {
      font-size: 4rem;
    }
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  position: relative;
  top: -30px;

  iframe {
    border: none;
    height: 65%;
    position: relative;
    top: 34px;
    border-radius: 16px;
  }

  .fb_iframe_widget iframe {
    width: 100% !important;
    height: 100% !important;
    left: 50%;
    transform: translateX(-50%);
  }

  img {
    top: -18px !important;
    height: 80% !important;
  }
`;

export default function ContactUs() {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <FullScreenWrapper>
      <RowContainer>
        <ColContent color="#004aad" xl={8} sm={24} xs={24}>
          <Title className="title">FOLLOW</Title>
          <Title className="subtitle">US ON FACEBOOK</Title>
          <Title className="contact">@thongpaisal</Title>
          <ImageWrapper>
            {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=61564186742636&locale=th_TH" /> */}
            <div
              className="fb-page"
              data-href="https://www.facebook.com/profile.php?id=61564186742636"
              data-tabs="timeline"
            />
          </ImageWrapper>
        </ColContent>
        <ColContent color="#cc2a48" xl={8} sm={24} xs={24}>
          <Title className="title">FOLLOW</Title>
          <Title className="subtitle">US ON INSTAGRAM</Title>
          <Title className="contact">@bigto_official</Title>
          <ImageWrapper>
            <Image
              src="/images/image-home-contact-us-1.png"
              alt="thongpaisal"
              fill
            />
          </ImageWrapper>
        </ColContent>
        <ColContent color="#000000" xl={8} sm={24} xs={24}>
          <Title className="title">FOLLOW</Title>
          <Title className="subtitle">US ON TIKTOK</Title>
          <Title className="contact">@bigtothai</Title>
          <ImageWrapper>
            <iframe src="https://www.tiktok.com/embed/@bigtothai" />
          </ImageWrapper>
        </ColContent>
      </RowContainer>
    </FullScreenWrapper>
  );
}
