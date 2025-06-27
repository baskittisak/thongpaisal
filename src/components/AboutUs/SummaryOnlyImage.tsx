import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const FullScreenWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  position: relative;
  overflow: hidden;
  aspect-ratio: 15/8;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center center;
`;

export default function SummaryOnlyImage() {
  return (
    <FullScreenWrapper>
      <Link href="/contact-us">
        <StyledImage
          src="/images/image-about-us-summary.jpg"
          alt="thongpaisal"
          fill
          priority
        />
      </Link>
    </FullScreenWrapper>
  );
}
