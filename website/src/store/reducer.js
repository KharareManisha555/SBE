const initialState = {
    subBlockData	 	: {},
    sidebarList         : [
        "PVC Tape Biocon Electric PVC Tape",
        "Super Enamelled Copper Wires",
        "Insulated Fiberglass Sleevings",
        "Kraft Paper",
        "Gdr Presspahn Paper",
        "Nomex Insulation Paper",
        "Electrical Insulation Kraft Paper",
        "Garware Polyester Film",
        "Elmo Luft 1A - Varnish and Thinne",
    ]
}

const reducer = (state = initialState,action) => {
    const newState = {...state}; 
	if(action.type === "pvc-tape-biocon-electric-pvc-tape"){
		newState.subBlockData 		= {
            title1 : 'PVC Tape Biocon',
            title2 : 'Electric PVC Tape',
            image : '/images/img1.jpg',
            para1 : 'Our range of products include Biocon Electric PVC Tape and Wonder PVC Tape.',
            para2 : [
                    '<li> Biocon Electric PVC Tape </li>',
                    '<li> Minimum Order Quantity: 40 Roll </li>',
                    '<li> Rs 6.3 / Roll </li>',
                    '<li> Adhesive Type: Single Sided </li>',
                    '<li> Material     : PVC </li>',
                    '<li> Brand        : Biocon </li>',
                    '<li> Tape Length  : 0-10 m </li>',
                    '<li> Tape Width   : 0-20 mm </li>',
                    '<li> Biocon Electric PVC Tape </li><br/>',

                    '<b>Additional Information :</b>',
                    '<li> Packaging Details: 20 nos per box  </li>',
                    '<li> Wonder PVC Tape </li>',
                    '<li> Rs 5 / PieceGet Latest Price </li>',
                    '<li> Minimum Order Quantity: 1500 Piece </li>',
                    '<li> Brand   Wonder </li>',
                    '<li> Tape Length 0-10 m </li>',
                    '<li> Wonder PVC Tape </li>'
                ]
        };
    }
    if(action.type === "super-enamelled-copper-wires"){
		newState.subBlockData 		= {
            title1 : 'Super Enamelled',
            title2 : 'Copper Wires',
            image : '/images/img2.jpg',
            para1 : 'Super Enamelled Copper Wires',  
            para2 : [
                    '<li> Rs 550 / Kilogram </li>',
                    '<li> Diameter: 1-3 mm </li>',
                    '<li> Wire Gauge: 5-10 </li>',
                    '<li> Shape: Round </li>',
                    '<li> Insulation Type: Enameled </li>',
                    '<li> Material: Copper </li>',
                    '<li> Super Enamelled Copper Wires </li>'
                    ]
        };
    }
    if(action.type === "insulated-fiberglass-sleevings"){
		newState.subBlockData 		= {
            title1 : 'Insulated',
            title2 : 'Fiberglass Sleevings',
            image : '/images/img3.jpg',
            para1 : 'Insulated Fiberglass Sleevings',
            para2 : [
                    '<li> Rs 1 / Meter </li>',
                    '<li> Minimum Order Quantity: 1000 Meter </li>',
                    '<li> Usage/Application </li>',
                    '<li> Motors,Wire Harness and Various other Insulating Purposes </li>',
                    '<li> Brand: Lotus </li>',
                    '<li> Voltage: 600V </li>',
                    '<li> Material: Fiberglass </li>',
                    '<li> Max Temperature Resistance: -30 to 155 Degree Celsius </li>',
                    '<li> Insulated Fiberglass Sleevings </li><br/>',

                    '<b>Additional Information :</b>',
                    '<li> Packaging Details: 100 mtrs </li>',
            ]
        };
    }
    if(action.type === "kraft-paper"){
		newState.subBlockData 		= {
            title1 : 'Kraft',
            title2 : 'Paper',
            image : '/images/img4.jpg',
            para1 : 'Electrical Grade Insulating Kraft Paper that we supply is made from excellent grade of virgin fibers. These raw materials are imported from different countries. These are widely used as an insulation material of copper and aluminum wires. Apart from this these are also used in winding of transformer, motor, rotor coils.',
            para2 : []
        };
    }
    if(action.type === "gdr-presspahn-paper"){
		newState.subBlockData 		= {
            title1 : 'Gdr',
            title2 : 'Presspahn Paper',
            image : '/images/img5.jpg',
            para1 : 'Gdr Presspahn Paper',
            para2 : [
                    '<li> Rs 375 / Kilogram </li>',
                    '<li> GSM: 150 - 200 </li>',
                    '<li> Size: 1/2 to 5 inch </li>',
                    '<li> Packaging Type: Roll </li>',
                    '<li> Material: Kraft Paper </li>',
                    '<li> Length: 0-200 m </li>',
                    '<li> For Power transformers, also used in the label industry </li>',
                    ]
        };
    }
    if(action.type === "nomex-insulation-paper"){
		newState.subBlockData 		= {
            title1 : 'Nomex',
            title2 : 'Insulation Paper',
            image : '/images/img6.jpg',
            para1 : 'Nomex Insulation Paper',
            para2 : [
                    '<li> Rs 730 / Kg </li>',
                    '<li> Minimum Order Quantity: 50 Kg </li>',
                    '<li> Material: Dupond </li>',
                    '<li> Packaging Type: Roll </li>',
                    '<li> Tensile Strength: 100 mpa </li>',
                    '<li> Brand: Nomex </li>',
                    '<li> Thickness: 0.25 - 2 mm </li><br/>',
                    '<b>Nomex Paper Class F</b> is Nomex Polyester Nomex composite, which is used for electrical motor insulation. It is made using Original DuPont Nomex paper. Nomex Polyester Paper gives best thermal performance in terms of electrical insulating properties.',
            ]
        };
    }
    if(action.type === "electrical-insulation-kraft-paper"){
		newState.subBlockData 		= {
            title1 : 'Electrical Insulation',
            title2 : 'Kraft Paper',
            image : '/images/img7.jpg',
            para1 : 'Electrical Insulation Kraft Paper',
            para2 : [
                    '<li> Rs 95 / Kilogram </li>',
                    '<li> Paper Type: Kraft Paper </li>',
                    '<li> Packaging Type: Roll </li>',
                    '<li> Pulp Material: Sulfate Pulp </li>',
                    '<li> Thickness: 0.05 mm - 0.25 mm </li>',
                    '<li> Pattern: Plain </li>',
                    '<li> Temperature: 105 Degree C </li>',
                    '<li> Electrical Insulation Kraft Paper </li>',
                ]
        };
    }
    if(action.type === "garware-polyester-film"){
		newState.subBlockData 		= {
            title1 : 'Garware',
            title2 : 'Polyester Film',
            image : '/images/img8.jpg',
            para1 : "Garware Polyester Film",
            para2 : [
                    '<li> Rs 150 / Kilogram </li>',
                    '<li> Minimum Order Quantity: 50 Kilogram </li>',
                    '<li> Brand: Garware </li>',
                    '<li> Packaging Type: Roll </li>',
                    '<li> Usage/Application: Industrial </li>',
                    '<li> Thickness: 25, 50, 75, 100, 125, 187, 250, 350 Microns </li>',
                    '<li> Material: Polyester </li>',
                    '<li> Core Weight: 2.2 kg </li>',
                    '<li> Garware Polyester Film </li><br/>',

                    '<b>Additional Information :</b>',
                    '<li> Packaging Details: 50 Kgs </li>',
                    ]
        };
    }
    if(action.type === "elmo-luft-1a---varnish-and-thinne"){
		newState.subBlockData 		= {
            title1 : 'Elmo Luft 1A -',
            title2 : 'Varnish and Thinner',
            image : '/images/img9.jpg',
            para1 : 'Elmo Luft 1A - Varnish and Thinner',
            para2 : [
                    '<li> Rs 185 / Litre</li>',
                    '<li> Minimum Order Quantity: 15 Litre</li><br/>',
                    'Dr. Beck Varnish is best in class and specially required for Motor,fan and any type of rewinding works.' 
                    ]
        };
    }
    if(action.type === "about-us"){
		newState.subBlockData 		= {
            title1 : 'Polyster',
            title2 : 'Garware',
            image : '/images/pic9.jpg',
            para1 : "We are Authorized Distributor of Polyster Film - Garware , which is made up of premier quality raw material thus, confirming to the international standards. It Can be Supplied as per specific sizes of customer's need.",
            para2 : []
        };
    }
	return newState;
}

export default reducer;