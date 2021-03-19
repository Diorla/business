export interface SelectProps {
  data: string[];
  [props: string]: any;
}

export default function Select({ data, ...props }: SelectProps) {
  const listId = "n" + Date.now();
  return (
    <div>
      <input list={listId} {...props} />
      <datalist id={listId}>
        {data.map((item, idx) => (
          <option value={item} key={idx} />
        ))}
      </datalist>
    </div>
  );
}
