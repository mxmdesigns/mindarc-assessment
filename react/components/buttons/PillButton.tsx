import Link from "next/link";
import styled from "styled-components";

const Button = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 18px;
  border-radius: 24px;
  border: 3px solid black;
  letter-spacing: 2px;
  transition: all 0.2s;

  &:hover {
    border-radius: 4px;
  }
`;

const PillButton = ({
  text,
  link,
  external = false,
}: {
  text: string;
  link: string;
  external?: boolean;
}) => {
  return external ? (
    <a href={link}>
      <Button>{text}</Button>
    </a>
  ) : (
    <Link href={link}>
      <Button>{text}</Button>
    </Link>
  );
};

export default PillButton;
