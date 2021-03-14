import { ToolsItemProps } from "../components/ToolsItem";
import forceFieldAnalysis from "../assets/force_field_analysis.svg";
import swot from "../assets/swot.svg";
import pestle from "../assets/pestle.svg";
import analysis from "../assets/analysis.svg";
import changeType from "../assets/type_of_change.jpg";
import stakeholder from "../assets/stakeholder.svg";
import todo from "../assets/todo.svg";

const tools: ToolsItemProps[] = [
  {
    name: "Force Field Analysis",
    image: forceFieldAnalysis,
    description:
      "It provides a framework for looking at the factors that influence a situation. It looks at forces that are either driving movement toward a goal or blocking movement hindering it.",
    meta: "leadership, business, analysis",
    link: "/ffa",
  },
  {
    name: "SWOT Analysis",
    image: swot,
    description:
      "Used to analyse Strength, Weakness, Opportunity and Threats of an organisation. It allows users to build on what they are good at, address their weakness or threat and utilise the opportunities to them.",
    meta: "leadership, business, analysis",
    link: "/swot",
  },
  {
    name: "PESTLE Analysis",
    image: pestle,
    description:
      "Political, Economic, Sociological, Technological, Legal and Environmental. It refers to external forces.",
    meta: "leadership, business, analysis",
    link: "/pestle",
  },
  {
    name: "Change Readiness Assessment",
    image: analysis,
    description:
      "In today's environment, changes are compulsory for an organization in order to survive and stay competitive. Although, planned change is intended to make the organization more effective and efficient, resistance from members of the organization are expected as they foresee potential threats that can affect their future (Alfonsus B. Susanto, 2008).",
    meta:
      "change readiness, perception toward change efforts, vision for change",
    link: "/readiness",
  },
  {
    name: "Type of change",
    image: changeType,
    description: "Change Characterised by Scale - (Nadler and Tushman 1986)",
    meta: "leadership, business, analysis",
    link: "/change",
  },
  {
    name: "Stakeholder analysis",
    image: stakeholder,
    description:
      "Take time to determine all those involved in the changes and how important they are to driving or inhibiting the changes.",
    meta: "leadership, business, analysis",
    link: "/stakeholder",
  },
  {
    name: "TODO analysis",
    image: todo,
    description: "Ten Commandments for Executing Change",
    meta: "leadership, business, analysis",
    link: "/todo",
  },
];

export default tools;
