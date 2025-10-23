import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-right: 0px;
`;

const Switch = styled.div`
  width: 50px;
  height: 26px;
  background: ${({ theme }) => theme.text_secondary + '40'};
  border-radius: 50px;
  position: relative;
  transition: background-color 0.3s ease;
`;

const Knob = styled.div`
  position: absolute;
  top: 3px;
  left: ${(props) => (props.active ? '26px' : '3px')};
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  transition: left 0.3s ease;
`;


const Label = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 14px;
`;

const ThemeToggleButton = () => {
  const { toggleTheme, currentThemeName } = useTheme();
  const isDark = currentThemeName === 'dark';

  return (
    <SwitchWrapper onClick={toggleTheme} title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
      <Label>{isDark ? '🌙' : '☀️'}</Label>
      <Switch>
        <Knob active={!isDark} />
      </Switch>
    </SwitchWrapper>
  );
};

export default ThemeToggleButton;
