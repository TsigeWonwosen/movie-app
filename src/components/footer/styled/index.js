import React from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
    Break,
  Social
} from './Footer.styled';

export default function FooterStyle({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FooterStyle.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

FooterStyle.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

FooterStyle.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

FooterStyle.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

FooterStyle.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

FooterStyle.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

FooterStyle.Social = function FooterSocial({ ...restProps }) {
    return <Social {...restProps}/>
}