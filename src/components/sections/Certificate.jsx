import React from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import CertificateCard from "../cards/CertificateCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Certificate = () => {
  if (!Array.isArray(certificates) || certificates.length === 0) {
    return null;
  }

  return (
    <Container id="Certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Recognitions & Achievements across learning platforms and industry-led programs
        </Desc>
        <CardContainer>
          {certificates.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} {...certificate} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certificate;
