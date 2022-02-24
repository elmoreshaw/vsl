import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	background: linear-gradient(250deg, #428afa 0%, #00bea8 100%);
	border-radius: 12px;
	padding: 13px;
	transition: all 0.2s ease;
	color: ${theme.color.text.primary};
	font-weight: bold;
	border: none;
	&:hover {
		cursor: pointer;
	}
`;

const PrimaryButton = ({ children, style, onClick }) => {
	return (
		<>
			<StyledButton style={style} onClick={onClick}>
				{children} {'❯'}
			</StyledButton>
		</>
	);
};
export default PrimaryButton;
