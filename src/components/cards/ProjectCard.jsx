import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 540px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 6px ${({ theme }) => theme.shadowHover || "rgba(0, 0, 0, 0.2)"};
    filter: brightness(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px ${({ theme }) => theme.shadow};
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.primary + "20"};
  color: ${({ theme }) => theme.primary};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 2px;
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.7;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const DescriptionWrapper = styled.div`
  max-height: 100px;
  overflow-y: auto;
  padding-right: 4px;
  margin-top: 6px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 4px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.85;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  gap: 12px;
`;

const Button = styled.a`
  flex: 1;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  border: 1.5px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 6px 0;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
  }
`;

const ProjectCard = ({ project }) => {
  const isWebApp = Array.isArray(project.category)
    ? project.category.includes("web app")
    : project.category?.toLowerCase() === "web app";

  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <DescriptionWrapper>
          <Description>{project.description}</Description>
        </DescriptionWrapper>
      </Details>
      <ButtonContainer>
        {isWebApp && project.webapp && (
          <Button
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
        <Button href={project.github} target="_blank" rel="noopener noreferrer">
          View Code
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default ProjectCard;
