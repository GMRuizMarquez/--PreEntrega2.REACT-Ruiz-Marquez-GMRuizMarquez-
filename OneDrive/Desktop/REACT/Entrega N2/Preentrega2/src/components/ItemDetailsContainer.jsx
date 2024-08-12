import Container from "react-bootstrap/Container";
import data from "../data/PRODUCTO_DATA.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailsContainer = () => {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve(data), 200))
      .then((response) => {
        const finded = response.find((i) => i.id === Number(id));
        setItems(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "wait";

  return (
    <Container className="mt-4">
      <h1>{item.product_name}</h1>
      <h2>{item.category}</h2>
      <h3>{item.expirateion_date}</h3>
      <img src={item.img} height={500} />
      <p>{item.description}</p>
      <b>${item.price}</b>
    </Container>
  );
};
