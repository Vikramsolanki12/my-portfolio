import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { volunteer } from "../../data/constants";
import VolunteerCard from "../cards/VolunteerCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  position: rlative;
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

const Volunteer = () => {
  return (
    <Container id="Volunteer">
      <Wrapper>
        <Title>Volunteering</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          🤝 Campus Involvement | Active Member in Student Clubs & Innovation Councils
        </Desc>

        <VerticalTimeline>
          {volunteer.map((volunteer, index) => (
            <VolunteerCard
              key={`volunteer-${index}`}
              volunteer={volunteer}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Volunteer;
