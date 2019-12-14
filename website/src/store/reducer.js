const initialState = {
    subBlockData	 	: {},
    sidebarList         : [
        "PVC Tape Biocon Electric PVC Tape",
        "Gdr Presspahn Paper",
        "Nomex Insulation Paper",
        "Insulated Fiberglass Sleevings",
        "Electrical Insulation Kraft Paper",
        "Garware Polyester Film",
        "Elmo Luft 1A - Varnish and Thinne",
        "Rubber Compound",
        "Fibre Glass Products",
        "Soldering Wires & Stics",
        "Super Enamelled Copper Wires",
    ]
}

const reducer = (state = initialState,action) => {
    const newState = {...state}; 
	if(action.type === "pvc-tape-biocon-electric-pvc-tape"){
		newState.subBlockData 		= {
            title1 : 'PVC Tape Biocon',
            title2 : 'Electric PVC Tape',
            imageData : [
                {
                    image : '/images/img1.jpg',
                    name : 'PVC Tape Biocon Electric PVC Tape'
                }, 
                {
                    image : '/images/biocon-electric-pvc-tape.jpg',
                    name : 'PVC Tape Biocon Electric PVC Tape'
                }, 
                {
                    image : '/images/biocon-electric-pvc-tape2.jpg',
                    name : 'PVC Tape Biocon Electric PVC Tape'
                }, 
            ],
            para1 : 'Our range of products include Biocon Electric PVC Tape and Wonder PVC Tape.',
            para2 : [
                    '<li> Biocon Electric PVC Tape </li>',
                    '<li> Minimum Order Quantity: 1200 Roll </li>',
                    // '<li> Rs 6.3 / Roll </li>',
                    '<li> Adhesive Type: Single Sided </li>',
                    '<li> Material     : PVC </li>',
                    '<li> Brand        : Biocon </li>',
                    '<li> Tape Length  : 0-10 m </li>',
                    '<li> Tape Width   : 0-20 mm </li><br/>',
                    // '<li> Biocon Electric PVC Tape </li><br/>',

                    '<b>Additional Information :</b>',
                    '<li> Packaging Details: 30 nos per box  </li>',
                    // '<li> Wonder PVC Tape </li>',
                    // '<li> Rs 5 / PieceGet Latest Price </li>',
                    '<li> Minimum Order Quantity: 1500 Piece </li>',
                    // '<li> Brand   Wonder </li>',
                    '<li> Tape Length 0-10 m </li>',
                    // '<li> Wonder PVC Tape </li>'
                ]
        };
    }
    if(action.type === "super-enamelled-copper-wires"){
		newState.subBlockData 		= {
            title1 : 'Super Enamelled',
            title2 : 'Copper Wires',
            imageData : [
                {
                    image : '/images/img2.jpg',
                    name : 'Super Enamelled Copper Wires'
                }, 
                {
                    image : '/images/super-enamelled-copper-wires.jpg',
                    name : 'Super Enamelled Copper Wires'
                }, 
                {
                    image : '/images/super-enamelled-copper-wires2.jpg',
                    name : 'Steel Alloy Wire'
                }, 
            ],
            // para1 : 'Super Enamelled Copper Wires',  
            para2 : [
                    '<b>Super Enamelled Copper Wires</b>',
                    '<li> Rs 550 / Kilogram </li>',
                    '<li> Diameter: 1-3 mm </li>',
                    '<li> Wire Gauge: 5-10 </li>',
                    '<li> Shape: Round </li>',
                    '<li> Insulation Type: Enameled </li>',
                    '<li> Material: Copper </li>',
                    '<li> Super Enamelled Copper Wires </li><br/>',

                    '<b>Steel Alloy Wire</b>',
                    '<li>Material	Steel</li>',
                    '<li>Usage/Application	Electrical Industry</li>',
                    '<li>Thickness	0.50 mm To 6 mm</li>',
                    '<li>Single Piece Length	3 meter, 6 meter</li>',
                    '<li>Tensile Strength	280Mpa</li>'
                    ]
        };
    }
    if(action.type === "insulated-fiberglass-sleevings"){
		newState.subBlockData 		= {
            title1 : 'Insulated',
            title2 : 'Fiberglass Sleevings',
            imageData : [
                {
                    image : '/images/img3.jpg',
                    name : 'Insulated Fiberglass Sleevings'
                }, 
                {
                    image : '/images/fiberglass-sleevings1.jpg',
                    name : 'Heat Shrinkable Sleevs'
                }, 
            ],
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
    
    if(action.type === "gdr-presspahn-paper"){
		newState.subBlockData 		= {
            title1 : 'Gdr',
            title2 : 'Presspahn Paper',
            imageData : [
                {
                    image : '/images/img5.jpg',
                    name : 'Gdr Presspahn Paper'
                }, 
            ],
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
            imageData : [
                {
                    image : '/images/img6.jpg',
                    name : 'Nomex Insulation Paper'
                }, 
            ],
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
            imageData : [
                {
                    image : '/images/img7.jpg',
                    name : 'Electrical Insulation Kraft Paper'
                }, 
            ],
            para1 : 'Electrical Insulation Kraft Paper',
            para2 : [
                    '<li> Rs 95 / Kilogram </li>',
                    '<li> Paper Type: Kraft Paper </li>',
                    '<li> Packaging Type: Roll </li>',
                    '<li> Pulp Material: Sulfate Pulp </li>',
                    '<li> Thickness: 0.05 mm - 0.25 mm </li>',
                    '<li> Pattern: Plain </li>',
                    '<li> Temperature: 105 Degree C </li>',
                ]
        };
    }
    if(action.type === "garware-polyester-film"){
		newState.subBlockData 		= {
            title1 : 'Garware',
            title2 : 'Polyester Film',
            imageData : [
                {
                    image : '/images/img8.jpg',
                    name : 'Garware Polyester Film'
                }, 
            ],
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
            imageData : [
                {
                    image : '/images/img9.jpg',
                    name : 'Elmo Luft 1A - Varnish and Thinner'
                }, 
            ],
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
            imageData : [
                {
                    image : '/images/img9.jpg',
                    name : 'Polyster Garware'
                }, 
            ],
            para1 : "We are Authorized Distributor of Polyster Film - Garware , which is made up of premier quality raw material thus, confirming to the international standards. It Can be Supplied as per specific sizes of customer's need.",
            para2 : []
        };
    }
    if(action.type === "rubber-compound"){
		newState.subBlockData 		= {
            title1 : "Rubber",
            title2 : "Compound",
            imageData : [
                {
                    image : '/images/rubber-compound2.jpg',
                    name : 'Rubber" Compound'
                }, 
                {
                    image : '/images/rubber-compound1.jpg',
                    name : 'Rubber" Compound'
                }, 
            ],
            para1 : 'Leading Wholesale Trader of Double Poly Premium Rubber Compound from Mumbai.',
            para2 : [
                '<li>Rs 165 / Kilogram</li>',
                '<li>Hardness :	18-90shoreA</li>',
                '<li>Material :	Rubber</li>',
                '<li>Feature :	Heatproof, Dustproof, Waterproof</li>',
                '<li>Elongation :	More than 850%</li>',
                '<li>Quality Type :	Premium Quality</li>',
            ]
        };
    }
    if(action.type === "fibre-glass-products"){
		newState.subBlockData 		= {
            title1 : "Fibre Glass",
            title2 : "Products",
            imageData : [
                {
                    image : '/images/fiberGlassRedTape.jpg',
                    name : 'Red Polyester Tape'
                },
                {
                    image : '/images/fiberGlasspolyester-tape.jpg',
                    name : 'White Polyester Tape'
                },
                {
                    image : '/images/fiberGlass-industrial-fibreglass-cables.jpg',
                    name : 'Industrial Fibreglass Cables'
                }, 
            ],
            para1 : 'Offering you a complete choice of products which include Red Polyester Tape, White Polyester Tape and Industrial Fibreglass Cables.',
            para2 : [
                '<b>Red Polyester Tape</b>',
                '<li>Rs 45 / Roll</li>',
                '<li>Adhesive Type :	Single Sided</li>',
                '<li>Color :	Red</li>',
                '<li>Usage/Application :	Packaging</li>',
                '<li>Tape Length :	20-30 m</li>',
                '<li>Tape Width :	0-20 mm</li><br/>',

                '<b>White Polyester Tape</b>',
                '<li>Rs 45 / Roll</li>',
                '<li>Usage/Application :	Polyester woven tape is used in binding of field coil of induction motors, transformers etc</li>',
                '<li>Type :	Single Sided</li>',
                '<li>Tape Width :	6 mm to 25 mm</li>',
                '<li>Thickness :	0.15 to 0.36 mm</li>',
                '<li>Material :	Polyester</li><br/>',

                '<b>Industrial Fibreglass Cables</b>',
                '<li>Rs 7.5 / Meter</li>',
                '<li>Material :	Fiberglass</li>',
                '<li>Number Of Core :	2 and 3</li>',
                '<li>Temperature Range :	155-180 Degree C</li>',
                '<li>Diameter :	0.50 sqmm - 240 sqmm</li>',
                '<li>Heating Capacity :	500 Degree Celsius</li>',
            ]
        };
    }
    if(action.type === "soldering-wires-&-stics"){
		newState.subBlockData 		= {
            title1 : "Soldering Wires",
            title2 : "and Stics",
            imageData : [
                {
                    image : '/images/solder-sticks.jpeg',
                    name : 'Soldering Wires and Stics'
                },
                // {
                //     image : '/images/fiberGlasspolyester-tape.jpg',
                //     name : 'White Polyester Tape'
                // },
                // {
                //     image : '/images/fiberGlass-industrial-fibreglass-cables.jpg',
                //     name : 'Industrial Fibreglass Cables'
                // }, 
            ],
            para1 : 'Soldering Wires and Stics',
            para2 : [
                '<li>Rs 1,100/Kg</li>',
                '<li>Material :	Non Ferrous</li>',
                '<li>Working Temperature ( degree Celsius) : 	200-250 degree Celsius</li>',
                '<li>Usage :	Wave Soldering, Hot Dip Soldering</li>',
                '<li>Surface Treatment :	Coated</li>',
            ]
        };
    }
	return newState;
}

export default reducer;