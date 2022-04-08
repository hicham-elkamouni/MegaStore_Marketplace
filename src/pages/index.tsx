<<<<<<< HEAD
import type { NextPage } from 'next'
import Section1 from '@/components/front-office/homePage/section1';
=======
import { Header } from '../components'
import type { GetServerSideProps, NextPage } from 'next'
import apolloClient from '../graphql/apolloClient';
import { GetAllDocument } from '../graphql/generated';
>>>>>>> 87f793a124c26dfadbdbb554ae4ce5ced3d3b493

const Home: NextPage = (data:any) => {
  console.log(data);
  
  return (
<<<<<<< HEAD
      <Section1></Section1>
=======
    <div className='w-full'>
      <Header />
    </div> 
>>>>>>> 87f793a124c26dfadbdbb554ae4ce5ced3d3b493
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const  {data} = await apolloClient.query({
    query: GetAllDocument,
  });

  return {
    props: {
      data: data?.getAll,
    },
  };
};

export default Home
