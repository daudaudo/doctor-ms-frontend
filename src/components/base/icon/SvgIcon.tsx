import React from "react";
import IconsMap, { SvgName, SvgType } from "@/components/base/icon/svg";
import { SvgProps } from "@/types/icon";

type SvgIconProps = {
	name: SvgName;
	type?: SvgType;
	className?: string;
} & SvgProps;

const SvgIcon = (props: SvgIconProps) => {
	const { name, type = "app", width, height, color = "currentColor", className } = props;

	if (!IconsMap[type] || !IconsMap[type][name]) {
		return null;
	}

	const SvgComponent = IconsMap[type][name];

	return (
		<div id={name} className={`svg-icon ${className ?? ""}`}>
			<SvgComponent width={width} height={height} color={color} />
		</div>
	);
};

export default SvgIcon;
