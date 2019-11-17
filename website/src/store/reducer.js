

const initialState = {
	subBlockData	 	: {},
}

const reducer = (state = initialState,action) => {
    const newState = {...state}; 
	if(action.type === "winding-wire-of-copper-aluminium"){
		newState.subBlockData 		= {
            title1 : 'PVC Tape',
            title2 : 'Biocon Electric PVC Tape',
            image : '/images/PVC INSULATION TAPE.jpg',
            para1 : 'Our range of products include Biocon Electric PVC Tape and Wonder PVC Tape.',
            para2 : [
                    'Biocon Electric PVC Tape',

                    'Minimum Order Quantity: 40 Roll',
                    'Rs 6.3 / Roll',

                    'Adhesive Type: Single Sided',
                    'Material     : PVC',
                    'Brand        : Biocon',
                    'Tape Length  : 0-10 m',
                    'Tape Width   : 0-20 mm',

                    'Biocon Electric PVC Tape',

                    'Additional Information:',

                    'Packaging Details: 20 nos per box',

                    'Wonder PVC Tape',
                    'Rs 5 / PieceGet Latest Price',

                    'Minimum Order Quantity: 1500 Piece',

                    'Brand   Wonder',
                    'Tape Length 0-10 m',

                    'Wonder PVC Tape'
                ]
        };
    }
    if(action.type === "copper-clad-aluminium-wire"){
		newState.subBlockData 		= {
            title1 : 'Super Enamelled',
            title2 : 'Copper Wires',
            image : '/images/Super Enamelled Copper Wires.jpg',
            para1 : 'Super Enamelled Copper Wires',  
            para2 : [
                    'Rs 550 / Kilogram',
                    'Diameter: 1-3 mm',
                    'Wire Gauge: 5-10',
                    'Shape: Round',
                    'Insulation Type: Enameled',
                    'Material: Copper',
                    'Super Enamelled Copper Wires'
                    ]
        };
    }
    if(action.type === "electric-insulating-materials"){
		newState.subBlockData 		= {
            title1 : 'Insulated',
            title2 : 'Fiberglass Sleevings',
            image : '/images/Sleevings.jpg',
            para1 : 'Insulated Fiberglass Sleevings',
            para2 : [
                    'Rs 1 / Meter',
                    'Minimum Order Quantity: 1000 Meter',
                    'Usage/Application',
                    'Motors,Wire Harness and Various other Insulating Purposes',
                    'Brand: Lotus',
                    'Voltage: 600V',
                    'Material: Fiberglass',
                    'Max Temperature Resistance: -30 to 155 Degree Celsius',
                    'Insulated Fiberglass Sleevings',
                    '<b>Additional Information:</b>',
                    '• Packaging Details: 100 mtrs',
            ]
        };
    }
    if(action.type === "kraft-paper"){
		newState.subBlockData 		= {
            title1 : 'Kraft',
            title2 : 'Paper',
            image : '/images/pic4.jpg',
            para1 : 'Electrical Grade Insulating Kraft Paper that we supply is made from excellent grade of virgin fibers. These raw materials are imported from different countries. These are widely used as an insulation material of copper and aluminum wires. Apart from this these are also used in winding of transformer, motor, rotor coils.',
            para2 : []
        };
    }
    if(action.type === "press-pahn-paper"){
		newState.subBlockData 		= {
            title1 : 'Gdr',
            title2 : 'Presspahn Paper',
            image : '/images/Presspahn paper.jpg',
            para1 : 'Gdr Presspahn Paper',
            para2 : [
                    'Rs 375 / Kilogram',
                    'GSM: 150 - 200',
                    'Size: 1/2 to 5 inch',
                    'Packaging Type: Roll',
                    'Material: Kraft Paper',
                    'Length: 0-200 m',
                    'For Power transformers, also used in the label industry',
                    ]
        };
    }
    if(action.type === "nomex-du-pont"){
		newState.subBlockData 		= {
            title1 : 'Nomex',
            title2 : 'Insulation Paper',
            image : '/images/Nomex Insulation Paper.jpg',
            para1 : 'Nomex Insulation Paper',
            para2 : [
                    'Rs 730 / Kg',
                    'Minimum Order Quantity: 50 Kg',
                    'Material: Dupond',
                    'Packaging Type: Roll',
                    'Tensile Strength: 100 mpa',
                    'Brand: Nomex',
                    'Thickness: 0.25 - 2 mm',
                    '<b>Nomex Paper Class F</b> is Nomex Polyester Nomex composite, which is used for electrical motor insulation. It is made using Original DuPont Nomex paper. Nomex Polyester Paper gives best thermal performance in terms of electrical insulating properties.',
            ]
        };
    }
    if(action.type === "crepe-paper"){
		newState.subBlockData 		= {
            title1 : 'Electrical Insulation',
            title2 : 'Kraft Paper',
            image : '/images/Cotton Tape.jpg',
            para1 : 'Electrical Insulation Kraft Paper',
            para2 : [
                    'Rs 95 / Kilogram',
                    'Paper Type: Kraft Paper',
                    'Packaging Type: Roll',
                    'Pulp Material: Sulfate Pulp',
                    'Thickness: 0.05 mm - 0.25 mm',
                    'Pattern: Plain',
                    'Temperature: 105 Degree C',
                    'Electrical Insulation Kraft Paper',
                ]
        };
    }
    if(action.type === "polyster-garware"){
		newState.subBlockData 		= {
            title1 : 'Garware',
            title2 : 'Polyester Film',
            image : '/images/Polyster Film.jpg',
            para1 : "Garware Polyester Film",
            para2 : [
                    'Rs 150 / Kilogram',
                    'Minimum Order Quantity: 50 Kilogram',
                    'Brand: Garware',
                    'Packaging Type: Roll',
                    'Usage/Application: Industrial',
                    'Thickness: 25, 50, 75, 100, 125, 187, 250, 350 Microns',
                    'Material: Polyester',
                    'Core Weight: 2.2 kg',
                    'Garware Polyester Film',
                    '<b>Additional Information:</b>',
                    '• Packaging Details: 50 Kgs',
                    ]
        };
    }
    if(action.type === "dr-beck-resins-hardener-varnishes"){
		newState.subBlockData 		= {
            title1 : 'Elmo Luft 1A -',
            title2 : 'Varnish and Thinner',
            image : '/images/pic10.jpg',
            para1 : 'Elmo Luft 1A - Varnish and Thinner',
            para2 : [
                    'Rs 185 / Litre',
                    'Minimum Order Quantity: 15 Litre',
                    'Dr.beck Varnish is best in class and specially required for Motor,fan and any type of rewinding works.' 
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