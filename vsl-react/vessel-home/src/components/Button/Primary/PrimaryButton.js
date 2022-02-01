import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	background: rgb(255, 255, 255);
	background: linear-gradient(250deg, #376fbf 0%, #00bea8 100%);
	border-radius: 5px;
	padding: 10px 10px;
	transition: all 0.2s ease;
	color: ${theme.color.text.primary};
	font-weight: bold;
	border: none;
`;

const PrimaryButton = ({ children, style, onClick }) => {
	return (
		<>
			<StyledButton style={style} onClick={onClick}>
				{children}
			</StyledButton>
		</>
	);
};
export default PrimaryButton;
