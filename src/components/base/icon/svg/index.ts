import type { SvgProps } from "@/types/icon";

const IconsMap = {
	app: {},
	outline: {},
	solid: {},
};

type SvgName = keyof typeof IconsMap.app | keyof typeof IconsMap.outline | keyof typeof IconsMap.solid;

type SvgType = keyof typeof IconsMap;

export type { SvgName, SvgType };
export default IconsMap as {
	[key: string]: { [key: string]: React.FC<SvgProps> };
};
