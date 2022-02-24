import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	color: ${theme.color.text.primary};
	font-weight: bold;
	border: solid;
	background-color: ${theme.color.background.primary};
	border-color: ${theme.color.text.primary};
	border-radius: 12px;
	padding: 10px 10px 10px 10px;
	margin-left: 0px;
	margin-right: 10px;
	transition: all 0.2s ease;
	z-index: 9999;
	position: relative;

	&:hover {
		cursor: pointer;
		background: rgba(255, 255, 255, 0.2);
		z-index: 9999;
	}
`;

const InformationButton = ({ children, style, onClick }) => {
	return (
		<>
			<StyledButton style={style} onClick={onClick}>
				{children}
			</StyledButton>
		</>
	);
};
export default InformationButton;
