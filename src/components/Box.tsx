"use client";
import styled from "styled-components";

interface BoxProps {
  $justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  $direction?: "row" | "row-reverse" | "column" | "column-reverse";
  $cursor?: "default" | "pointer" | "not-allowed";
  $warp?: "nowrap" | "wrap" | "wrap-reverse";
  height?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const FlexBox = styled.div<BoxProps>`
  display: flex;
  justify-content: ${({ $justify }) => $justify || "flex-start"};
  align-items: ${({ $align }) => $align || "flex-start"};
  flex-direction: ${({ $direction }) => $direction || "row"};
  cursor: ${({ $cursor }) => $cursor || "default"};
  height: ${({ height }) => height || "auto"};
  width: 100%;
`;

export default function Box({
  $justify,
  $align,
  $direction,
  $cursor,
  height,
  onClick,
  children,
}: BoxProps) {
  return (
    <FlexBox
      $justify={$justify}
      $align={$align}
      $direction={$direction}
      $cursor={$cursor}
      height={height}
      onClick={onClick}
    >
      {children}
    </FlexBox>
  );
}
