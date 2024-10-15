import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Button, Row, Form, Container } from "react-bootstrap";
import data from "./data";

// CardItem component
const CardItem = ({
  image,
  title,
  price,
  salePrice,
  badge,
  handleAddToCart,
}) => (
  <Col lg={3} md={6} sm={12} className="mb-4 d-flex align-items-stretch ">
    {/* Added shadow and hover effect for the card */}
    <Card className="h-100 text-center shadow-sm card-hover">
      <Card.Img variant="top" src={image} className="card-img-top" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>

          {/* Badge */}
          {badge && (
            <div className="mb-2">
              <span className="badge bg-warning text-dark px-3 py-1">
                {badge}
              </span>
            </div>
          )}

          {/* Price Section */}
          <div className="price-section">
            {salePrice ? (
              <>
                <span className="text-muted text-decoration-line-through">
                  ${salePrice}
                </span>
                &nbsp;
                <span className="text-success">${price}</span>
              </>
            ) : (
              <span className="text-success">${price}</span>
            )}
          </div>
        </div>

        {/* Button */}
        <Button
          variant="primary"
          className="mt-auto btn-lg btn-hover"
          onClick={() => handleAddToCart({ image, title, price }, 1)}
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

// CardList component
const CardList = ({ handleAddToCart }) => {
  const [products, setProducts] = useState(data);

  const loadData = async () => {
    const res = await fetch("https://api-demo-4gqb.onrender.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Row className="justify-content-center mt-4 bg-dark text-white ">
      {products?.map((item) => (
        <CardItem
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          salePrice={item.salelPrice}
          badge={item.badge}
          handleAddToCart={handleAddToCart}
        />
      ))}

      <section className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center mb-4">Book Your Table</h2>
          <Row className="justify-content-center mx-4">
            <Form>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formService">
                    <Form.Select required>
                      <option value="">Select a Service</option>
                      <option>Dine In</option>
                      <option>Takeaway</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formComment">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Please write your comment"
                />
              </Form.Group>
              <Button variant="warning" type="submit">
                Send Message
              </Button>
            </Form>
          </Row>
        </Container>
      </section>
    </Row>
  );
};

export default CardList;
