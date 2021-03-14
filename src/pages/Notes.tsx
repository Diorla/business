import Layout from "../components/Layout";

export default function Help() {
  return (
    <Layout active="notes">
      <div>
        This is where the notes are take will be placed. I will add subroutes,
        by using .md or .mdx, and return dir of the target folder us "fs" and
        lazy loading
      </div>
    </Layout>
  );
}
