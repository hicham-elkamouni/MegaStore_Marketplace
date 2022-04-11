import type { NextPage } from "next";
import Section1 from "@/components/front-office/homePage/section1";
import { Header } from "../components";
import type { GetServerSideProps } from "next";
import apolloClient from "../graphql/apolloClient";
import { GetAllDocument } from "../graphql/generated";

const Home: NextPage = (data: any) => {
  // console.log(data);

  return (
    <>
      <Section1></Section1>
      <div className="w-full">
        <Header />
      </div>
    </>
  );
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
