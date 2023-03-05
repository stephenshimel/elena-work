import React from "react";
import { NaviBarWrapper, NaviBarItem } from "./styles";

interface Item {
	label: string;
	name: string;
}

interface HeaderProps {
	items: Item[];
	activeIndex?: number;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({ items, activeIndex, setActiveIndex }: HeaderProps) => {
	return (
		<NaviBarWrapper>
			{items.map((item, index) => (
				<NaviBarItem
					active={index === activeIndex}
					onClick={() => {
						setActiveIndex(index);
					}}
				>
					{item.label}
				</NaviBarItem>
			))}
		</NaviBarWrapper>
	);
};

export default Header;
