import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";

import Footer from "../../components/Footer";
import Graph from "../../components/Graph";
import Header from "../../components/Header";
import { getAllPosts } from "../../utils/postid";

export default function post({ content }) {
  return (
    <div>
      <Head>
        <title></title>
      </Head>

      <Header />

      <div className="mx-auto mt-10 desktop:w-2/3">
        <div className="prose p-3 desktop:prose-lg desktop:p-8">
          <MDXRemote {...content} />
        </div>

        <div id="graph-container">
          {/*display post network graph*/}
          <Graph />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data, content } = getAllPosts().find((item) => item.id === params.id);
  const mdxSource = await serialize(content);

  return {
    props: {
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((item) => ({
      params: {
        id: item.id,
      },
    })),
    fallback: false,
  };
}
