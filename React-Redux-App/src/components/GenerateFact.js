import React from "react";
import { connect } from "react-redux";
import { getCatFact } from "../actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import "../App.css";
import styled from "styled-components";

const StyledH2 = styled.h2`
  font-family: "indie flower";
  margin: 2%;
`;
const StyledP = styled.p`
  font-family: "indie flower";
`;

const StyledDiv = styled.div`
  font-family: "indie flower";
`;

const GenerateFact = props => {
  console.log("generateFact props", props);
  return (
    <>
      <div className="wrapper">
        {props.isFetching && (
          <>
            <Spinner animation="border" /> <br /> <br />
          </>
        )}
        {!props.isFetching && props.catFact && (
          <Card
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
            className="center"
          >
            <Card.Header>
              <i class="fas fa-cat"></i>
              <StyledH2>Random Cat Fact:</StyledH2>
            </Card.Header>
            <Card.Body>
              <StyledP>{props.catFact}</StyledP>
            </Card.Body>
          </Card>
        )}
        <Button
          onClick={e => {
            e.preventDefault();
            props.getCatFact();
          }}
          variant="outline-dark"
        >
          <StyledDiv>Generate Fact</StyledDiv>
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    catFact: state.catFact,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCatFact })(GenerateFact);
