import React from 'react';
import styled, { useTheme } from 'styled-components';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Role = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 700;
  margin: 0;
`;

const Company = styled.h4`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  margin: 0;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.text_tertiary || theme.text_secondary};
  font-size: 14px;
  margin: 0;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_primary};
  font-size: 15px;
  line-height: 1.5;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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

const VolunteerCard = ({ volunteer }) => {
  const theme = useTheme();
  if (!volunteer) return null;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme.card || '#fff',
        boxShadow: theme.shadow || '0 4px 12px rgba(0, 0, 0, 0.06)',
        border: `1px solid ${volunteer?.color || theme.primary || '#e0e0e0'}`,
        borderRadius: '12px',
        padding: '22px',
        color: theme.text_primary,
        transition: 'all 0.3s ease',
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${volunteer?.color || theme.primary || '#ccc'}`,
      }}
      date={volunteer.date}
      iconStyle={{
        background: theme.body || '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `2px solid ${volunteer?.color || theme.primary || '#888'}`,
      }}
      icon={
        <img
          src={volunteer.img}
          alt={volunteer.company}
          style={{ width: '60%', height: '60%', objectFit: 'contain' }}
        />
      }
    >
      <CardContent>
        <Role>{volunteer.role}</Role>
        <Company>{volunteer.company}</Company>
        <Date>{volunteer.date}</Date>
        <Description>{volunteer.desc}</Description>
        <Skills>
          {volunteer.skills && volunteer.skills.map((skill, idx) => (
            <SkillTag key={idx}>{skill}</SkillTag>
          ))}
        </Skills>
      </CardContent>
    </VerticalTimelineElement>
  );
};

export default VolunteerCard;
