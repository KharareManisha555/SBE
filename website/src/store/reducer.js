

const initialState = {
	subBlockData	 	: {},
}

const reducer = (state = initialState,action) => {
    const newState = {...state}; 
	if(action.type === "winding-wire-of-copper-aluminium"){
		newState.subBlockData 		= {
            title1 : 'PVC Tape',
            title2 : 'Biocon Electric PVC Tape',
            image : '/images/biocon-electric-pvc-tap.jpg',
            para1 : 'Our range of products include Biocon Electric PVC Tape and Wonder PVC Tape.',
            para2 : [
                'Biocon Electric PVC Tape',
                
                'Minimum Order Quantity: 40 Roll',
                'Rs 6.3 / RollGet Latest Price',

                'Adhesive Type: Single Sided',
                'Material     : PVC',
                'Brand        : Biocon',
                'Tape Length  : 0-10 m',
                'Tape Width   : 0-20 mm',

                'Biocon Electric PVC Tape',

                'Additional Information:',

                'Packaging Details: 20 nos per box',
            ]
        };
    }
    if(action.type === "copper-clad-aluminium-wire"){
		newState.subBlockData 		= {
            title1 : 'Copper Clad',
            title2 : 'Aluminum Wire',
            image : '/images/pic3.jpg',
            para1 : 'Copper clad aluminium wire is produced with the production process of cladding welding drawing method. By cladding copper strip concentrically on the outer surface of the aluminium core. To meet customer’s requirement wire is treated and drawn several times. CCA wire has the characteristics of both copper wire & aluminium wire low density from aluminium wire & good conductor from copper wire. This kind of bimetallic wire is suitable for most electrical applications.',
            para2 : []
        };
    }
    if(action.type === "electric-insulating-materials"){
		newState.subBlockData 		= {
            title1 : 'Electric',
            title2 : 'Insulating Materials',
            image : '/images/pic2.jpg',
            para1 : 'Our Electric Insulation material sourced out from most reliable vendors and finds wide applications in electric industry. We have been supplying the electric insulating material to industries like manufacturers of transformers, motor and armature industry. Our following insulating material is in big demand in market for their excellent quality and competitive price .',
            para2 : [
                'We offer best quality Electric Insulating Material such as :',
                '1. Kraft Paper',
                '2. Polyester Film',
                '3. Insulating Varnish',
                '4. Prespahn Paper',
                '5. Other insulating materials'
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
            title1 : 'Press',
            title2 : 'Pahn Paper',
            image : '/images/pic5.jpg',
            para1 : '',
            para2 : [
                'We offer best quality Electric Insulating Material such as :',
                '1. Kraft Paper',
                '2. Polyester Film',
                '3. Insulating Varnish',
                '4. Press Pahn Paper',
                '5. Other insulating materials'
            ]
        };
    }
    if(action.type === "nomex-du-pont"){
		newState.subBlockData 		= {
            title1 : '"F" & "H" ',
            title2 : 'Nomex-DU Pont',
            image : '/images/pic6.jpg',
            para1 : '',
            para2 : [
                'Manufactured to withstand a substantial temperature range, Nomex® paper can help you design top-quality motors, generators, and transformers.',
                'We offer a complete portfolio of high-performance insulation solutions engineered for outstanding performance and reliability. The DuPont line of Nomex® electrical insulation products includes papers and pressboards.',
                'A unique combination of properties give Nomex® materials superior characteristics, making them ideally suited for electrical insulation applications. The advantages of Nomex® products include:',
                '1. Inherent dielectric strength',
                '2. Mechanical toughness',
                '3. Thermal stability',
                '4. Chemical compatibility',
                '5. Flame resistance',
                '6. Flame resistance',
                '7. Moisture insensitivity',
                '8. Cryogenic capability',
                '9. Radiation resistance',
                '10. Nontoxic formulation'
            ]
        };
    }
    if(action.type === "crepe-paper"){
		newState.subBlockData 		= {
            title1 : 'Crepe',
            title2 : 'Paper',
            image : '/images/pic7.jpg',
            para1 : 'Crepe papers are produced from base papers weighing 25 - 180 g/m2 (15 -111 lbs/ream) and have an elongation of between 15 to 300 %.',
            para2 : [
                'Field of Application :',
                '<br />',
                'Creped Papers are ideally suited to insulate irregular shapes and surfaces where a proper insulation cannot be reached with flat papers. Specialties were developed for applications as magnet wire insulation, as layer insulation, in current transformers, in RIP bushings or as shielding material.'
            ]
        };
    }
    if(action.type === "sleeving-and-cotton-tape"){
		newState.subBlockData 		= {
            title1 : 'Sleeving "B" to "H"',
            title2 : 'Class & Cotton Tape',
            image : '/images/pic8.jpg',
            para1 : 'We provide Fiber Glass Sleevings of various types such as silicon coated, pvc coated, sleeves both varnished and unvarnished from 1mm to 25mm in all following classes :',
            para2 : [
                '<br/>',
                'CLASS B - ALKYD PHENOLIC VARNISHED SLEEVES',
                'CLASS F - POLYURETHANE SLEEVES',
                'CLASS H - SILICONE RUBBER SLEEVES',
                'Fibreglass Sleeves has excellent dielectricity, automatic quench and softness, widely used in the insulation protection of internal line cluster in H&N machinery, household electrical appliances, electroheat device, special illuminations, TV set and electric instruments.',
            ]
        };
    }
    if(action.type === "polyster-garware"){
		newState.subBlockData 		= {
            title1 : 'Polyster',
            title2 : 'Garware',
            image : '/images/pic9.jpg',
            para1 : "We are Authorized Distributor of Polyster Film - Garware , which is made up of premier quality raw material thus, confirming to the international standards. It Can be Supplied as per specific sizes of customer's need.",
            para2 : []
        };
    }
    if(action.type === "dr-beck-resins-hardener-varnishes"){
		newState.subBlockData 		= {
            title1 : 'Dr Beck Resins',
            title2 : 'Hardener & Varnishes',
            image : '/images/pic10.jpg',
            para1 : "",
            para2 : [
                '<b>Insulating Varnishes</b>',
                '1. Binder varnishes for glass-fibre covered and braided wires.',
                '2.Impregnation of electrical machine windings transformers, magnet coils for thermal',
                'class 120 to 200 equipment Coating of core plate laminations, capacitors, electronic components etc.',
                '3. Impregnation of hermetically sealed motors.',
                '4.Impregnation of glass-fibre sleevings, tapes etc. Finishing varnish coatings for improved moisture and track resistance.',
                '5.Products: ISOPOXY, Elmoglas, Elmotherm, Elmo®, ISONEL®, Elmo Luft, Becktol',
                '<br/>',
                '<b>Insulating Varnishes</b>',
                '1. Solventless resins for impregnation of electrical machine windings up to thermal class 200.',
                '2. Impregnation of high voltage machines, magnet coils and instrument transformers, D.C. machines, traction motors.',
                '3. Products: Dobeckan®, Dobeckot®',
                '<br/>',
                '<b>Electronic & Engineering Materials</b>',
                'ELANTAS Beck completes its product range for electrical industry by offering Electronic & Engineering Materials which are used for casting, potting & encapsulation. These compounds are used to improve electrical and mechanical properties of the components. Beck offers products based on epoxy & polyurethane with room temperature & heat curing versions. The focus is maintained by providing customized solutions. Beck has introduced products with special characteristics such as fire retardant properties without the use of any banned substance. Single component products, which can serve up to temperature ratings of 180 °C, have been developed.',
                '<br/>',
                '<b>Casting & Potting Compounds</b>',
                'Casting, potting and encapsulation of electrical and electronic components such as high voltage insulators, instrument transformers etc. Impregnation of high voltage windings of electrical machines. Binder resins for glass-fibre filament wound arc chamber tubes. Products: Dobeckot®, Dobefil, Dobeckan®IF',
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