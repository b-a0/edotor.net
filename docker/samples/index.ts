import TnoColourTemplate from "./tno-colour-template.gv";
import AdvancedTemplate from "./advanced-template.gv";
import Tutorial from "./tutorial.gv";
import StatemMachine from "./state-machine.gv";
import Clustering0 from "./clustering-0.gv";
import Clustering1 from "./clustering-1.gv";
import HuffmanTree from "./huffman-tree.gv";
import HammingDistance from "./hamming-distance.gv";
import AttributeDemo from "./attribute-distance.gv";
import Empty from "./empty-graph.gv";
import { ItemMenuItem } from "../components/ItemMenu";

export const samples: readonly ItemMenuItem<string>[] = [
	{ display: "TNO Colour Template", value: TnoColourTemplate },
	{ display: "Advanced Template", value: AdvancedTemplate },
	{ display: "State Machine", value: StatemMachine },
	{ display: "Clustering", value: Clustering0 },
	{ display: "Clustering 2", value: Clustering1 },
	{ display: "Huffman Tree", value: HuffmanTree },
	{ display: "Hamming Distance", value: HammingDistance },
	{ display: "Attribute Demo", value: AttributeDemo },
	{ display: "Tutorial", value: Tutorial },
	{ display: "Empty Graph", value: Empty },
];

export {
	Tutorial as tutorial,
};
