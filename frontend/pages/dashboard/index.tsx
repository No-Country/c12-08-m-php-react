import Layout from '@/components/layout/Layout';
import Head from 'next/head';

export default function home() {
  return (
    <>
      <Head>
        <title>PillCare</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className='w-full min-h-screen flex items-center justify-center'>
          <div>Dashboard de Juan</div>
        </div>
      </Layout>
    </>
  );
}
