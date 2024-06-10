export type ProductOptionsProps = {
  options: {
    id: number,
    name: string;
    values: string[]
  } []
};
export function ProductOptions({options}: ProductOptionsProps) {
  return (
    <div className="product-options">
        {
          options.map((option, id) =>
           option.name === "colors" ?
           <div className="option" key={id}>
              <label>{option.name}</label>
              <ul>
                {
                  option.values.map(value => <li key={id + "1"}>{value}</li>)
                }
              </ul>
            </div>
           :
           <div className="option" key={id}>
              <label>{option.name}</label>
              <ul>
                {
                  option.values.map(value => <li key={id + "1"}>{value}</li>)
                }
              </ul>
            </div>
          )
          }
    </div>
  );
}
