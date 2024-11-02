const ImpactCard = ({
  icon,
  title,
  value,
}: {
  icon: JSX.Element;
  title: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-full max-w-40 aspect-square p-4 bg-third rounded-full flex gap-2 flex-col justify-center items-center">
        {icon}

        <h2 className="text-2xl font-bold">{value}</h2>
      </div>

      <h3 className="text-center text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default ImpactCard;
