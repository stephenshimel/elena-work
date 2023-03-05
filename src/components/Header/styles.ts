import styled from "styled-components";

export const NaviBarWrapper = styled.div``;

export const NaviBarItem = styled.button<{ active: boolean }>`
	font-size: 18px;
	font-weight: ${({ active }) => (active ? "600" : "400")};
	cursor: pointer;
	margin: 20px;
`;
