type Props = {
  title: string;
};

export default function SectionHeading({ title }: Props) {
  return (
    <h2 className="mb-8 text-3xl font-bold">
      {title}
      <span className="text-emerald-400">.</span>
    </h2>
  );
}