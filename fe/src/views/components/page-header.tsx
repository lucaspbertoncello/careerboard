interface IPageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: IPageHeaderProps) {
  return (
    <div>
      <h1 className="text-foreground text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
