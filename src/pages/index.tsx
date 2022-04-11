import Section1 from '@/components/front-office/homePage/section1';
import type { GetServerSideProps, NextPage } from 'next'
import apolloClient from '../graphql/apolloClient';
import { GetAllDocument } from '../graphql/generated';
import { Footer,Header, HeroSection } from '@/components/index';

const Home: NextPage = (data: any) => {
  console.log(data);

  return (
    <>
      {/* <Section1></Section1> */}
      <div className='w-full'>
        <Header />
        <HeroSection />
        <Footer />
      </div>
    </>

  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: GetAllDocument,
  });

  return {
    props: {
      data: data?.getAll,
    },
  };
};
// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await apolloClient.query({
//     query: GetAllDocument,
//   });

//   return {
//     props: {
//       data: data?.getAll,
//     },
//   };
// };

export default Home;
