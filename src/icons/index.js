import SvgIcon from "@/components/SvgIcon";
export const requireAll = (requireContext) => requireContext.keys().map(requireContext);
export const req = require.context("./svg", false, /\.svg$/);
export const iconMap = requireAll(req);
export default SvgIcon;
