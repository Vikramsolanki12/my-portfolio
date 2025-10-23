import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 16px;
  padding: 24px;
  max-width: 340px;
  max-height: 800px;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const LogoImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 8px;
`;

const LogoFallback = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + '1A'};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
`;

const Name = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Duration = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_primary};
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const SkillTag = styled.span`
  background: ${({ theme }) => theme.primary + '1A'};
  color: ${({ theme }) => theme.primary};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primary + '33'};
    transform: scale(1.05);
  }
`;

const Button = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText || '#fff'};
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const CertificateCard = ({ logo, name, company, description, skills, link }) => {
  const isImageUrl = logo?.startsWith("http");

  return (
    <Card>
      {isImageUrl ? (
        <LogoImage src={logo} alt={name} />
      ) : (
        <LogoFallback>{logo}</LogoFallback>
      )}
      <Name>{name}</Name>
      <Duration>{company}</Duration>
      <Description>{description}</Description>
      <Skills>
        {skills.map((skill, idx) => (
          <SkillTag key={idx}>{skill}</SkillTag>
        ))}
      </Skills>
      <Button href={link} target="_blank" rel="noopener noreferrer">
        View Certificate
      </Button>
    </Card>
  );
};

export default CertificateCard;
