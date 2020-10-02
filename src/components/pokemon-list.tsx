import axios from "axios";
import React, { Component } from "react";
import { Card, CardDeck, Button, Row, Col, Container } from "react-bootstrap";
import { PokemonListModel } from "../interfaces/index";
import { ucFirst, getId } from "../utils/index";
import { apiUrl } from "../constants/config";

interface PokemonProps {}
interface PokemonState {
  pokemonList: PokemonListModel | null;
  next: null;
  previous: null;
}

class PokemonList extends Component<PokemonProps, PokemonState> {
  constructor(props: PokemonProps) {
    super(props);
    this.state = {
      pokemonList: null,
      next: null,
      previous: null,
    };
  }

  getPokemonList = () => {
    axios.get(apiUrl).then((response) => {
      this.setState({
        pokemonList: response.data,
        next: response.data.next,
        previous: response.data.previous,
      });
    });
  };

  nextHandler = (nextUrl: string | null) => {
    if (!nextUrl || nextUrl === null) return 0;
    axios.get(nextUrl).then((response) => {
      this.setState({
        pokemonList: response.data,
        next: response.data.next,
        previous: response.data.previous,
      });
    });
  };

  render() {
    let { pokemonList } = this.state;
    return (
      <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {pokemonList &&
            pokemonList.results.map((pokemon) => {
              return (
                <div key={pokemon.name}>
                  <CardDeck style={{ padding: "10px" }}>
                    <Card
                      key={pokemon.name}
                      style={{
                        width: "10rem",
                        height: "12rem",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 3px 12px 2px, rgba(0, 0, 0, 0.19) 3px 7px 6px 2px"
                      }}
                    >
                      <Card.Img
                        variant="top"
                        width="150px"
                        height="150px"
                        src={getId(pokemon.url)}
                      />
                      <Card.Title style={{ textAlign: "center" }}>
                        {ucFirst(pokemon.name)}
                      </Card.Title>
                    </Card>
                  </CardDeck>
                </div>
              );
            })}
        </div>
        <div>
          <Container fluid>
            <Row>
              <Col>
                <Button
                  block
                  size="lg"
                  variant="outline-primary"
                  onClick={() =>
                    this.nextHandler(pokemonList ? pokemonList.previous : "")
                  }
                >
                  Previous
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  size="lg"
                  variant="outline-primary"
                  onClick={() =>
                    this.nextHandler(pokemonList ? pokemonList.next : "")
                  }
                >
                  Next
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.getPokemonList();
  }
}

export default PokemonList;
