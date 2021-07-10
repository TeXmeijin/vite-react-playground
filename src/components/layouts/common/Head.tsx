import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description: string;
};

export const Head = ({ title, description }: Props) => (
  <Helmet>
    <title>{`${title} | マナリンク`}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} | マナリンク`} />
    <meta property="og:description" content={description} />
    <meta name="robots" content="noindex" />
  </Helmet>
);

