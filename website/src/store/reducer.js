const initialState = {
    subBlockData	 	: {},
    sidebarList         : [
        "Electric PVC Tape",
        "Kraft Paper",
        "Nomex Insulation Paper",
        "Insulated Fiberglass Sleevings",
        "Aluminuim and Copper Lugs",
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
                            name : 'Biocon PVC Tape'
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
                    productDetail : '<ul><li> Packaging Details: 30 nos per box  </li><li> Adhesive Type: Single Sided </li><li> Material     : PVC </li><li> Brand        : Wonder </li><li> Tape Width   : 0-20 mm </li></ul>'
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
                    productDetail : '<ul><li> Brand : Star, Champion and V grip </li><li>Tape Width - 12mm</li><li>Thick - 0.075mm</li><li>Length - 10m</li><b>Used For:</b> RO Purifier, Aquarium Filter, Water Tank Pipe. Teflon Tape use in sealing pipe threads. The tape is sold cut to specific widths and wound on a spool, making it easy to wind around pipe threads. Quick and highly effective means of sealing threaded pipe fitting in the ENGINEERING, CHEMICAL and ELECTRICAL industries. It may be used with pipes of any material and with any medium including SOLVENTS and the strongest ALKALIS, ACIDS and other corrosive chemicals.</ul>'
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
                    productDetail : '<ul><li> Brand: Lotus </li> <li> Voltage: 600V </li> <li> Material: Fiberglass </li> <li> Max Temperature Resistance: -30 to 155 Degree Celsius </li> <li> Insulated Fiberglass Sleevings </li><li> Usage/Application : Motors,Wire Harness and Various other Insulating Purposes </li></ul>'
                },
                {
                    productName : "Heat Shrinkable Sleevs",
                    imageData : [
                        {
                            image : '/images/shrinkSleeve.jpeg',
                            name : 'Heat Shrinkable Sleevs'
                        },
                    ],
                    productDetail : '<ul><li> Packaging Details: 100 mtrs </li><li> Brand : Woer </li></ul>'
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
                            name : 'GDR Presspahn Paper'
                        },  
                    ],
                    productDetail : '<ul><li> GSM: 150 - 200 </li> <li> Size: 1/2 to 5 inch </li> <li> Packaging Type: Roll </li> <li> Material: Kraft Paper </li><li>"Weidman"make presspahn paper are used in power and distribution transformers and in the label industry</li></ul>'
                },{
                    productName : 'Black Leatheroid Paper - "Aspha" make',
                    imageData : [
                        {
                            image : '/images/blackcraft.jpg',
                            name : 'Black Leatheroid Paper - "Aspha" make'
                        },  
                    ],
                    productDetail : '<ul><li>Thickness: 0.13mm-0.50mm(5MIL-20MIL)</li> <li>Mineral ash content less than 1%</li> <li>Oil absorption: 18-22%</li> <li>Tensile strength: 50-125 N/15mm</li><b>Features:</b><ul><li>High tensile strength</li><li>Smooth calender and glossy finish</li><li>Made of complete recycled fibre</li></ul></ul>'
                },{
                    productName : 'Undyed Leatheroid Paper - "Aspha" make',
                    imageData : [
                        {
                            image : '/images/browncraft.jpg',
                            name : 'Undyed Leatheroid Paper - "Aspha" make'
                        },  
                    ],
                    productDetail : '<ul><li>Thickness: 0.13mm to 0.50mm (5MIL-20MIL)</li> <li>Mineral ash content less than 1%</li> <li>Oil absorption: 18-22%</li> <li>Tensile strength: 50-125 N/15mm</li><li>This Undyed Leatheroid Paper is suitable for transformers, switch gears and capacitors.</li><b>Features:</b><ul><li>High tensile strength</li><li>High dielectric strength</li><li>Can withstand electric strength up to 3kV in air</li></ul></ul>'
                },{
                    productName : "Khatema Kraft Paper",
                    imageData : [
                        {
                            image : '/images/Khatema.jpg',
                            name : 'Khatema Kraft Paper'
                        },{
                            image : '/images/Khatema1.jpeg',
                            name : 'Khatema Kraft Paper'
                        },  
                    ],
                    productDetail : '<ul><li> GSM: 150 - 200 </li> <li> Size: 1/2 to 5 inch </li> <li> Packaging Type: Roll </li> <li> Material: Kraft Paper </li><li>Kraft paper is suitable for insulation of transformers, wrapping of DPC wires, the cable industry and gaining much anticipation for its unmatched quality standards.</li></ul>'
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
                    productDetail : '<ul><li> Material: Dupond </li> <li> Packaging Type: Roll </li><li> Tensile Strength: 100 mpa </li><li> Brand: Nomex </li><li> Colour: Ivory </li><li> Thickness- 0.125 mm - 0.50 mm </li><li> Dimensions of Rolls - 910 mm 10 mm </li><li> Film Thickness- 0.025 mm - 0.350 mm </li><li> Raw Material/ Composition: Nomex Aramid Paper / Polyester Film </li></ul>'
                },
            ],
        };
    }
    if(action.type === "aluminuim-and-copper-lugs"){
		newState.subBlockData 		= {
            title1 : 'Aluminuim and Copper',
            title2 : 'Lugs',
            description : 'Aiming to satisfy our clients, optimally, we provide our clients with a quality approved array of Copper and Aluminium Lugs. The offered range is manufactured using optimum quality copper and latest technology in accordance with the specifications of our clients. Furthermore, the entire range is well checked against various quality parameters to ensure its quality attributes at clients’ end.',
            productData : [
                {
                    productName : "Aluminuim and Copper Lugs",
                    imageData : [
                        {
                            image : '/images/Lugs.jpg',
                            name : 'Aluminuim and Copper Lugs'
                        },
                    ],
                    productDetail : '<b>&nbsp;&nbsp;&nbsp;Features:</b><ul><li>Precision-designed</li><li>Optimally finished</li><li>Durability</li></ul><b>&nbsp;&nbsp;&nbsp;Range:</b><ul><li>Ring Type Brazed Seam</li><li>Ring Type Double Grip With Insulation Sleeve</li><li>Tailor made Ring Type Brazed Seam</li><li>Fork Type Brazed Seam</li><li>Fork Type with Insulation Sleeve</li><li>Fork Type Double Grip with Insulating Sleeve</li><li>Fork Type with hook Brazed Seam</li><li>Tailor made Fork Type</li><li>Chain From Fork Type</li><li>Round Pin Type Brazed Seam</li><li>Rectangular Pin Type Brazed Seam</li><li>Round Pin Type with insulating Sleeve</li><li>Round Pin Type Double Grip With Insulating Sleeve</li><li>Tailor made Round Pin Type</li><li>Copper Lugs 25 mm Sqr - 1000 mm Sqr</li><li>Range:- 0.5 mm Sqr to 1000 mm Sqr</li></ul><b>&nbsp;&nbsp;&nbsp;Type:</b><ul><li>Ring, Fork, Pin, PAM, Tubular, Ferrule, Insulated, EHI, Twin EHI, Soldering, XLPE, Reducer, In-line Connector, Snap On type, etc.</li></ul>'
                },
            ],
        };
    } 
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
                            name : 'Dr Beck - Elmo 1 A'
                        }, 
                    ],
                    productDetail : '<ul><li> Minimum Order Quantity: 15 Litre</li><li>We offer a wide range of solvent-borne, water based varnishes & solventless resins for various applications.</li><li>Dr. Beck Varnish is best in class and specially required for Motor,fan and any type of rewinding works.</li><b>Advantages:</b><ul><li>Increased mechanical bonding to the winding wire</li><li>Improved dielectric properties</li><li>Improved thermal conductivity</li><li>Protection to the winding against moisture & chemically corrosive Environment</li></ul></ul>'
                },{
                    productName : "Jyoti Insulating Varnish",
                    imageData : [
                        {
                            image : '/images/jyotiVarnish.jpeg',
                            name : 'Jyoti Insulating Varnish'
                        }, 
                    ],
                    productDetail : '<ul><li>Offered varnish is processed using superior quality chemical compounds and the latest technology in line with industry norms. Furthermore, provided varnish is strictly tested by our quality controllers on several parameters before delivering to our customers. Our offered varnish is highly admired for its optimum quality and versatility.</li><b>Features:</b><ul><li>Superb bonding strength</li><li>Fast drying</li><li>Smooth surface</li></ul><li>Minimum Order Quantity: 15 Litre</li></ul>'
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
                    productDetail : '<ul><li>Hardness :	18-90shoreA</li> <li>Material :	Rubber</li> <li>Feature :	Heatproof, Dustproof, Waterproof</li> <li>Elongation :	More than 850 %</li> <li>Quality Type :	Premium Quality</li><li>Poly : Double Poly</li></ul>'
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