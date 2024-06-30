'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Tran Quoc Trung ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Trung I'm from Viet Nam. I have passionate about Data Engineering/Cloud Engineering.`,
    keywords: 'Tran Quoc Trung, Data Engineer, loud Engineer, trungtran, trungtran portfolio, Tran Quoc Trung portfolio.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://tranquoctrung.id.vn${pathname}`} />
      <link rel='canonical' href={`https://tranquoctrung.id.vn${pathname}`} />
      <link rel='me' href='mailto:tranquoctrung270302@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Trung Tran' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@trungtran' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;