import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/PRODUCTO_DATA.json";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000);
      });
    };

    fetchData().then((response) => {
      if (!id) {
        setItems(response);
      } else {
        const filtered = response.filter((i) => i.category === id);
        setItems(filtered);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Wait...</p>;

  return (
    <Container className="mt-4 d-flex flex-wrap justify-content-around">
      {items.map((i) => (
        <Card key={i.id} style={{ width: "18rem", marginBottom: "20px" }}>
          <Card.Img variant="top" src={i.img} />
          <Card.Body>
            <Card.Title>{i.product_name}</Card.Title>
            <Card.Text>{i.price} </Card.Text>
            <Card.Text>{i.expiration_date}</Card.Text>
            <Card.Text>{i.quantity}</Card.Text>
            <Card.Text>{i.category}</Card.Text>

            <Link to={`/item/${i.id}`}>
              <Button variant="primary">Ver</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
