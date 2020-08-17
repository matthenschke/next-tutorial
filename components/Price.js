const Price = ({ description, code, rate }) => {
  return (
    <li className="list-group-item">
      Bitcoin rate for {description} :
      <span className="mx-2 badge badge-primary">{code}</span>
      <strong>{rate}</strong>
    </li>
  );
};

export default Price;
