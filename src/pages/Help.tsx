import Layout from "../components/Layout";

const a = [] as any;
a.length = 1000;
a.fill("hello");

export default function Help() {
  return (
    <Layout active="help">
      <div>Help</div>
      {a.map((i: string, key: string | number) => (
        <div key={key}>{i}</div>
      ))}
      <div>Last</div>
    </Layout>
  );
}
