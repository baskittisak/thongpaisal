import { useEffect } from "react";
import { Col, Row, Typography } from "antd";
import styled from "styled-components";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FB?: any;
  }
}

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-typography {
    color: #fff !important;
  }
`;

const RowContainer = styled(Row)`
  width: 100%;
  height: 100vh;

  @media (max-width: 1200px) {
    height: 100%;
  }
`;

const ColContent = styled(Col)<{ color: string }>`
  background-color: ${({ color }) => color};
  text-align: center;
  text-transform: uppercase;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 5rem;
    margin: 0;
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: 400;
  }

  .contact {
    font-size: 1.75rem;
    margin: 24px 0;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 3rem;
    }

    .contact {
      font-size: 1.5rem;
    }
  }
`;

const SocialWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 24px;

  iframe,
  .fb-page {
    width: 100% !important;
    border: none;
    border-radius: 16px;
    overflow: hidden;
  }

  .fb_iframe_widget iframe {
    width: 100% !important;
    height: 500px !important;
  }
`;

export default function ContactUs() {
  useEffect(() => {
    const loadFacebookSDK = () => {
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
    };

    loadFacebookSDK();
  }, []);

  return (
    <FullScreenWrapper>
      <RowContainer gutter={[0, 16]}>
        <ColContent color="#004aad" xl={8} md={12} sm={24} xs={24}>
          <Title className="title">FOLLOW</Title>
          <Title className="subtitle">US ON FACEBOOK</Title>
          <Title className="contact">@thongpaisal</Title>
          <SocialWrapper>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/profile.php?id=61564186742636"
              data-tabs="timeline"
              data-width="400"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            />
          </SocialWrapper>
        </ColContent>

        <ColContent color="#cc2a48" xl={8} md={12} sm={24} xs={24}>
          <Title className="title">FOLLOW</Title>
          <Title className="subtitle">US ON FACEBOOK</Title>
          <Title className="contact">@BIGTO THAI</Title>
          <SocialWrapper>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/bigtothailand"
              data-tabs="timeline"
              data-width="400"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            />
          </SocialWrapper>
        </ColContent>

        <ColContent color="#000000" xl={8} md={24} sm={24} xs={24}>
          <Title className="title">FOLLOW</Title>
          <Title className="subtitle">US ON TIKTOK</Title>
          <Title className="contact">@bigtothai</Title>
          <SocialWrapper>
            <iframe
              src="https://www.tiktok.com/embed/@bigtothai"
              height="500"
              allowFullScreen
            />
          </SocialWrapper>
        </ColContent>
      </RowContainer>
    </FullScreenWrapper>
  );
}
