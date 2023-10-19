// import { ReactNode } from "react";
import { faker } from "@faker-js/faker";
import "./styles.css";
import withToggles from "./HOC";

interface ProductI {
  productName: string;
  description: string;
  price: string;
}
// interface CompanyI {
//   companyName: string;
//   phrase: string;
// }

const products: ProductI[] = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

// const companies: CompanyI[] = Array.from({ length: 15 }, () => {
//   return {
//     companyName: faker.company.name(),
//     phrase: faker.company.catchPhrase(),
//   };
// });

function ProductItem({ product }: { product: ProductI }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

// type CompanyItemProps = {
//   company: CompanyI;
//   defaultVisibility: boolean;
// };

// function CompanyItem({ company, defaultVisibility }: CompanyItemProps) {
//   const [isVisible, setIsVisible] = useState(defaultVisibility);

//   return (
//     <li
//       className="company"
//       onMouseEnter={() => setIsVisible(true)}
//       onMouseLeave={() => setIsVisible(false)}
//     >
//       <p className="company-name">{company.companyName}</p>
//       {isVisible && (
//         <p className="company-phrase">
//           <strong>About:</strong> {company.phrase}
//         </p>
//       )}
//     </li>
//   );
// }

// type ListProp<T> = {
//   title: string;
//   items: Array<T>;
//   render: (item: T) => ReactNode;
// };

// function List<T>({ title, items, render }: ListProp<T>) {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const displayItems = isCollapsed ? items.slice(0, 3) : items;

//   function toggleOpen() {
//     setIsOpen((isOpen) => !isOpen);
//     setIsCollapsed(false);
//   }

//   return (
//     <div className="list-container">
//       <div className="heading">
//         <h2>{title}</h2>
//         <button onClick={toggleOpen}>
//           {isOpen ? <span>&or;</span> : <span>&and;</span>}
//         </button>
//       </div>
//       {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

//       <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
//         {isCollapsed ? `Show all ${items.length}` : "Show less"}
//       </button>
//     </div>
//   );
// }

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
export type ProductListProps = {
  title?: string;
  items: ProductI[];
};
function ProductList({ items }: ProductListProps) {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}

const WrappedFunction = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        {/* <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        /> */}
        <ProductList items={products} />
        <WrappedFunction items={products} title="Wrapped Product" />
      </div>
    </div>
  );
}
