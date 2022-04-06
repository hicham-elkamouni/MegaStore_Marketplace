import type { GetServerSideProps, NextPage } from 'next'
import apolloClient from '../graphql/apolloClient';
import { GetAllDocument } from '../graphql/generated';

const Home: NextPage = (data:any) => {
  console.log(data);
  
  return (
    <div className="">
      
    </div>
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
