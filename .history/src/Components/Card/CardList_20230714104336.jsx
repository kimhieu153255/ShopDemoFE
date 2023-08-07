import Card from "./Card";

const CardList = () => {
  return (
    <div className="grid gap-2 sm:grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-8">
      <Card title="Le Kim Hieu asdfasdf adsfasdf adsfasdf ádfasđfa asdfasdf asdfasdf ádfasdf"></Card>
      <Card title="Le Kim Hieu asdfasdf adsfasdf adsfasdf ádfasđfa asdfasdf asdfasdf ádfasdf"></Card>
      <Card title="Le Kim Hieu asdfasdf adsfasdf adsfasdf ádfasđfa asdfasdf asdfasdf ádfasdf"></Card>
      <Card title="Le Kim Hieu asdfasdf adsfasdf adsfasdf ádfasđfa asdfasdf asdfasdf ádfasdf"></Card>
      <Card title="Le Kim Hieu asdfasdf adsfasdf adsfasdf ádfasđfa asdfasdf asdfasdf ádfasdf"></Card>
      <Card title="Le Kim Hieu asdfasdf adsfasdf adsfasdf ádfasđfa asdfasdf asdfasdf ádfasdf"></Card>
      <Card title="Le Kim Hieu asdfasdf adsfasdf adsfasdf ádfasđfa asdfasdf asdfasdf ádfasdf"></Card>
      <Card
        title="Le Kim Hieu asdfasdf adsfasdf adsfasdf ádfasđfa asdfasdf asdfasdf ádfasdf"
        events={["holiday"]}
      ></Card>
    </div>
  );
};

export default CardList;
