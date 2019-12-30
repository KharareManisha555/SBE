const initialState = {
    subBlockData	 	: {},
    sidebarList         : [
        "Electric PVC Tape",
        "Kraft Paper",
        "Nomex Insulation Paper",
        "Insulated Fiberglass Sleevings",
        // "Electrical Insulation Kraft Paper",
        "Cotton Tape",
        "Garware Polyester Film",
        "Insulation Varnish",
        "Rubber Compound",
        "Fibre Glass Products",
        "Soldering Wires & Stics",
        "Super Enamelled Copper Wires",
    ]
}

const reducer = (state = initialState,action) => {
    const newState = {...state}; 
	if(action.type === "electric-pvc-tape"){
		newState.subBlockData 		= {
            title1 : 'Electric',
            title2 : 'PVC Tape',
            description: '<p>Our range of products include Biocon Electric PVC Tape and Wonder PVC Tape.</p>',
            productData : [
                {
                    productName : "Biocon PVC Tape",
                    imageData : [
                        {
                            image : '/images/img1.jpg',
                            name : 'Electric PVC Tape'
                        },  
                        
                    ],
                    productDetail : '<ul><li> Packaging Details: 30 nos per box  </li><li> Adhesive Type: Single Sided </li><li> Material     : PVC </li><li> Brand        : Biocon </li><li> Tape Width   : 0-20 mm </li></ul>'
                },
                {
                    productName : "Wonder PVC Tape",
                    imageData : [
                        {
                            image : '/images/wonder-tape.jpg',
                            name : 'Wonder PVC Tape'
                        }, 
                    ],
                    productDetail : '<ul><li> Packaging Details: 30 nos per box  </li><li> Adhesive Type: Single Sided </li><li> Material     : PVC </li><li> Brand        : Biocon </li><li> Tape Width   : 0-20 mm </li></ul>'
                },
                {
                    productName : "Teflon tape",
                    imageData : [
                        {
                            image : '/images/Teflon1.jpg',
                            name : 'Teflon tape'
                        }, 
                        {
                            image : '/images/Teflon2.jpeg',
                            name : 'Teflon tape'
                        }, 
                    ],
                    productDetail : '<ul><li> Packaging Details: 30 nos per box  </li><li> Adhesive Type: Single Sided </li><li> Material     : PVC </li><li> Brand        : Biocon </li><li> Tape Width   : 0-20 mm </li></ul>'
                }
            ]
        };
    }
    if(action.type === "super-enamelled-copper-wires"){
		newState.subBlockData 		= {
            title1 : 'Super Enamelled',
            title2 : 'Copper Wires',
            description: '',
            productData : [
                {
                    productName : "Super Enamelled Copper Wires",
                    imageData : [
                        {
                            image : '/images/img2.jpg',
                            name : 'Super Enamelled Copper Wires'
                        }, 
                        {
                            image : '/images/super-enamelled-copper-wires.jpg',
                            name : 'Super Enamelled Copper Wires'
                        },
                    ],
                    productDetail : '<ul><li> Diameter: 1-3 mm </li> <li> Wire Gauge: 5-10 </li> <li> Shape: Round </li> <li> Insulation Type: Enameled </li> <li> Material: Copper </li> <li> Super Enamelled Copper Wires </li><br/></ul>'
                },
                {
                    productName : "Steel Alloy Wire",
                    imageData : [
                        {
                            image : '/images/super-enamelled-copper-wires2.jpg',
                            name : 'Steel Alloy Wire'
                        }, 
                    ],
                    productDetail : '<ul><li>Material	Steel</li> <li>Usage/Application	Electrical Industry</li> <li>Thickness	0.50 mm To 6 mm</li> <li>Single Piece Length	3 meter, 6 meter</li> <li>Tensile Strength	280Mpa</li></ul>'
                },
            ],
        };
    }
    if(action.type === "insulated-fiberglass-sleevings"){
		newState.subBlockData 		= {
            title1 : 'Insulated',
            title2 : 'Fiberglass Sleevings',
            description : '',
            productData : [
                {
                    productName : "Insulated Fiberglass Sleevings",
                    imageData : [
                        {
                            image : '/images/img3.jpg',
                            name : 'Insulated Fiberglass Sleevings'
                        }, 
                    ],
                    productDetail : '<ul><li> Usage/Application </li> <li> Motors,Wire Harness and Various other Insulating Purposes </li> <li> Brand: Lotus </li> <li> Voltage: 600V </li> <li> Material: Fiberglass </li> <li> Max Temperature Resistance: -30 to 155 Degree Celsius </li> <li> Insulated Fiberglass Sleevings </li></ul>'
                },
                {
                    productName : "Heat Shrinkable Sleevs",
                    imageData : [
                        {
                            image : '/images/fiberglass-sleevings1.jpg',
                            name : 'Heat Shrinkable Sleevs'
                        },
                    ],
                    productDetail : '<ul><li> Packaging Details: 100 mtrs </li></ul>'
                },
            ],
        };
    }
    
    if(action.type === "kraft-paper"){
		newState.subBlockData = {
            title1 : 'Kraft',
            title2 : 'Paper',
            description : '',
            productData : [
                {
                    productName : "GDR Presspahn Paper",
                    imageData : [
                        {
                            image : '/images/img5.jpg',
                            name : 'Kraft Paper'
                        },  
                    ],
                    productDetail : '<ul><li> GSM: 150 - 200 </li> <li> Size: 1/2 to 5 inch </li> <li> Packaging Type: Roll </li> <li> Material: Kraft Paper </li> <li> For Power transformers, also used in the label industry </li></ul>'
                },{
                    productName : 'Black Leatheroid Paper - "Aspha" make',
                    imageData : [
                        {
                            image : '/images/blackcraft.jpg',
                            name : 'Black Leatheroid Paper'
                        },  
                    ],
                    productDetail : '<ul><li> GSM: 150 - 200 </li> <li> Size: 1/2 to 5 inch </li> <li> Packaging Type: Roll </li> <li> Material: Kraft Paper </li> <li> For Power transformers, also used in the label industry </li></ul>'
                },{
                    productName : 'Undyed Leatheroid Paper - "Aspha" make',
                    imageData : [
                        {
                            image : '/images/browncraft.jpg',
                            name : 'Undyed Leatheroid Paper'
                        },  
                    ],
                    productDetail : '<ul><li> GSM: 150 - 200 </li> <li> Size: 1/2 to 5 inch </li> <li> Packaging Type: Roll </li> <li> Material: Kraft Paper </li> <li> For Power transformers, also used in the label industry </li></ul>'
                },{
                    productName : "Khatema Kraft Paper",
                    imageData : [
                        {
                            image : '/images/Khatema.jpg',
                            name : 'Kraft Paper'
                        },{
                            image : '/images/Khatema1.jpeg',
                            name : 'Kraft Paper'
                        },  
                    ],
                    productDetail : '<ul><li> GSM: 150 - 200 </li> <li> Size: 1/2 to 5 inch </li> <li> Packaging Type: Roll </li> <li> Material: Kraft Paper </li> <li> For Power transformers, also used in the label industry </li></ul>'
                },
            ],
        };
    }
    if(action.type === "nomex-insulation-paper"){
		newState.subBlockData 		= {
            title1 : 'Nomex',
            title2 : 'Insulation Paper',
            description : '<b>Nomex Paper Class F</b> is Nomex Polyester Nomex composite, which is used for electrical motor insulation. It is made using Original DuPont Nomex paper. Nomex Polyester Paper gives best thermal performance in terms of electrical insulating properties.',
            productData : [
                {
                    productName : "Nomex Insulation Paper",
                    imageData : [
                        {
                            image : '/images/Nomex-3.jpg',
                            name : 'Nomex Insulation Paper'
                        },{
                            image : '/images/img6.jpg',
                            name : 'Nomex Insulation Paper'
                        },{
                            image : '/images/Nomex-1.jpg',
                            name : 'Nomex Insulation Paper'
                        },{
                            image : '/images/Nomex-2.png',
                            name : 'Nomex Insulation Paper'
                        },  
                    ],
                    productDetail : '<ul><li> Material: Dupond </li> <li> Packaging Type: Roll </li><li> Tensile Strength: 100 mpa </li><li> Brand: Nomex </li><li> Colour: Ivory </li><li> Thickness- 0.125 mm - 0.50 mm </li></ul><li> Dimensions of Rolls - 910 mm 10 mm </li><li> Film Thickness- 0.025 mm - 0.350 mm </li><li> Raw Material/ Composition: Nomex Aramid Paper / Polyester Film </li></ul>'






                },
            ],
        };
    }
    // if(action.type === "electrical-insulation-kraft-paper"){
	// 	newState.subBlockData 		= {
    //         title1 : 'Electrical Insulation',
    //         title2 : 'Kraft Paper',
    //         description : '',
    //         productData : [
    //             {
    //                 productName : "Electrical Insulation Kraft Paper",
    //                 imageData : [
    //                     {
    //                         image : '/images/img7.jpg',
    //                         name : 'Electrical Insulation Kraft Paper'
    //                     },
    //                 ],
    //                 productDetail : '<ul><li> Paper Type: Kraft Paper </li> <li> Packaging Type: Roll </li> <li> Pulp Material: Sulfate Pulp </li> <li> Thickness: 0.05 mm - 0.25 mm </li> <li> Pattern: Plain </li> <li> Temperature: 105 Degree C </li></ul>'
    //             },
    //         ],
    //     };
    // } 
    if(action.type === "cotton-tape"){
     newState.subBlockData       = {
            title1 : 'Cotton',
            title2 : 'Tape',
            description : '',
            productData : [
                {
                    productName : "Cotton Tape",
                    imageData : [
                        {
                            image : '/images/img7.jpg',
                            name : 'Cotton Tape'
                        },{
                            image : '/images/cttp.jpg',
                            name : 'Cotton Tape'
                        },{
                            image : '/images/cttp1.jpg',
                            name : 'Cotton Tape'
                        },
                    ],
                    productDetail : '<ul><li>THICKNESS RANGE : 0.125 MM TO 0.9 MM</li><li>WIDTH RANGE : 6 MM TO 70 MM</li><li><b>Features:</b></li><ul><li>Tear resistance</li><li>Durability</li><li>Unmatched quality</li></ul><li><b>APPLICATIONS:</b></li><ul><li>Widely use in Current Transformer Industry</li><li>Motor Winding</li><li>C.T Making</li><li>Cable Insulation</li><li>Conductor wrapping</li><li>Connection wrapping</li><li>Armature protection cap</li><li>Interlayer coil insulation</li></ul>'
                },
            ],
        };
    }
    if(action.type === "garware-polyester-film"){
		newState.subBlockData 		= {
            title1 : 'Garware',
            title2 : 'Polyester Film',
            description : '',
            productData : [
                {
                    productName : "Garware Polyester Film",
                    imageData : [
                        {
                            image : '/images/img8.jpg',
                            name : 'Garware Polyester Film'
                        }, 
                    ],
                    productDetail : '<ul><li> Brand: Garware </li> <li> Packaging Type: Roll </li> <li> Usage/Application: Industrial </li> <li> Thickness: 25, 50, 75, 100, 125, 187, 250, 350 Microns </li> <li> Material: Polyester </li> <li> Core Weight: 2.2 kg </li> <li> Packaging Details: 50 Kgs </li></ul>'
                },
            ],
        };
    }
    if(action.type === "insulation-varnish"){
		newState.subBlockData 		= {
            title1 : 'Insulation',
            title2 : 'Varnish',
            description : '',
            productData : [
                {
                    productName : "Dr Beck - Elmo 1 A",
                    imageData : [
                        {
                            image : '/images/img9.jpg',
                            name : 'Elmo Luft 1A - Varnish and Thinner'
                        }, 
                    ],
                    productDetail : '<ul><li> Minimum Order Quantity: 15 Litre</li><li>Dr. Beck Varnish is best in class and specially required for Motor,fan and any type of rewinding works.</li></ul>'
                },{
                    productName : "Jyoti Insulating Varnish",
                    imageData : [
                        {
                            image : '/images/img9.jpg',
                            name : 'Elmo Luft 1A - Varnish and Thinner'
                        }, 
                    ],
                    productDetail : '<ul><li>Offered varnish is processed using superior quality chemical compounds and the latest technology in line with industry norms. Furthermore, provided varnish is strictly tested by our quality controllers on several parameters before delivering to our customers. Our offered varnish is highly admired for its optimum quality and versatility.</li><li><b>Features:</b></li><ul><li>Superb bonding strength</li><li>Fast drying</li><li>Smooth surface</li></ul><li>Minimum Order Quantity: 15 Litre</li></ul>'
                }
            ]
        };
    }
    if(action.type === "rubber-compound"){
		newState.subBlockData 		= {
            title1 : "Rubber",
            title2 : "Compound",
            description : 'Leading Wholesale Trader of Double Poly Premium Rubber Compound from Mumbai.',
            productData : [
                {
                    productName : "Rubber Compound",
                    imageData : [
                        {
                            image : '/images/rubber-compound2.jpg',
                            name : 'Rubber Compound'
                        }, 
                        {
                            image : '/images/rubber-compound1.jpg',
                            name : 'Rubber Compound'
                        }, 
                    ],
                    productDetail : '<ul><li>Hardness :	18-90shoreA</li> <li>Material :	Rubber</li> <li>Feature :	Heatproof, Dustproof, Waterproof</li> <li>Elongation :	More than 850%</li> <li>Quality Type :	Premium Quality</li></ul>'
                }
            ],
        };
    }
    if(action.type === "fibre-glass-products"){
		newState.subBlockData 		= {
            title1 : "Fibre Glass",
            title2 : "Products",
            description : 'Offering you a complete choice of products which include Red Polyester Tape, White Polyester Tape and Industrial Fibreglass Cables.',
            productData : [
                {
                    productName : "Red Polyester Tape",
                    imageData : [
                        {
                            image : '/images/fiberGlassRedTape.jpg',
                            name : 'Red Polyester Tape'
                        },
                    ],
                    productDetail : '<ul><li>Adhesive Type :	Single Sided</li> <li>Color :	Red</li> <li>Usage/Application :	Packaging</li>  <li>Tape Width :	0-20 mm</li></ul>'
                },
                {
                    productName : "White Polyester Tape",
                    imageData : [
                        {
                            image : '/images/fiberGlasspolyester-tape.jpg',
                            name : 'White Polyester Tape'
                        },
                    ],
                    productDetail : '<ul><li>Usage/Application :	Polyester woven tape is used in binding of field coil of induction motors, transformers etc</li> <li>Type :	Single Sided</li> <li>Tape Width :	6 mm to 25 mm</li> <li>Thickness :	0.15 to 0.36 mm</li> <li>Material :	Polyester</li></ul>'
                },
                {
                    productName : "Industrial Fibreglass Cables",
                    imageData : [
                        {
                            image : '/images/fiberGlass-industrial-fibreglass-cables.jpg',
                            name : 'Industrial Fibreglass Cables'
                        }, 
                    ],
                    productDetail : '<ul><li>Material :	Fiberglass</li> <li>Number Of Core :	2 and 3</li> <li>Temperature Range :	155-180 Degree C</li> <li>Diameter :	0.50 sqmm - 240 sqmm</li> <li>Heating Capacity :	500 Degree Celsius</li></ul>'
                },
            ],
        };
    }
    if(action.type === "soldering-wires-&-stics"){
		newState.subBlockData 		= {
            title1 : "Soldering Wires",
            title2 : "and Stics",
            description : '',
            productData : [
                {
                    productName : "Soldering Wires and Stics",
                    imageData : [
                        {
                            image : '/images/solder-sticks.jpeg',
                            name : 'Soldering Wires and Stics'
                        },
                    ],
                    productDetail : '<ul><li>Material :	Non Ferrous</li> <li>Working Temperature ( degree Celsius) : 	200-250 degree Celsius</li> <li>Usage :	Wave Soldering, Hot Dip Soldering</li> <li>Surface Treatment :	Coated</li></ul>'
                },
            ],
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
	return newState;
}

export default reducer;